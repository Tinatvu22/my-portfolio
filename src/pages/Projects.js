import './Projects.css';
import { useCallback, useState } from 'react';
import ProjectWindow from '../components/ProjectWindow/ProjectWindow';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openIds, setOpenIds] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Description.',
      summary: 'An interactive, OS-themed portfolio where each page opens like an app window. Designed in Figma, built in React.',
      tags: ['React', 'JavaScript', 'CSS', 'Figma', 'UI/UX Design'],
      category: 'development',
      url: '[project-url.com]',
      liveUrl: '#',
      codeUrl: '#',
      caseStudyUrl: '#',
      role: 'Design & Dev',
      timeline: '[Month Year]',
      type: 'Solo project',
      highlights: [
        '[Sidebar that switches pages like desktop apps]',
        '[Terminal footer with live time and dark mode]',
        '[Something you learned or a challenge you solved]'
      ],
      gallery: ['Home', 'About', 'Mobile view', 'Figma design']
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description.',
      summary: '[One or two sentences about what this project is and why you made it.]',
      tags: ['Tag', 'Tag'],
      category: 'design',
      url: '[project-url.com]',
      liveUrl: '#',
      codeUrl: '#',
      caseStudyUrl: '#',
      role: '[Role]',
      timeline: '[Month Year]',
      type: '[Solo / Team]',
      highlights: ['[Key feature]', '[Key feature]', '[Something you learned or a challenge you solved]'],
      gallery: ['Screen', 'Screen', 'Screen', 'Screen']
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description.',
      summary: '[One or two sentences about what this project is and why you made it.]',
      tags: ['Tag', 'Tag'],
      category: 'development',
      url: '[project-url.com]',
      liveUrl: '#',
      codeUrl: '#',
      caseStudyUrl: '#',
      role: '[Role]',
      timeline: '[Month Year]',
      type: '[Solo / Team]',
      highlights: ['[Key feature]', '[Key feature]', '[Something you learned or a challenge you solved]'],
      gallery: ['Screen', 'Screen', 'Screen', 'Screen']
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description.',
      summary: '[One or two sentences about what this project is and why you made it.]',
      tags: ['Tag', 'Tag'],
      category: 'design',
      url: '[project-url.com]',
      liveUrl: '#',
      codeUrl: '#',
      caseStudyUrl: '#',
      role: '[Role]',
      timeline: '[Month Year]',
      type: '[Solo / Team]',
      highlights: ['[Key feature]', '[Key feature]', '[Something you learned or a challenge you solved]'],
      gallery: ['Screen', 'Screen', 'Screen', 'Screen']
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description.',
      summary: '[One or two sentences about what this project is and why you made it.]',
      tags: ['Tag', 'Tag'],
      category: 'art',
      url: '[project-url.com]',
      liveUrl: '#',
      codeUrl: '#',
      caseStudyUrl: '#',
      role: '[Role]',
      timeline: '[Month Year]',
      type: '[Solo / Team]',
      highlights: ['[Key feature]', '[Key feature]', '[Something you learned or a challenge you solved]'],
      gallery: ['Screen', 'Screen', 'Screen', 'Screen']
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description.',
      summary: '[One or two sentences about what this project is and why you made it.]',
      tags: ['Tag', 'Tag'],
      category: 'development',
      url: '[project-url.com]',
      liveUrl: '#',
      codeUrl: '#',
      caseStudyUrl: '#',
      role: '[Role]',
      timeline: '[Month Year]',
      type: '[Solo / Team]',
      highlights: ['[Key feature]', '[Key feature]', '[Something you learned or a challenge you solved]'],
      gallery: ['Screen', 'Screen', 'Screen', 'Screen']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openProjects = openIds.map(id => projects.find(p => p.id === id));

  // Open a project as a tab (or switch to it if it's already open)
  const openProject = (id) => {
    setOpenIds(ids => (ids.includes(id) ? ids : [...ids, id]));
    setActiveId(id);
  };

  const closeTab = (id) => {
    const remaining = openIds.filter(openId => openId !== id);
    setOpenIds(remaining);
    if (id === activeId) {
      setActiveId(remaining.length ? remaining[remaining.length - 1] : null);
    }
  };

  const closeAll = useCallback(() => {
    setOpenIds([]);
    setActiveId(null);
  }, []);

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
            <div
              key={project.id}
              className="project-card"
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.id)}
              onKeyDown={(e) => e.key === 'Enter' && openProject(project.id)}
            >
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

      {openProjects.length > 0 && (
        <ProjectWindow
          openProjects={openProjects}
          activeId={activeId}
          setActiveId={setActiveId}
          onCloseTab={closeTab}
          onCloseAll={closeAll}
        />
      )}
    </div>
  );
}

export default Projects;