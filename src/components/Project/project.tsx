import { useNavigate } from "react-router-dom";
import "./project.css";

export interface ProjectProps {
  id: string; // GUID
  title: string;
  img: string;
  type: string;
  description: string;
  images: string[]; // Array of gallery images
}
const Project = ({
  id,
  title,
  img,
  type,
  description: _description,
  images: _images,
}: ProjectProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/project/${id}`);
  };
  return (
    <article
      onClick={handleClick}
      role={type}
      className="project-item"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <h3>{title}</h3>
    </article>
  );
};

export default Project;
