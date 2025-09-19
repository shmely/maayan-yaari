import "./stage.css";
import Icon from "@mui/material/Icon";
import coffee from "@mui/icons-material/coffee";
export const Stage = () => {
  return (
    <article className="stage">
      <h3 className="stage-title">
        פגישת <br />
        היכרות
      </h3>
      <div className="stage-image-box">
        <Icon
          sx={{
            color: "var(--color-primary)",
            fontSize: 40,
          }}
          component={coffee}
        />
      </div>
      <p className="stage-description">
        ניפגש לכוס קפה ונכיר בינינו בנעימים. במפגש
        זה, אני לומדת להכיר מהם הצרכים שלכם על ידי
        שאלון קצר, מהו התקציב העומד ברשותכם ומהו
        סגנון העיצוב אליו אתם מתחברים.
      </p>
      <div className="stage-number">1</div>
    </article>
  );
};
