import "./projects.css";
import Project from "../Project/project";
import type { ProjectProps } from "../Project/project";

interface ProjectsProps {
  projects: ProjectProps[];
}

const Projects = ({
  projects,
}: ProjectsProps) => {
  return (
    <main role="list" className="projects-grid">
      {projects.map((project) => (
        <Project
          {...project}
          key={project.title}
        />
      ))}
    </main>
  );
};

export default Projects;
