import { HiOutlineLightBulb } from "react-icons/hi";
import "./RightBody.scss";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { experience } from "../../constant/data";

function RightBody() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section"
    >
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
    </motion.div>
  );
}

export default RightBody;
