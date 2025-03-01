import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const programmingSkills = [
    "C",
    "JavaScript",
    "Java",
    "HTML",
    "CSS"
  ];

  const webDevSkills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Bootstrap",
    "Tailwind CSS"
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "Vercel",
    "Postman",
    "JWT",
    "RESTful APIs",
    "Figma",
    "VS Code"
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <h3>Programming Languages</h3>
        {programmingSkills.map((skill, index) => (
          <SkillList key={index} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
      <hr />
      <div className={styles.skillList}>
        <h3>Web Development</h3>
        {webDevSkills.map((skill, index) => (
          <SkillList key={index} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
      <hr />
      <div className={styles.skillList}>
        <h3>Tools & Technologies</h3>
        {toolsSkills.map((skill, index) => (
          <SkillList key={index} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
