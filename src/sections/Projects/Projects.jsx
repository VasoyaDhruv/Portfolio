import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import Easymart from '../../assets/project2.png';
import Weather from '../../assets/project4.png';
import StudyNotion from '../../assets/project1.png';
import Hydra from '../../assets/project3.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      image: StudyNotion,
      title: "StudyNotion",
      description: "Education commerce app",
      link: "https://studynotion-beige.vercel.app/",
      category: "education",
      tech: ["React", "Node.js", "MongoDB"],
      features: ["User Authentication", "Course Management", "Payment Integration"]
    },
    {
      id: 2,
      image: Easymart,
      title: "Easymart",
      description: "Shopping App",
      link: "https://shopping-app-orpin-one.vercel.app/",
      category: "ecommerce",
      tech: ["React", "Redux", "Firebase"],
      features: ["Product Search", "Cart Management", "Order Tracking"]
    },
    {
      id: 3,
      image: Hydra,
      title: "Hydra",
      description: "Responsive Gaming website",
      link: "https://hydra-vr-landing-page.vercel.app/",
      category: "gaming",
      tech: ["React", "Three.js", "GSAP"],
      features: ["3D Animations", "Responsive Design", "Interactive UI"]
    },
    {
      id: 4,
      image: Weather,
      title: "Weather",
      description: "Weather App",
      link: "https://weather-app-nine-ebon-25.vercel.app/",
      category: "utility",
      tech: ["React", "Weather API", "Geolocation"],
      features: ["Real-time Weather", "Location Detection", "Forecast"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'education', label: 'Education' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'utility', label: 'Utility' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 className="section__title">Featured Projects</h2>
        <p className="section__subtitle">Explore my latest work and creative solutions</p>
      </motion.div>

      <motion.div 
        className={styles.filters}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {filters.map(filter => (
          <motion.button
            key={filter.id}
            className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>

      <div className={styles.gridContainer}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div 
        className={styles.seeMore}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a 
          href="https://github.com/VasoyaDhruv" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.seeMoreLink}
        >
          See More on GitHub
          <motion.span 
            className={styles.arrow}
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
