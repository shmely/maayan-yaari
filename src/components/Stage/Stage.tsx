import "./stage.css";
import Icon from "@mui/material/Icon";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import { CoffeeRounded } from "@mui/icons-material";
import { EditCalendarRounded } from "@mui/icons-material";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";

interface StageProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}
const iconMap: {
  [key: string]: React.ComponentType;
} = {
  coffee: CoffeeRounded,
  house: HouseRoundedIcon,
  engineer: EngineeringRoundedIcon,
  article: ArticleRoundedIcon,
  shopping: ShoppingCartRoundedIcon,
  editCalendar: EditCalendarRounded,
  construction: ConstructionRoundedIcon,
};
export const Stage = ({
  id,
  title,
  description,
  icon,
}: StageProps) => {
  return (
    <article className="stage">
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
