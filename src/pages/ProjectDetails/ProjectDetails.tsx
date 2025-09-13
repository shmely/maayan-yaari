import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import type { ProjectProps } from "../../components/Project/project";
import projectsData from "../../assets/data/projects.json";
import "./projectdetails.css";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] =
    useState<ProjectProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProject =
        projectsData.projects.find(
          (p) => p.id === id
        );
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [id]);

  if (loading)
    return <div className="loading">טוען...</div>;
  if (!project)
    return (
      <main className="project-details">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="חזור אחורה"
        >
          ← חזור
        </button>
        <div className="error">
          פרויקט לא נמצא
        </div>
      </main>
    );

  return (
    <main className="project-details">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="חזור אחורה"
      >
        ← חזור
      </button>

      <div className="project-header">
        <h1>
          {project.title ?? "פרויקט לא נמצא"}
        </h1>
      </div>

      <div className="project-description">
        <p>{project.description}</p>
      </div>

      <div className="project-gallery">
        <h2>גלריית תמונות</h2>
        <div className="gallery-grid">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
            >
              <img
                src={image}
                alt={`${project.title} - תמונה ${
                  index + 1
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
