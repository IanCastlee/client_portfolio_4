import { useLocation } from "react-router-dom";
import styles from "./CertAch.module.scss";
import { motion } from "framer-motion";

function Certs({ item, index }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Conditionally set className
  const className = currentPath.includes("view") ? "viewCard" : "card";

  // Conditionally set style
  const cardStyle = className === "viewCard" ? { maxWidth: "fit-content" } : {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={styles.card}
      style={cardStyle}
      key={index}
    >
      <span className={styles.title}>{item.name}</span>
      <span className={styles.issuer}>{item.issuer}</span>
    </motion.div>
  );
}

export default Certs;
