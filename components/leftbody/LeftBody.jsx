import "./LeftBody.scss";
import { GoInfo } from "react-icons/go";
import { VscTools } from "react-icons/vsc";
import { motion } from "framer-motion";
import { techStack } from "../../constant/data";
function LeftBody() {
  return (
    <div className="leftBody">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section"
      >
        <h2>
          <GoInfo className="titleIcon" />
          About
        </h2>

        <p>
          Hi! I'm Dev Shot, a Web and Mobile App Developer with a passion for
          building modern, responsive, and user-friendly digital experiences. I
          specialize in creating custom portfolio websites that are not only
          visually appealing but also come with a built-in AI chatbot tailored
          to your business or personal needs. <br />
          <br />
          If you're interested in having your own portfolio, feel free to
          message me.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section"
      >
        <h2>
          <VscTools className="titleIcon" />
          Tech Stack
        </h2>

        <div className="cardWrapper">
          <div className="category">
            <h3>Frontend</h3>

            <div className="itemWrapper">
              {techStack.frontend.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>
          <div className="category">
            <h3>Backend</h3>

            <div className="itemWrapper">
              {techStack.backend.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LeftBody;
