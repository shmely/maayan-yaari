import "./stage.css";
import Icon from "@mui/material/Icon";
import FreeBreakfastTwoToneIcon from "@mui/icons-material/FreeBreakfastTwoTone";
import RouteTwoToneIcon from "@mui/icons-material/RouteTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import DrawTwoToneIcon from "@mui/icons-material/DrawTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AttachFileTwoToneIcon from "@mui/icons-material/AttachFileTwoTone";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import {
  useEffect,
  useRef,
  useState,
} from "react";

interface StageProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  delay?: number;
}
const iconMap: {
  [key: string]: React.ComponentType;
} = {
  coffee: FreeBreakfastTwoToneIcon,
  route: RouteTwoToneIcon,
  draw: DrawTwoToneIcon,
  house: HomeTwoToneIcon,
  engineer: EngineeringTwoToneIcon,
  program: AttachFileTwoToneIcon,
  shopping: ShoppingCartTwoToneIcon,
  visit: ConstructionTwoToneIcon,
};
export const Stage = ({
  id,
  title,
  description,
  icon,
  delay = 0,
}: StageProps) => {
  const [isVisible, setIsVisible] =
    useState(false);
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay for staggered effect
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "-50px 0px", // Start animation 50px before element comes into view
      }
    );

    if (stageRef.current) {
      observer.observe(stageRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <article
      ref={stageRef}
      className={`stage ${
        isVisible
          ? "stage-visible"
          : "stage-hidden"
      }`}
    >
      <div className="stage-title-box">
        <h3 className="stage-title">{title}</h3>
      </div>

      <div className="stage-image-box">
        <Icon
          sx={{
            color: "var(--color-primary)",
            fontSize: 40,
          }}
          component={iconMap[icon]}
        />
      </div>
      <p className="stage-description">
        {description}
      </p>
      <div className="stage-number">{id}</div>
    </article>
  );
};
