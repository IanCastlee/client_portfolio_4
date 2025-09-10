import "./CertAchievement.scss";
import { GrAchievement } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Certs from "../cards/Certs";
import { certs, achievements } from "../../constant/data";
import AchievementCard from "../cards/AchievementCard";

function CertAchievement() {
  const navigate = useNavigate();
  const handleViewAllCerts = () => {
    navigate("/view/Certificates");
  };
  const handleViewAllAch = () => {
    navigate("/view/Achievements");
  };

  return (
    <div className="certAchievement">
      <div className="section">
        <div className="header">
          <h2>
            <LiaCertificateSolid className="titleIcon" />
            Certificates
          </h2>

          <button className="btnAll" onClick={handleViewAllCerts}>
            All <IoIosArrowDropright className="viewAllIcon" />
          </button>
        </div>

        <div className="cardWrapperV">
          {certs.slice(0, 5).map((item, index) => {
            return <Certs item={item} index={index} key={index} />;
          })}
        </div>
      </div>
      <div className="section">
        <div className="header">
          <h2>
            <GrAchievement className="titleIcon" />
            Achievements
          </h2>

          <button className="btnAll" onClick={handleViewAllAch}>
            All <IoIosArrowDropright className="viewAllIcon" />
          </button>
        </div>

        <div className="cardWrapperV">
          {achievements.slice(0, 4).map((item, index) => {
            return <AchievementCard item={item} index={index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CertAchievement;
