import React, { useState, useEffect } from "react";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const API_URL = "https://sachin-s-portfolio-gilt.vercel.app/projects";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <section className="project-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image || "https://via.placeholder.com/300x200?text=Project+Image"} 
              alt={project.name} 
              className="project-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=Project+Image";
              }}
            />
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.github_links && (
                  <a href={project.github_links} className="project-link" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.website_url && (
                  <a href={project.website_url} className="project-link" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
