import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "./Project.scss";
import { GoInfo, GoProjectSymlink } from "react-icons/go";

const projects = [
  {
    name: "TaskTrek",
    shortDesc:
      "A collaborative to-do list and project management app with real-time updates.",
    url: "tasktrek.app",
  },
  {
    name: "MealMate",
    shortDesc:
      "A meal planning app that suggests recipes based on what's in your fridge.",
    url: "mealmate.io",
  },
  {
    name: "BudgetWise",
    shortDesc:
      "Personal finance tracker with visual analytics and savings goals.",
    url: "budgetwise.app",
  },
  {
    name: "StudySync",
    shortDesc:
      "A virtual study room where students can co-work and track focus time together.",
    url: "studysync.live",
  },
  {
    name: "EventNest",
    shortDesc:
      "A modern event planning platform with RSVP management and calendar syncing.",
    url: "eventnest.co",
  },
  {
    name: "FitFocus",
    shortDesc:
      "A fitness tracker and goal planner with progress analytics and challenges.",
    url: "fitfocus.fit",
  },
  {
    name: "LangLeap",
    shortDesc:
      "A language learning web app with gamified lessons and speech recognition.",
    url: "langleap.org",
  },
  {
    name: "Artfolio",
    shortDesc:
      "A portfolio builder for artists to showcase their work with integrated store.",
    url: "artfolio.design",
  },
];

function Project() {
  return (
    <div className="section">
      <h2>
        <GoProjectSymlink className="titleIcon" />
        Projects
      </h2>

      <div className="projectWrapper">
        {projects.map((item, index) => {
          return (
            <div className="projectCard" key={index}>
              <h3>{item.name}</h3>
              <p>{item.shortDesc}</p>

              <span className="url">
                {item.url} <LuSquareArrowOutUpRight />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
