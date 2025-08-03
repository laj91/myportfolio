import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Min personlige portefølje bygget med React.",
    github: "https://github.com/din-bruger/portfolio"
  },
  {
    title: "Todo App",
    description: "En simpel todo-applikation med React og hooks.",
    github: "https://github.com/din-bruger/todo-app"
  },
  {
    title: "API Integration",
    description: "Projekt med integration til eksterne REST API'er.",
    github: "https://github.com/din-bruger/api-integration"
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2>Mine Projekter</h2>
      <div className="projects__grid">
        {projects.map((proj, idx) => (
          <div className="project__card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

