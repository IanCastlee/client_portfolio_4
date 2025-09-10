import { useLocation } from "react-router-dom";
import styles from "./CertAch.module.scss";

function AchievementCard({ item, index }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Conditionally set className
  const className = currentPath.includes("view") ? "viewCard" : "card";

  // Conditionally set style
  const cardStyle = className === "viewCard" ? { maxWidth: "fit-content" } : {};
  return (
    <div className={styles.card} style={cardStyle} key={index}>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.event}>{item.event}</span>
      <span className={styles.year}>{item.year}</span>
    </div>
  );
}

export default AchievementCard;
