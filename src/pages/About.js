import './About.css';

function About() {
  return (
    <div className="page-content">
      <div className="about-container">
        
        {/* Header with title, sections, and photo */}
        <div className="about-header">
          {/* Left: Title, Tagline, Occupation & Bio */}
          <div className="about-left">
            <h1 className="about-title">Hello, My Name Is Tina!</h1>
            <p className="about-tagline">Computer science grad learning something new with every build.</p>
            
            <div className="about-section">
              <h2>Occupation</h2>
              <p>Computer Science graduate from the University of Houston (B.S. in Computer Science, Minor in Mathematics).</p>
            </div>
            
            <div className="about-section">
              <h2>Bio Summary</h2>
              <p>I started my computer science journey at Lone Star College before transferring to the University of 
                Houston, where I got into everything from natural language processing to database systems. 
                I like building things that are both functional and nice to use, whether that's a system with a clean 
                backend or a search engine that digs through product reviews. As a tutor, I learned how much I enjoy 
                breaking complex ideas into clear steps, and I bring that same patience to how I write and organize code.</p>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="about-photo">
            [Photo or illustration of you]
          </div>
        </div>

        {/* THREE CARDS */}
        <div className="about-cards">
          
          {/* Card 1: Skills & Tools */}
          <div className="card">
            <h3>Skills & Tools</h3>
            
            <div className="skills-category">
              <div className="category-label">Languages</div>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">C/C++</span>
              </div>
            </div>

            <div className="skills-category">
              <div className="category-label">Frameworks & Libraries</div>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="skills-category">
              <div className="category-label">Tools</div>
              <div className="skill-tags">
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">PyCharm</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
          </div>

          {/* Card 2: Currently */}
          <div className="card">
            <h3>Currently...</h3>
            
            <div className="currently-item">
              <span className="currently-label">Learning</span>
              <span className="currently-value">[]</span>
            </div>
            <div className="currently-item">
              <span className="currently-label">Building</span>
              <span className="currently-value">[]</span>
            </div>
            <div className="currently-item">
              <span className="currently-label">Playing</span>
              <span className="currently-value">[]</span>
            </div>
            <div className="currently-item">
              <span className="currently-label">Listening</span>
              <span className="currently-value">[]</span>
            </div>
          </div>

          {/* Card 3: Fun Facts */}
          <div className="card">
            <h3>Fun Facts</h3>
            
            <div className="fun-fact">
              <span className="fun-fact-number">01</span>
              <span className="fun-fact-text">[]</span>
            </div>
            <div className="fun-fact">
              <span className="fun-fact-number">02</span>
              <span className="fun-fact-text">[]</span>
            </div>
            <div className="fun-fact">
              <span className="fun-fact-number">03</span>
              <span className="fun-fact-text">[]</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;