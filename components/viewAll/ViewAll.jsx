import { useParams } from "react-router-dom";
import "./ViewAll.scss";
import { IoIosArrowDropleft } from "react-icons/io";
import { projects, certs, achievements } from "../../constant/data";
import ProjectCard from "../cards/ProjectCard";
import AchievementCard from "../cards/AchievementCard";
import Certs from "../cards/Certs";

function ViewAll() {
  const { string } = useParams();

  console.log(string);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="viewAll">
      <div className="viewAllTop">
        <button onClick={handleBack} className="btnBackHome">
          <IoIosArrowDropleft className="viewAllIcon" /> Back to Home
        </button>

        <h2 className="viewAllH2">{string}</h2>
      </div>

      <div className="viewAllContent">
        <>
          {string === "Projects" ? (
            <>
              {projects.map((item, index) => {
                return <ProjectCard key={index} index={index} item={item} />;
              })}
            </>
          ) : string === "Certificates" ? (
            <>
              {certs.map((item, index) => {
                return <Certs key={index} index={index} item={item} />;
              })}
            </>
          ) : string === "Achievements" ? (
            <>
              {achievements.map((item, index) => {
                return (
                  <AchievementCard key={index} index={index} item={item} />
                );
              })}
            </>
          ) : (
            <p>No Data</p>
          )}
        </>
      </div>
    </div>
  );
}

export default ViewAll;
