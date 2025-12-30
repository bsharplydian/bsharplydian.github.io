import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bio from './bio/Bio';
import Projects from './projects/Projects';

function Home() {
    return <h1>Home</h1>
}

function App() {
    return (
        <BrowserRouter>
            {/* navigation */}
            <h1>Jacob Memmott</h1>
            <h2>Gameplay Programmer</h2>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/bio">Bio</Link> | {" "}
                <Link to="/projects">Projects</Link> | {" "}
            </nav>
            {/* routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
