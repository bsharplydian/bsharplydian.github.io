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
            <div className="page-header">
                <h2>Jacob Memmott - Gameplay Programmer</h2>
                <nav>
                    <div className="nav-padding"></div>
                    <Link to="/projects" className="nav-item nav1">Projects</Link>
                    <Link to="/bio" className="nav-item nav2">Bio</Link>
                    <div className="nav-padding"></div>

                </nav>
            </div>
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
