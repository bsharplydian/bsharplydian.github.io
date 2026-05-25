import "./Projects.css";
import { useState } from "react";
import Project from "./Project.jsx";
import Maze from "./MazeGenerator.jsx";
import DragonKisser from "./DragonKisser.jsx";
import Grapple from "./Grapple.jsx";
import FloorScrubber from "./FloorScrubber.jsx";
import CircusMaze from "./CircusMaze.jsx";
import Thumbnail from "./Thumbnail";
enum ProjectType {
  Empty,
  GrappleGame,
  MazeGenerator,
  DragonKisser,
  FloorScrubber,
  CircusMaze,
}
const Projects = () => {
  const [currentProject, setCurrentProject] = useState(ProjectType.Empty);
  const setCurrentProjectWrapper = (targetProject: ProjectType) => {
    if (currentProject === targetProject) {
      setCurrentProject(ProjectType.Empty);
    } else {
      setCurrentProject(targetProject);
    }
  };
  return (
    <div className="projects">
      <div className="thumbnails">
        <Thumbnail
          onClick={() => setCurrentProjectWrapper(ProjectType.GrappleGame)}
          imagePath="/placeholder.webp"
          title="Grapple Game"
          engine="Unreal Engine 5"
          date="Sep 2025-Apr 2026"
        />
        <Thumbnail
          onClick={() => setCurrentProjectWrapper(ProjectType.CircusMaze)}
          imagePath={"/placeholder.webp"}
          title={"Circus Maze Escape"}
          engine={"Unity 6"}
          date={"Mar-Apr 2026"}
        />
        <Thumbnail
          onClick={() => setCurrentProjectWrapper(ProjectType.MazeGenerator)}
          imagePath="/maze.png"
          title="Maze Generator"
          engine="Unreal Engine 5"
          date="May 2025"
        />
        <Thumbnail
          onClick={() => setCurrentProjectWrapper(ProjectType.DragonKisser)}
          imagePath="/placeholder.webp"
          title="Dragon Kisser"
          engine="Unreal Engine 5"
          date="Jul 2025"
        />
        <Thumbnail
          onClick={() => setCurrentProjectWrapper(ProjectType.FloorScrubber)}
          imagePath={"/fss_floorShader.png"}
          title={"Floor Scrubber Simulator"}
          engine={"Unity 6"}
          date={"May 2026-"}
        />
      </div>
      {currentProject == ProjectType.Empty && <div />}
      {currentProject == ProjectType.GrappleGame && <Grapple />}
      {currentProject == ProjectType.MazeGenerator && <Maze />}
      {currentProject == ProjectType.DragonKisser && <DragonKisser />}
      {currentProject == ProjectType.FloorScrubber && <FloorScrubber />}
      {currentProject == ProjectType.CircusMaze && <CircusMaze />}
    </div>
  );
};

export default Projects;
