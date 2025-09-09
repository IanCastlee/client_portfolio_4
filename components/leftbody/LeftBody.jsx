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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae
          sequi repellat at id ab autem cum alias, fuga inventore mollitia, eos
          vero enim! <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          ratione quos blanditiis commodi saepe ullam quia quisquam voluptatem.
          Quo voluptate obcaecati aspernatur ad autem. Voluptatibus consectetur
          consequatur nihil odit minima. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          laudantium quod voluptatem labore necessitatibus debitis omnis dicta
          itaque quam! Voluptatum?
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
