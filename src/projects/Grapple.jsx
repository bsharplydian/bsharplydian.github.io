import Project from "./Project";

const Grapple = () => {
  return (
    <>
      <Project
        title="Grapple Game"
        thumbnail=""
        content={
          <>
            <h2>Part 1: The Concept</h2>
            <p>
              This project started with a simple idea: I wanted to capture the
              "swish" feeling of swinging through the air on a tether.
            </p>

            <p>
              I also had a secondary goal: I wanted to explore using C++ in
              Unreal, since I had only ever used Blueprints.
            </p>
            <img height={100} width={100} src={"/placeholder.webp"} />

            <h2>Part 2: The Rough Draft</h2>
            <p>
              I started by using Hooke's Law to create a stretchy
              rubber-band-like grappling hook, but it was missing the "SWISH."
              Instead of a smooth swing, it created jarring, clunky bounces. I
              decided to shelve the idea and move on to another model.
            </p>

            <img height={100} width={100} src={"/placeholder.webp"} />
            <p>
              Searching for a different swinging equation, I found{" "}
              <a href="https://alltuto35.wordpress.com/2014/12/20/swinging-physics-for-player-movement-as-seen-in-spider-man-2-and-energy-hook/">
                a blog
              </a>{" "}
              by Jamie Fristrom, one of the programmers for Spider-Man 2, where
              he explains his own implementation of a swinging mechanic. I used
              his 2D explanation as a model to build 3D physics logic for my
              grapple gun.
            </p>
            <img height={100} width={100} src={"/placeholder.webp"} />

            <p>
              I created a UCustomMovementMode, then implemented the swinging
              logic in C++. It worked! And even better, it had the "swish" I was
              looking for. However, it came with a brand-new set of
              complications that required much troubleshooting and bug fixes.
            </p>

            <p>
              I used Perforce to pull in assets from my classmates and create a
              demo level, hastily adding a checkpoint system and an upper limit
              on the grapple distance. These additions gave players a quick
              reset if they missed a leap and prevented them from sequence
              breaking by reeling themselves all the way to the end of the
              level.
            </p>
            <img height={100} width={100} src={"/placeholder.webp"} />

            <h2>Part 3: The Polish</h2>
            <p>
              I took a break for Christmas, and then came back to the project
              with a direction in mind.
            </p>
            <p>
              I removed extra assets and made a whitebox level, stripping away
              anything not related to the player's movement. Then I spent a week
              reorganizing my code, preparing for the next few months of work.
            </p>
            <img height={100} width={100} src={"/placeholder.webp"} />
            <img height={100} width={100} src={"/placeholder.webp"} />
            <p>
              I had a product, but now I needed to break it down and focus on
              what made it fun.
            </p>
            <p>Here are the main improvements I made:</p>
            <ul>
              <li>switching to a third-person camera</li>
              <img height={100} width={100} src={"/placeholder.webp"} />
              <li>adding a crosshair that follows grappleable surfaces</li>
              <img height={100} width={100} src={"/placeholder.webp"} />
              <li>
                adding (generous) aim assist! This one was super fun, there was
                a lot of linear algebra involved.
              </li>
              <img height={100} width={100} src={"/placeholder.webp"} />
              <li>background music and sound design</li>
              <li>speed lines, trails, and sparks using Niagara</li>
              <img height={100} width={100} src={"/placeholder.webp"} />
            </ul>
            <p>
              These changes had some good and some bad effects. The pros: the
              game was much more fun and accessible (huzzah)! The cons: the game
              was no longer the game I had initially set out to make. Somewhere
              along the line, its focus had shifted from puzzles to speed.
            </p>
            <p>
              Though I am satisfied with the results of my effort, I learned
              several valuable lessons while working on this game:
              <ul>
                <li>It is easy to forget the original vision for a game.</li>
                <li>
                  However, it is sometimes ok for the game's vision to evolve as
                  I discover new ways to make it fun.
                </li>
              </ul>
            </p>
            <p>-Jacob</p>
          </>
        }
      />
    </>
  );
};

export default Grapple;
