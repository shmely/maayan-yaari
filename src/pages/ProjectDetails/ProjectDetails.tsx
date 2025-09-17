import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import type { ProjectProps } from "../../components/Project/project";
import projectsData from "../../assets/data/projects.json";
import "./projectdetails.css";
import Gallery from "../../components/Gallery/Gallery";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

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
          <NavigateNextOutlinedIcon
            sx={{
              fontSize: 30,
              color: "#465140",
            }}
          />
          <span>לכל הפרויקטים</span>
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
        <NavigateNextOutlinedIcon
          sx={{
            fontSize: 30,
            color: "#465140",
          }}
        />
        <span>לכל הפרויקטים</span>
      </button>

      <div className="project-header">
        <h1>
          {project.title ?? "פרויקט לא נמצא"}
        </h1>
      </div>

      <div className="project-description">
        <p>{project.description}</p>
      </div>

      <div className="gallery-grid">
        <Gallery images={project.images} />
      </div>
    </main>
  );
};

export default ProjectDetails;
