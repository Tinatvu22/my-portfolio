import './Projects.css';
import { useState } from 'react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description.',
      tags: ['Tag', 'Tag'],
      category: 'development'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description.',
      tags: ['Tag', 'Tag'],
      category: 'design'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description.',
      tags: ['Tag', 'Tag'],
      category: 'development'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description.',
      tags: ['Tag', 'Tag'],
      category: 'design'
    },
    {
      id: 5,
      title: 'Project 5',
      ddescription: 'Description.',
      tags: ['Tag', 'Tag'],
      category: 'art'
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description.',
      tags: ['Tag', 'Tag'],
      category: 'development'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="page-content">
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header">
          <div>
            <h1 className="projects-title">Projects</h1>
            <p className="projects-intro">Click any project to open it up and take a look.</p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'development' ? 'active' : ''}`}
              onClick={() => setActiveFilter('development')}
            >
              Development
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'art' ? 'active' : ''}`}
              onClick={() => setActiveFilter('art')}
            >
              Art
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-thumbnail">
                [Thumbnail / screenshot]
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;