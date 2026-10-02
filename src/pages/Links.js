import './Links.css';

function Links({ setSelected }) {
  const links = [
    {
      id: 1,
      title: 'LinkedIn',
      url: 'linkedin.com/in/tina-t-vu',
      description: 'My experience, education, and professional updates.',
      icon: '/links/linkedin.png',
      link: 'https://www.linkedin.com/in/tina-t-vu/'
    },
    {
      id: 2,
      title: 'GitHub',
      url: 'github.com/Tinatvu22',
      description: 'Source code for my projects, including this portfolio.',
      icon: '/links/github.png',
      link: 'https://github.com/Tinatvu22'
    }
  ];

  // Download function
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tina_s_Resume.pdf';
    link.download = 'Tina_Vu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // View function
  const handleViewResume = () => {
    window.open('/Tina_s_Resume.pdf', '_blank');
  };

  return (
    <div className="page-content">
      <div className="links-container">
        
        {/* Header */}
        <div className="links-header">
          <h1 className="links-title">Links</h1>
          <p className="links-intro">Where to find me outside this little desktop.</p>
        </div>

        {/* Resume Download Card */}
        <div className="resume-card">
          <div className="resume-content">
            <div className="resume-icon">
              <img src="/links/resume.png" alt="Resume" />
            </div>
            <div className="resume-text">
              <h3>Resume</h3>
              <p>Updated [September 2026]</p>
            </div>
          </div>
          <div className="resume-buttons">
            <button className="view-btn" onClick={handleViewResume}>View</button>
            <button className="download-btn" onClick={handleDownloadResume}>⬇ Download</button>
          </div>
        </div>

        {/* Links Grid - Just LinkedIn & GitHub */}
        <div className="links-grid">
          {links.map(link => (
            <a 
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-card-header">
                <div className="link-card-icon">
                  <img src={link.icon} alt={link.title} />
                </div>
                <div className="link-card-title">
                  <h2>{link.title}</h2>
                  <p className="link-card-url">{link.url}</p>
                </div>
                <div className="link-card-arrow">↗</div>
              </div>
              <div className="link-card-description">
                {link.description}
              </div>
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="contact-cta">
          <span className="cta-icon">💌</span>
          <p>Want to reach me? <button onClick={() => setSelected('contact')} className="cta-link">Send a message on the Contact page →</button></p>
        </div>

      </div>
    </div>
  );
}

export default Links;