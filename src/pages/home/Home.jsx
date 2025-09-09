import { IoChatbubblesOutline } from "react-icons/io5";
import { IoSnowOutline } from "react-icons/io5";
import Heading from "../../../components/heading/Heading";
import LeftBody from "../../../components/leftbody/LeftBody";
import RightBody from "../../../components/rightbody/RightBody";
import styles from "./Home.module.scss";
import Chatbot from "../../../components/chatbot/Chatbot";
import { useState, useContext } from "react";
import { DarkModeContext } from "../../../context/Darkmode";
import { GiDandelionFlower } from "react-icons/gi";
import Project from "../../../components/project/Project";
import CertAchievement from "../../../components/certAchievement.jsx/CertAchievement";
import Feedback from "../../../components/feedback/Feedback";
import Footer from "../../../components/footer/Footer";

function Home() {
  const [toggleChatbot, setToggleChatbot] = useState(false);
  const { theme } = useContext(DarkModeContext); // use context

  const isDark = theme === "dark";

  return (
    <>
      {isDark ? (
        <div className={styles.starryBackground}>
          {Array.from({ length: 50 }).map((_, index) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 1;

            return (
              <div
                key={index}
                className={styles.star}
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                }}
              ></div>
            );
          })}
        </div>
      ) : (
        <div className={styles.snowflakes}>
          {Array.from({ length: 8 }).map((_, index) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = 5 + Math.random() * 25;
            const size = 46 + Math.random() * 32;

            return (
              <GiDandelionFlower
                key={index}
                className={styles.snowflake}
                style={{
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  fontSize: `${size}px`,
                }}
              />
            );
          })}
        </div>
      )}
      <div className={styles.home}>
        <Heading />
        <div className={styles.body}>
          <div className={styles.left}>
            <LeftBody />
          </div>
          <div className={styles.right}>
            <RightBody />
          </div>
        </div>
        <Project />
        <CertAchievement />
        <Feedback />
        <Footer />
      </div>

      <button
        className={styles.btnChatBot}
        onClick={() => setToggleChatbot(true)}
      >
        <IoChatbubblesOutline className={styles.chatIcon} />
        Chat with Jhon
      </button>

      {toggleChatbot && <Chatbot close={() => setToggleChatbot(false)} />}
    </>
  );
}

export default Home;
