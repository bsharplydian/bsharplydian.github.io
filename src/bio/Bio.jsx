import './Bio.css'

function Bio() {
    return (
        <div className="bio-page">
            <h1 className="bio-title">Bio</h1>
            <div className="about">
                <img src="/portrait.jpg"></img>
                <p className="bio-text">Jacob Memmott is a junior studying gameplay programming at Brigham Young University, with expected graduation in 2027. His mission is to use the medium of video games to promote optimism and relatedness.</p>
            </div>
            <h1>Contact</h1>
            <div className="networking-links">
                <a href="https://www.linkedin.com/in/jacob-memmott-3296331b4/" className="networking-link">
                    <img src="/InBug-White.png"></img>
                </a>
                <a href="https://github.com/bsharplydian" className="networking-link">
                    <img src="/github-mark-white.png" ></img>
                </a>
            </div>
        </div>
    )
}

export default Bio