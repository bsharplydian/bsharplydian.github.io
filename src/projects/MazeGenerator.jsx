import Project from "./Project.jsx";

const MazeGenerator = () => {
  return (
    <>
      <Project
        title="Maze Generator Tool"
        thumbnail="/maze.png"
        content={
          <>
            <p>
              This project was my introduction to UE5's Blueprints. Inspired by
              Jamis Buck's advice that "generating mazes is a great default
              project when experimenting with a new programming language," I set
              out to make a dungeon generator tool.
            </p>
            <p>
              My first task was to represent a floor plan in code. I decided
              that my best plan would be to use a bitwise binary number, with
              each digit representing a passageway pointing North, South, East,
              or West. [pictures and such to explain my representation]
            </p>
            <p>
              My second was to pick a maze generation algorithm. I chose the
              Recursive Backtracker algorithm, since it was the most
              straightforward and I liked the mazes it generated.
            </p>
            <p>
              My intention was to use C++, since an algorithm would both run
              faster and be more comfortable to code in a traditional
              programming language. However, I ran into problems as I quickly
              found that my school's lab computers didn't have Visual Studio
              installed. (I found out months later that I could have used
              JetBrains Rider, but for the moment the only option seemed to be
              Blueprints). So, undeterred, I pushed forward with Blueprints.
            </p>
            <p>
              Thankfully, Blueprints had an Enum type compatible with my bitwise
              model of maze passageways, and I got to work building the
              recursive backtracker algorithm.
            </p>
            <p>
              It was here that I ran into my first major hurdle: Unreal had
              detected the large amounts of recursion necessary for the
              algorithm and closed the process prematurely, assuming an infinite
              loop. I could have manually changed the threshold for infinite
              loop detection, but that felt a little hacky, and besides, the
              recursive backtracker isn't all that efficient in the first place.
            </p>
            <p>
              I tried momentarily to change my approach from recursion to
              iteration, but again found no luck.
            </p>
            <p>
              Finally, I switched to Prim's Algorithm, which works iteratively
              over the whole graph. [pictures to explain representation]
            </p>
            <p>
              Blessedly, I could adapt my existing model of maze passageways to
              match Prim's algorithm.
            </p>
            <p>
              After hours of debugging and discovering some Blueprint quirks, I
              finally had a working maze generator!
            </p>
            <p>Behold:</p>
            <p>
              I am also repurposing this tool to be used in a carnival-themed
              horror game.
            </p>
          </>
        }
      ></Project>
    </>
  );
};

export default MazeGenerator;
