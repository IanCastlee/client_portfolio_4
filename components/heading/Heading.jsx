import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Heading.module.scss";

import profile from "../../src/assets/profile (2).jpg";
import { MdVerified } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTiktok,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../context/Darkmode";
import { GoDownload } from "react-icons/go";

function Heading() {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  const [isToggled, setIsToggled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setIsToggled(theme === "dark");
  }, [theme]);

  const toggle = () => {
    toggleTheme();
    setIsToggled((prev) => !prev);
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/TESTRESUME.pdf";
    link.download = "TESTRESUME.pdf";
    link.click();
  };

  const handleSendEmail = () => {
    const email = "your@gmail.com";
    const subject = encodeURIComponent("Question About Your Services");
    const body = encodeURIComponent("Hello, I would like to ask about...");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.headingWrapper}>
      <div className={styles.heading}>
        <LazyLoadImage
          alt="Example"
          effect="blur"
          src={profile}
          className={styles.profile}
        />
        <div className={styles.cotentInfo}>
          <div className={styles.top}>
            <div className={styles.nameToggleButton}>
              <h1>
                Jhon Doe <MdVerified className={styles.verifiedIcon} />
              </h1>

              <button
                className={`${styles.toggleButton} ${
                  isToggled ? styles.toggled : ""
                } ${isPressed ? styles.pressed : ""}`}
                onClick={toggle}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                aria-pressed={isToggled}
                aria-label="Toggle light/dark mode"
              >
                <span
                  className={`${styles.icon} ${
                    isToggled ? styles.toggledSun : styles.sun
                  }`}
                >
                  <FaSun />
                </span>
                <span
                  className={`${styles.icon} ${
                    isToggled ? styles.toggledMoon : styles.moon
                  }`}
                >
                  <FaMoon />
                </span>
                <span
                  className={`${styles.toggleThumb} ${
                    isToggled ? styles.toggledThumb : ""
                  }`}
                ></span>
              </button>
            </div>
            <span className={styles.address}>
              <LuMapPin className={styles.pinIcon} />
              Manila, Philippines
            </span>
            <span className={styles.rule}>Web and Mobile App Developer</span>
          </div>
          <div className={styles.bot}>
            <div className={styles.buttonWrapper}>
              <button onClick={handleSendEmail} className={styles.btnEmail}>
                Send Email
                <IoIosArrowRoundForward className={styles.mailButton} />
              </button>
              <button onClick={handleDownload} className={styles.btnCV}>
                Download CV
                <GoDownload className={styles.mailButton} />
              </button>
            </div>

            <div className={styles.socLinks}>
              <FaLinkedin className={styles.socIcon} />
              <FaGithub className={styles.socIcon} />
              <FaFacebookSquare className={styles.socIcon} />
              <FaTiktok className={styles.socIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.botForMobile}>
        <div className={styles.buttonWrapper}>
          <button onClick={handleSendEmail} className={styles.btnEmail}>
            Email
            <IoIosArrowRoundForward className={styles.mailButton} />
          </button>
          <button onClick={handleDownload} className={styles.btnCV}>
            CV
            <GoDownload className={styles.mailButton} />
          </button>
        </div>

        <div className={styles.socLinks}>
          <FaLinkedin className={styles.socIcon} />
          <FaGithub className={styles.socIcon} />
          <FaFacebookSquare className={styles.socIcon} />
          <FaTiktok className={styles.socIcon} />
        </div>
      </div>
    </div>
  );
}

export default Heading;
