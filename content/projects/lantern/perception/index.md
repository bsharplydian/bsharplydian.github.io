---
title: Enemy Perception System
---

## Problem: Unreal's Perception isn't Specific

Unreal’s default perception is a simple cone shape. It fires a delegate only when something enters or exits. However, our Guards need to react more realistically by taking peripheral vision and player light emission into account.

## Solution: Build a Zone-Based System

Define Green, Yellow, and Red zones. Notify the Guard when an object crosses between zones.

### Step 1: `GuardController` Gets Information from the Stimulus

The Guard uses the `DetectableLight` interface to get the stimulus’s location and light level.

> [!NOTE]
> I use an interface here because it allows the Guard to detect other objects like Distractions that implement `DetectableLight`.

```c
auto [Location, LightStrength, bHiding] = IDetectableLight::Execute_GetDetectability(Light.GetObject());
```

### Step 2: Combine Stimulus Information to Create a `Decision` Float

The `GuardController` asks its `PerceptionComponent` to calculate the Detection Strength and Detection State.

```cpp
// Player should not be detected if they're hiding in a crevice.
NewDetectionStrength = GuardPerception->GetDetectionStrength(GetPawn()->GetActorLocation(), Location, SightConfig->LoseSightRadius, LightStrength);

// calculate the new green/yellow/red state based on the strength
EDetectionState NewDetectionState = GuardPerception->GetDetectionState(NewDetectionStrength.YellowStrength, NewDetectionStrength.RedStrength);
```

#### `GetDetectionStrength()`

The `PerceptionComponent` uses some linear algebra wizardry to make this calculation.

It starts by getting its initial values: `AngleNormalized`, `DistanceNormalized`, and `LightAmount` (which is passed as a parameter) are floats between 0 and 1. Values closer to 1 indicate more obvious stimuli: closer and in front of the guard. Values closer to 0 indicate less obvious stimuli: further away and in its peripheral vision.

```cpp
FVector Direction = (StimulusLocation - SelfLocation).GetSafeNormal2D();
float AngleNormalized = Direction.Dot(this->GetOwner()->GetActorForwardVector());
float DistanceNormalized = 1-UKismetMathLibrary::Vector_Distance2D(StimulusLocation, SelfLocation)/(LoseSightRadius);
```

Next it adjusts those values based on their "importance", by multiplying them by weights given by the designer:

```cpp
// yellow
float YellowAngleNormalized = AngleNormalized*YellowAngleWeight;
float YellowDistanceNormalized = DistanceNormalized*YellowDistanceWeight;
float YellowLightAmountNormalized = LightAmount*YellowLightWeight;

float YellowDecision = YellowAngleNormalized + YellowDistanceNormalized + YellowLightAmountNormalized;
```

It calculates the same thing for its Red state:

```cpp
// red
float RedAngleNormalized = AngleNormalized*RedAngleWeight;
float RedDistanceNormalized = DistanceNormalized*RedDistanceWeight;
float RedLightAmountNormalized = LightAmount*RedLightWeight;

float RedDecision = RedAngleNormalized + RedDistanceNormalized + RedLightAmountNormalized;
```

> [!NOTE]
> Calculating both Yellow and Red values here gives the designer control over the size of the Yellow and Red zones independently.

And then returns the `Decision` floats, which are between 0 and 1:

```cpp
return FDetectionStrengthPair(YellowDecision, RedDecision);
```

### Step 3: Compare Decision to Thresholds

#### `GetDetectionState()`

Simply returns a `DetectionState` enum based on the red and yellow scores.

> [!NOTE]
> The designer can adjust the thresholds in the Blueprint class to influence the size of each zone.

```cpp
if (RedDecision > AggroThreshold)
{
    return Red;
}
if (YellowDecision > CuriousThreshold)
{
    return Yellow;
}
return Green;
```

### Step 4: Raise Delegates in the Blueprint Class

The `GuardController` calls HandleDetectionStateChanges, passing in the object, its current `DetectionState`, its `DetectionState` from the previous tick, and its location.

```cpp
HandleDetectionStateChanges(HighestLight, HighestNewDetectionState, HighestOldDetectionState, HighestLocation);
```

#### `HandleDetectionStateChanges()`

This function checks the old state and the new state; if they're different from each other, that means an object has crossed from one zone to another. Depending on the zones involved, it calls `OnPlayerLost`, `OnLightDetected`, or `OnLightAggro`, all three of which can be overridden by a designer to customize the guard's reaction to stimuli.

```cpp
if(OldState == NewState) return;

switch (NewState)
{
    case Green:
        if (OldState == Yellow) //yellow->green
        {
            OnPlayerLost(Location);
        }
        break;
    case Yellow:
        if (OldState == Green) //green->yellow
        {
            OnLightDetected(Light);
        } else if (OldState == Yellow) {
            if (Light != PriorityLight) // yellow->yellow but there's a different target
            {
                OnLightDetected(Light);
            }
        }
        break;
    case Red:
        if (OldState == Green || OldState == Yellow) //green->red or yellow->red
        {
            OnLightAggro(Light);
        }
    break;
}
```

## Outcome

This system has allowed us to create a Guard that sees stimuli naturally. There are plenty of knobs exposed for designers to have fine control over the yellow and red zones. See also [the tool I made]({{< relref "vision-cone-tool.md" >}}) that lets designers visualize the perception zones.
