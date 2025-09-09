import "./LeftBody.scss";
import { GoInfo } from "react-icons/go";
import { VscTools } from "react-icons/vsc";

const techStack = {
  frontend: ["Next.js", "Vue.js", "React", "JavaScript", "TypeScript"],
  backend: ["Python", "PHP", "Node.js", "Mysql", "PostgreSql", "MongoDB"],
};
function LeftBody() {
  return (
    <div className="leftBody">
      <div className="section">
        <h2>
          <GoInfo className="titleIcon" />
          About
        </h2>

        <p>
          Hi! I'm <strong>Jhon Doe</strong>, a Web and Mobile App Developer with
          a passion for building modern, responsive, and user-friendly digital
          experiences. I specialize in creating custom portfolio websites that
          are not only visually appealing but also come with a built-in{" "}
          <strong>AI chatbot</strong> tailored to your business or personal
          needs. <br />
          <br />
          If you're interested in having your own portfolio, feel free to
          message me on TikTok. I offer{" "}
          <strong>free initial hosting and domain setup</strong> — just send me
          the information you want included.
        </p>
      </div>

      <div className="section">
        <h2>
          <VscTools className="titleIcon" />
          Tech Stack
        </h2>

        <div className="cardWrapper">
          <div className="category">
            <h3>Frontend</h3>

            <div className="itemWrapper">
              {techStack.frontend.map((item) => {
                return <span>{item}</span>;
              })}
            </div>
          </div>
          <div className="category">
            <h3>Backend</h3>

            <div className="itemWrapper">
              {techStack.backend.map((item) => {
                return <span>{item}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBody;
