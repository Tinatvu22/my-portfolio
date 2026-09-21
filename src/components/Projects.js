function Projects() {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description here' },
    { id: 2, name: 'Project 2', description: 'Description here' },
    { id: 3, name: 'Project 3', description: 'Description here' },
  ];

  return (
    <section>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;