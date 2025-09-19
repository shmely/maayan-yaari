import "./home.css";
import heroImage from "../../assets/img/hero.jpg";
import profileImage from "../../assets/img/profile.jpg";
import whatsappIcon from "../../assets/img/whatsapp-svgrepo-com.svg";
import { useEffect, useState } from "react";
import Projects from "../../components/Projects/Projects";
import projectsArray from "../../assets/data/projects.json";
import type { ProjectProps } from "../../components/Project/project";
import { useSearchParams } from "react-router-dom";
import { Stage } from "../../components/Stage/stage";

const Home = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();
  const tabFromUrl =
    searchParams.get("tab") || "private";
  const [
    activeProjectType,
    setActiveProjectType,
  ] = useState(tabFromUrl);

  const projectList =
    projectsArray.projects as ProjectProps[];
  useEffect(() => {
    setActiveProjectType(tabFromUrl);
  }, [tabFromUrl]);

  const handleTabChange = (tabType: string) => {
    setActiveProjectType(tabType);
    setSearchParams({ tab: tabType });
  };
  return (
    <main className="home">
      <section
        className="hero"
        style={
          {
            "--hero-image": `url(${heroImage})`,
          } as React.CSSProperties
        }
      >
        <h1 className="main-title">
          לעצב חלומות למציאות
        </h1>
        <h2 className="sub-title">
          מעין יערי - עיצוב פנים והום סטיילינג
        </h2>
      </section>
      <section className="intro">
        <article className="about-me">
          <h1 className="about-me-title">
            קצת עליי
          </h1>
          <p className="about-me-paragraph">
            לעצב חלומות למציאות - תמיד אהבתי עיצוב
            ורציתי לעסוק בזה, אך דחקתי את החלום
            הצידה.&nbsp;וכך עברו השנים עד שהבנתי
            שעל חלומות אסור לוותר וצריך להגשים
            אותם.
            <br />
            שמי לילך שפירא ואני בוגרת סטודיו 6b.
            אני נשואה באושר&nbsp;ואם ל-4 ילדים.{" "}
            <br />
            ‍<br />
            אחרי שנים רבות בתחום ההייטק ותואר
            במדעי ההתנהגות, החלטתי לשנות כיוון
            בחיים ולתת ביטוי לאהבה האמיתית שלי –
            עיצוב פנים.
            <br />
            <br />
            אני מתמחה בחללי מגורים ומדמיינת את
            היופי ופוטנציאל הבית כבר כשאני רואה
            ארבעה קירות. בנוסף לבית יפה ונעים,
            חשוב לי מאוד לתת דגש גם לפונקציונליות
            והנוחות בבית, חשיבה על מקומות אחסון,
            חשיבה על פתרונות יצירתיים לדברים
            הקטנים, שפתאום מקלים ומשנים לנו את
            החיים.
            <br />
            בעזרת שימוש בחומרים עדכניים, טקסטיל,
            צבע, תאורה נכונה – אני הופכת את הדירה
            שלכם לבית חם, עדכני ומעוצב, שמתאים
            בדיוק לאופי שלכם ולטעמכם האישי.
            <br />
          </p>
        </article>
        <article
          className="profile-pic"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></article>
      </section>
      <section className="call-me">
        <h2>
          צרו איתי קשר ונהפוך יחד את החלום
          למציאות!
        </h2>
        <a href="https://api.whatsapp.com/send?phone=972523468470&;text=היי מעיין">
          <img
            src={whatsappIcon}
            className="call-me-icon"
            alt="WhatsApp"
          />
        </a>
      </section>
      <section className="projects">
        <header>
          <h2>פרויקטים אחרונים</h2>
          <p>
            <span>עצמו עיניים ודמיינו</span>
            &nbsp;לעצמכם שאתם מתעוררים בכל בוקר
            מחדש, לבית שתמיד חלמתם. דמיינו שאתם
            מרגישים בכל בוקר כמו בנופש, בבית מלון
            מפנק , בתחושה המרוממת את הנפש. הכל
            סביבכם&nbsp;<span>בדיוק לטעמכם</span>.
            הצבעים בבית רגועים ונעימים, הכל משתלב
            יחד ב<span>הרמוניה</span>, יש פתאום
            יותר מקום להכל, הבית מרווח ומפנק עם
            <span>אנרגיות טובות</span>, ולא
            מפסיקים להחמיא לכם על הבית. אין ספק ש
            <span>איכות החיים</span>&nbsp;שלכם
            השתנתה פלאים ואתם נהנים מ
            <span>הדברים הקטנים</span>, שעוטפים
            אתכם בשגרת היום יום.
          </p>
        </header>

        <section className="tab-menu">
          <button
            className={`project-button ${
              activeProjectType === "private"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleTabChange("private")
            }
          >
            פרטי
          </button>
          <button
            className={`project-button ${
              activeProjectType === "in-progress"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleTabChange("in-progress")
            }
          >
            בבניה
          </button>
          <button
            className={`project-button ${
              activeProjectType === "business"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleTabChange("business")
            }
          >
            עסקי
          </button>
        </section>
        <Projects
          projects={projectList.filter(
            (project) =>
              project.type === activeProjectType
          )}
        />
      </section>
      <section className="do-it">
        <h3 className="do-it-text">
          עכשיו
          <span className="bold-white-text">
            {" "}
            פתחו עיניים{" "}
          </span>
          ותחשבו שכל זה יכול להיות המציאות החדשה
          שלכם.
          <br />
          פשוט
          <span className="bold-white-text">
            {" "}
            תרימו טלפון{" "}
          </span>
          לקביעת פגישה איתי.
          <br />
          זכרו,
          <span className="bold-white-text">
            {" "}
            שינוי גדול,
          </span>
          מתחיל תמיד
          <span className="bold-white-text">
            {" "}
            מהדברים הקטנים.
          </span>
        </h3>
      </section>
      <section className="process-stages">
        <h3 className="process-stages-title">
          תהליך העבודה - בית ב-8 שלבים
        </h3>
        <div className="stages">
          <Stage />
        </div>
      </section>
    </main>
  );
};

export default Home;
