import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "./ProjectCard.scss";
import { useState } from "react";

function ProjectCard({ item, index }) {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isLong = item.shortDesc.length > 50;
  const isExpanded = expanded[index];

  return (
    <div className="projectCard" key={index}>
      <h3>{item.name}</h3>
      <p>
        {isLong && !isExpanded
          ? item.shortDesc.slice(0, 50) + "..."
          : item.shortDesc}

        {isLong && (
          <span className="readMoreBtn" onClick={() => toggleExpand(index)}>
            {isExpanded ? "Read less" : "Read more"}
          </span>
        )}
      </p>

      <span className="url">
        {item.url} <LuSquareArrowOutUpRight />
      </span>
    </div>
  );
}

export default ProjectCard;
