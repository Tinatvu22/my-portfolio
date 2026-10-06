import './ProjectWindow.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const toSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function FolderIcon() {
  return (
    <svg className="tab-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M1.5 3.5h4l1.5 1.5h7.5v8h-13z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectWindow({ openProjects, activeId, setActiveId, onCloseTab, onCloseAll }) {
  const [maximized, setMaximized] = useState(false);
  const project = openProjects.find(p => p.id === activeId) || openProjects[0];

  // Close the whole window with Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onCloseAll();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onCloseAll]);

  if (!project) return null;

  const windowCount = openProjects.length;

  return createPortal(
    <div className="project-window-overlay" onClick={onCloseAll}>
      <div
        className={`project-window ${maximized ? 'maximized' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Tab Bar */}
        <div className="project-window-bar">
          <div className="project-tabs" role="tablist">
            {openProjects.map(p => (
              <div
                key={p.id}
                className={`project-tab ${p.id === project.id ? 'active' : ''}`}
                role="tab"
                aria-selected={p.id === project.id}
                tabIndex={0}
                title={p.title}
                onClick={() => setActiveId(p.id)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveId(p.id)}
              >
                <FolderIcon />
                <span className="tab-label">{toSlug(p.title)}</span>
                <button
                  className="tab-close"
                  aria-label={`Close ${p.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseTab(p.id);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="project-window-controls">
            <button
              className="control-btn maximize"
              title={maximized ? 'Restore' : 'Maximize'}
              onClick={() => setMaximized(!maximized)}
            >
              <img src="/header-window/maximize.png" alt="Maximize" />
            </button>
            <button className="control-btn close" title="Close" onClick={onCloseAll}>
              <img src="/header-window/close.png" alt="Close" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="project-window-body">

          <div className="project-window-media">
            <div className="project-preview">
              <div className="preview-chrome">
                <span className="chrome-dot" />
                <span className="chrome-dot" />
                <span className="chrome-dot" />
                <span className="chrome-url">{project.url}</span>
              </div>
              <div className="preview-screen">
                <svg className="preview-play" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 4.5v15l12-7.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span>[Screenshot or screen recording of the site]</span>
              </div>
            </div>

            <div className="project-gallery">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="gallery-thumb">[{item}]</div>
              ))}
            </div>

            <div className="project-actions">
              <a className="project-btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Visit Live Site <span aria-hidden="true">↗</span>
              </a>
              <a className="project-btn secondary" href={project.codeUrl} target="_blank" rel="noreferrer">
                View Code
              </a>
            </div>
          </div>

          <div className="project-window-details">
            <h2 className="detail-title">{project.title}</h2>
            <p className="detail-summary">{project.summary}</p>

            <div className="detail-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="detail-tag">{tag}</span>
              ))}
            </div>

            <div className="detail-meta">
              <div className="meta-card">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Timeline</span>
                <span className="meta-value">{project.timeline}</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Type</span>
                <span className="meta-value">{project.type}</span>
              </div>
            </div>

            <h3 className="detail-subheading">What I built</h3>
            <ul className="detail-highlights">
              {project.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {project.caseStudyUrl && (
              <a className="case-study-link" href={project.caseStudyUrl} target="_blank" rel="noreferrer">
                Read the full case study →
              </a>
            )}
          </div>
        </div>

        {/* Terminal status bar */}
        <div className="project-window-status">
          &gt; {windowCount} project {windowCount === 1 ? 'window' : 'windows'} open
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectWindow;
