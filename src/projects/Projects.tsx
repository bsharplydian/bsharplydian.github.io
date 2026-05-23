import "./Projects.css";
import { useState } from "react";
import Project from "./Project.jsx";
import Maze from "./Maze.jsx";
import DragonKisser from "./DragonKisser.jsx";
import Grapple from "./Grapple.jsx";
import FloorScrubber from "./FloorScrubber.jsx";
import CircusMaze from "./CircusMaze.jsx";
import Thumbnail from "./Thumbnail";
enum ProjectType {
  GrappleGame,
  MazeGenerator,
  DragonKisser,
  FloorScrubber,
  CircusMaze,
}
const Projects = () => {
  const [currentProject, setCurrentProject] = useState(ProjectType.GrappleGame);
  return (
    <div className="projects">
      <div className="thumbnails">
        <Thumbnail
          onClick={() => setCurrentProject(ProjectType.GrappleGame)}
          imagePath="/placeholder.webp"
          title="Grapple Game"
          engine="Unreal Engine 5"
          date="Sep 2025-Apr 2026"
        />
        <Thumbnail
          onClick={() => setCurrentProject(ProjectType.CircusMaze)}
          imagePath={"/placeholder.webp"}
          title={"Circus Maze Escape"}
          engine={"Unity 6"}
          date={"Mar 2026-Apr 2026"}
        />
        <Thumbnail
          onClick={() => setCurrentProject(ProjectType.MazeGenerator)}
          imagePath="/maze.png"
          title="Maze Generator"
          engine="Unreal Engine 5"
          date="May 2025"
        />
        <Thumbnail
          onClick={() => setCurrentProject(ProjectType.DragonKisser)}
          imagePath="/placeholder.webp"
          title="Dragon Kisser"
          engine="Unreal Engine 5"
          date="Jul 2025"
        />
        <Thumbnail
          onClick={() => setCurrentProject(ProjectType.FloorScrubber)}
          imagePath={"/fss_floorShader.png"}
          title={"Floor Scrubber Simulator"}
          engine={"Unity 6"}
          date={"May 2026-"}
        />
      </div>
      {currentProject == 0 && <Grapple />}
      {currentProject == 1 && <Maze />}
      {currentProject == 2 && <DragonKisser />}
      {currentProject == 3 && <FloorScrubber />}
      {currentProject == 4 && <CircusMaze />}
    </div>
  );
};

export default Projects;
