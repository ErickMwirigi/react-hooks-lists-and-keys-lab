import React from "react";
import ProjectList from "./ProjectList";



function ProjectItem({ name, about, technologies }) {
  
  const tech = technologies.map(lang => <span key={lang}>{lang}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
