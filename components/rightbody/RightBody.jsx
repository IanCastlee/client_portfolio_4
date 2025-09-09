import { HiOutlineLightBulb } from "react-icons/hi";
import "./RightBody.scss";
import { PiLightbulbFilamentLight } from "react-icons/pi";

const experience = [
  {
    year: "2025",
    details: "Led full-stack development of analytics dashboard at PixelForge.",
  },
  {
    year: "2024",
    details: "Built e-commerce backend with Express and MongoDB.",
  },
  {
    year: "2023",
    details: "Optimized frontend performance at DevStream using React.",
  },
  {
    year: "2022",
    details: "Contributed to SaaS platform using Vue and Firebase.",
  },
  {
    year: "2021",
    details: "Interned at ByteCore, wrote unit tests and API docs.",
  },
];

function RightBody() {
  return (
    <div className="section">
      <h2>
        <PiLightbulbFilamentLight className="titleIcon" />
        Experience
      </h2>

      <div className="expCard">
        <div className="line"></div>
        {experience.map((item, index) => {
          return (
            <div className="card" key={index}>
              <span className="year">{item.year}</span>

              <p className="detail">{item.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightBody;
