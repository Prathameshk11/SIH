 
import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className="project-list">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <p>Inter-departmental: {project.isInterDepartmental ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}