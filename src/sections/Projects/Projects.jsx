import styles from './ProjectsStyles.module.css';
import Easymart from '../../assets/project2.png';
import Weather from '../../assets/project4.png';
import StudyNotion from '../../assets/project1.png';
import Hydra from '../../assets/project3.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.gridContainer}>
        <ProjectCard
          src={StudyNotion}
          link="https://studynotion-beige.vercel.app/"
          h3="StudyNotion"
          p="Education commerce app"
        />
        <ProjectCard
          src={Easymart}
          link="https://shopping-app-orpin-one.vercel.app/"
          h3="Easymart"
          p="Shopping App"
        />
        <ProjectCard
          src={Hydra}
          link="https://hydra-vr-landing-page.vercel.app/"
          h3="Hydra"
          p="Responsive Gaming website"
        />
         <ProjectCard
          src={Weather}
          link="https://weather-app-nine-ebon-25.vercel.app/"
          h3="Weather"
          p="Weather App"
        />
         {/* <ProjectCard
          // src={Vaccine}
          link="https://vaccine-landing-page.vercel.app/"
          h3="Vaccine"
          p="Vaccine Website"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
