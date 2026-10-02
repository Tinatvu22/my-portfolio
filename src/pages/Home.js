import './Home.css';

function Home({ setSelected }) {
  return (
    <div className="page-content">
      <div className="home-container">
        
        {/* Main Section */}
        <div className="home-main">
          <div className="home-left">
            <h1 className="home-greeting">Hi, I'm Tina!</h1>
            <p className="home-subtitle">Computer science grad still learning the ways of full-stack development.</p>
            
            <div className="home-buttons">
              <button 
                className="btn-primary"
                onClick={() => setSelected('projects')}
              >
                View My Projects →
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setSelected('contact')}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="home-right">
            <div className="avatar-circle">
              [Your avatar, shown larger]
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="home-cards">
          
          {/* Status Card */}
          <div className="card status-card">
            <h3 className="card-label">STATUS</h3>
            <div className="status-badge">
              <span className="status-dot"></span>
              <span className="status-text">Open to opportunities</span>
            </div>
            <p className="card-description">Software developer roles · Houston, TX or remote</p>
          </div>

          {/* Featured Project Card */}
          <div className="card featured-card">
            <h3 className="card-label">FEATURED PROJECT</h3>
            <h2 className="card-title">Not Yet Sure</h2>
            <div className="card-tags">
              <span className="tag">[]</span>
              <span className="tag">[]</span>
            </div>
            <button 
              className="card-link"
              onClick={() => setSelected('projects')}
            >
              Open →
            </button>
          </div>

          {/* Learning Card */}
          <div className="card learning-card">
            <h3 className="card-label">CURRENTLY LEARNING</h3>
            <h2 className="card-title">C / C++</h2>
            <p className="card-description">Also building: this portfolio</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;