import "./Project.scss";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../constant/data";

function Project() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/view/Projects");
  };

  return (
    <div className="section">
      <div className="header">
        <h2>
          <GoProjectSymlink className="titleIcon" />
          Projects
        </h2>

        <button className="btnAll" onClick={handleViewAll}>
          All <IoIosArrowDropright className="viewAllIcon" />
        </button>
      </div>
      <div className="projectWrapper">
        {projects.slice(0, 8).map((item, index) => {
          return <ProjectCard key={index} index={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Project;
