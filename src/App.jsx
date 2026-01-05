import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Bio from './bio/Bio';
import Projects from './projects/Projects';

function Home() {
    return <h1>Home</h1>
}

function App() {
    return (
        <HashRouter>
            {/* navigation */}
            <h2>Jacob Memmott - Gameplay Programmer</h2>
            <nav>
                <Link to="/projects" className="nav-item">Projects</Link>
                <Link to="/bio" className="nav-item">Bio</Link>

            </nav>
            {/* routes */}
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
    )
}

export default App
