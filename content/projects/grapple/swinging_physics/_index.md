---
title: Implementing Pendulum Motion
---

{{< figure
    src="featured.jpeg"
    alt="Design Doc"
    caption="Extremely technical diagram from my design doc"
    >}}

<!-- {{<badge>}} engineering {{</badge>}} {{<badge>}} design {{</badge>}} -->

> [!NOTE]
> I owe a thank-you to [Jamie Fristrom](https://code.tutsplus.com/swinging-physics-for-player-movement-as-seen-in-spider-man-2-and-energy-hook--gamedev-8782t) for his article on the logic involved in pendulum motion.

### The Problem: Preserving Momentum

I needed a way to get the "swishy" motion of a pendulum. If the player was falling fast, that momentum needed to transfer to horizontal or upward motion when they grappled and released.

### The Solution: Physics-Based Swinging

Mr. Fristrom's method worked well for my needs. On each physics tick:

1. Calculate the player's next-tick position as though they are falling normally.

```cpp
FVector TestLocation = OldLocation + Velocity*deltaTime;
FVector AnchorLocation = GetAnchorPosition();
```

2. Use linear algebra wizardry to project the next-tick position onto a sphere around the grapple point.

```cpp
if ((TestLocation-AnchorLocation).Size() > GetRopeLength()) {
	TestLocation = GetClosestTautLocation(TestLocation, AnchorLocation);
}
```

```cpp
FVector GetClosestTautLocation(const FVector PlayerLocation, const FVector AnchorLocation)
{
	return (PlayerLocation-AnchorLocation).GetSafeNormal()*GetRopeLength()+AnchorLocation;
}
```

3. Calculate a new velocity vector based on the new "taut" next-tick position.

```cpp
Velocity = (TestLocation - OldLocation)/deltaTime;
Velocity += -GravityScale * SwingingGravityScale * Super::GetGravityZ() * FVector::DownVector * deltaTime;
```

> [!NOTE]
> Here I modify the pendulum physics slightly by adding an extra `SwingingGravityScale` while the player is grappled. This gives the pendulum motion a sense of weight, while preserving a "floaty" sensation when the player launches themselves.

4. Execute the move based on this new velocity.

```cpp
FVector AdjustedVelocity = Velocity * deltaTime;
SafeMoveUpdatedComponent(AdjustedVelocity, OldRotation, true, Hit);
```

### Gaining Speed by Retracting: Roadblock and Solution

I ran into an interesting problem as I was implementing the second half of my pendulum motion: I wanted players to be able to retract their grappling hook, gaining momentum by shortening their tether.

This calculation was easy: I just needed to reduce the rope length and the existing physics calculations would handle the "conservation of angular momentum" part.

```cpp
void RetractPressed()
{
	if (GetRopeLength() > MinRopeLength)
	{
		const int RetractSpeed = GrappleCharacterOwner->RetractSpeed;
		const float NewRopeLength = GetRopeLength()-RetractSpeed;
		GrappleCharacterOwner->SetRopeLength(NewRopeLength);
	}
}
```

However, I began seeing concerning results in playtesting. While this logic worked perfectly fine on my machine, a friend's laptop behaved quite differently. Some players were practically unable to retract their hook in the first place! What could be causing this discrepancy?

I realized that there was a link between the hardware and the gameplay: a player on my powerful lab machine could retract their grappling hook far faster than my cousin on his potato.

The horror: I had created a system that favored more powerful computers. I had forgotten to account for tick time!

Adding delta seconds to this calculation fixed the problem and forestalled any pay-to-win accusations:

```cpp
void RetractPressed()
{
	if (GetRopeLength() > MinRopeLength)
	{
		const int RetractSpeed = MyGrappleCharacterOwner->RetractSpeed;
		const float NewRopeLength = GetRopeLength()-RetractSpeed*GetWorld()->GetDeltaSeconds();
		MyGrappleCharacterOwner->SetRopeLength(NewRopeLength);
	}
}
```

### Outcome

The swinging physics were the most attractive feature of Grapple Game. It felt gratifying to swing, retract, fly through the air, and continually build speed. As my playtesters played the game, I recorded races around the map, and they spent hours competing to get the fastest time.
