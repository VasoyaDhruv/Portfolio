import { motion } from "framer-motion";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/dhruv.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume(dhruv-vasoya).pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <motion.section
      id="hero"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={styles.colorModeContainer}>
        {/* Profile Image with Water Drop Animation */}
        <div className={styles.imageWrapper}>
          <motion.img
            src={heroImg}
            className={styles.hero}
            alt="Profile"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>

        {/* Theme Toggle Button with Hover Animation */}
        <motion.img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          whileTap={{ scale: 0.8 }}
          whileHover={{ rotate: 20 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className={styles.info}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Dhruv
          <br />
          Vasoya
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Web Developer
        </motion.h2>

        <span>
          <motion.a
            href="https://github.com/VasoyaDhruv"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={githubIcon} alt="Github icon" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dhruv-vasoya-b46102250/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </motion.a>
        </span>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          With a passion for developing modern React web apps for commercial businesses.
        </motion.p>

        {/* Resume Button with Hover Effect */}
        <motion.a href={CV} download>
          <motion.button
            className="hover"
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.button>
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;
