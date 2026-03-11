import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Bio from "./bio/Bio";
import Projects from "./projects/Projects";
import DemoReel from "./demoreel/Demoreel";

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* navigation */}
      <div className="page-header">
        <title>Jacob Memmott</title>
        <h2>Jacob Memmott - Gameplay Programmer</h2>
        <nav>
          <div className="nav-padding"></div>
          <Link to="/projects" className="nav-item nav1">
            Projects
          </Link>
          <Link to="/demoreel" className="nav-item nav2">
            Demo Reel
          </Link>
          <Link to="/bio" className="nav-item nav3">
            Bio
          </Link>
          <div className="nav-padding"></div>
        </nav>
      </div>
      {/* routes */}
      <Routes>
        <Route path="/" element={<DemoReel />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/demoreel" element={<DemoReel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
