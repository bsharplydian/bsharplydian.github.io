import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div className="projects">
      <div className="thumbnails">
        <div className="thumbnail" onClick={() => setCurrentProject(0)}>
          <img src="/InBug-White.png"></img>
          <div>Grapple Game</div>
        </div>
        <div className="thumbnail" onClick={() => setCurrentProject(1)}>
          <img src="/maze.png"></img>
          <div>Maze Generator</div>
        </div>
        <div className="thumbnail" onClick={() => setCurrentProject(2)}>
          <img src="/InBug-White.png"></img>
          <div>Dragon Kisser</div>
        </div>
      </div>
      {currentProject == 0 && <Grapple />}
      {currentProject == 1 && <Maze />}
      {currentProject == 2 && <div>dragon kisser content</div>}
    </div>
  );
};

const Maze = () => {
  return (
    <div>
      <h1>MAZE GENERATOR</h1>
      <p>
        This project was my introduction to UE5's Blueprints. Inspired by Jamis
        Buck's advice that "generating mazes is a great default project when
        experimenting with a new programming language," I set out to make a
        dungeon generator tool.
      </p>
      <p>
        My first task was to represent a floor plan in code. I decided that my
        best plan would be to use a bitwise binary number, with each digit
        representing a passageway pointing North, South, East, or West.
        [pictures and such to explain my representation]
      </p>
      <p>
        My second was to pick a maze generation algorithm. I chose the Recursive
        Backtracker algorithm, since it was the most straightforward and I liked
        the mazes it generated.
      </p>
      <p>
        My intention was to use C++, since an algorithm would both run faster
        and be more comfortable to code in a traditional programming language.
        However, I ran into problems as I quickly found that my school's lab
        computers didn't have Visual Studio installed. (I found out months later
        that I could have used JetBrains Rider, but for the moment the only
        option seemed to be Blueprints). So, undeterred, I pushed forward with
        Blueprints.
      </p>
      <p>
        Thankfully, Blueprints had an Enum type compatible with my bitwise model
        of maze passageways, and I got to work building the recursive
        backtracker algorithm.
      </p>
      <p>
        It was here that I ran into my first major hurdle: Unreal had detected
        the large amounts of recursion necessary for the algorithm and closed
        the process prematurely, assuming an infinite loop. I could have
        manually changed the threshold for infinite loop detection, but that
        felt a little hacky, and besides, the recursive backtracker isn't all
        that efficient in the first place.
      </p>
      <p>
        I tried momentarily to change my approach from recursion to iteration,
        but again found no luck.
      </p>
      <p>
        Finally, I switched to Prim's Algorithm, which works iteratively over
        the whole graph. [pictures to explain representation]
      </p>
      <p>
        Blessedly, I could adapt my existing model of maze passageways to match
        Prim's algorithm.
      </p>
      <p>
        After hours of debugging and discovering some Blueprint quirks, I
        finally had a working maze generator!
      </p>
      <p>Behold:</p>
    </div>
  );
};

const Grapple = () => {
  return (
    <div>
      <h1>Grapple Game</h1>

      <p>
        For this project, I was tasked with prototyping a game mechanic. The
        theme: campers discover an abandoned nuclear power plant. I struggled
        for days with finding the perfect idea. And then, like a flash, it hit
        me during a walk to my apartment: I would make a GRAPPLING HOOK.
      </p>

      <p>
        The vision was clear: I was going to make a Portal-like mechanic to
        solve puzzles that felt <i>really good</i> to use. I wanted to capture
        the Spider-Man-like feeling of swishing through the air on a tether.
      </p>

      <p>
        I had discovered JetBrains Rider by this point, and my goal was to
        explore using C++ with Blueprints, particularly since I needed granular
        control over the player's position and velocity to make the movement
        possible.
      </p>

      <p>
        I went through several iterations of the grappling hook.The first felt a
        lot like Rusted Moss, using Hooke's Law to create a stretchy
        rubber-band-like movement. But it didn't have the SWISH. Instead of a
        smooth swing, it created jarring bounces, and from the player's
        first-person perspective, it didn't feel good.I decided to shelve the
        idea and move on to another rope swinging model.
      </p>

      <p>
        The second iteration is the one I ended up polishing.I found{" "}
        <a href="https://alltuto35.wordpress.com/2014/12/20/swinging-physics-for-player-movement-as-seen-in-spider-man-2-and-energy-hook/">
          a blog
        </a>{" "}
        by alltuto35, one of the programmers on the Spider-Man 2 game, where
        they explain their own implementation of a swinging mechanic. I used
        their 2D explanation as a model to build 3D physics logic for my grapple
        gun.
      </p>

      <p>
        I created a UCustomMovementMode, then implemented the swinging logic in
        C++. It worked and had the swish feeling I was looking for, but came
        with its own set of problems to solve.A custom movement mode needs
        custom logic to enter and exit, and there were edge cases I hadn't
        considered. For example, what if the player grapples onto a surface but
        chooses to walk on the floor instead? What if they try to walk further
        than the rope length should allow, without the bounds check that takes
        place in the Swinging movement mode? I spent several days chasing down
        and squashing these bugs.
      </p>

      <p>Eventually, I had a polished game mechanic!</p>

      <p>
        I used Perforce to pull in assets from my classmates and create a demo
        level, hastily adding a checkpoint system and an upper limit on the
        grapple distance.Here I gave players a quick reset if they missed a leap
        and prevented them from sequence breaking by reeling themselves all the
        way to the end of the level.
      </p>

      <p>
        This project is still ongoing! I plan on refactoring a lot of my code
        for readability and continuing to polish this mechanic until it shines.
      </p>
    </div>
  );
};

export default Projects;
