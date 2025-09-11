import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "./ProjectCard.scss";
import { useState } from "react";
import { motion } from "framer-motion";
function ProjectCard({ item, index }) {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isLong = item.shortDesc.length > 50;
  const isExpanded = expanded[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="projectCard"
      key={index}
    >
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
    </motion.div>
  );
}

export default ProjectCard;
