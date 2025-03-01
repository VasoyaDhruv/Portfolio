import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.png";
import projectImage3 from "../../assets/project3.png";
import projectImage4 from "../../assets/project4.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Education Commerce Website",
      description:
        "A dynamic education platform for browsing and purchasing courses",
      link: "https://studynotion-beige.vercel.app/",
      category: "education",
      tech: ["MERN Stack", "Razorpay", "JWT"],
      features: [
        "Course browsing and purchasing",
        "Razorpay integration",
        "Real-time updates",
        "User authentication",
      ],
      image: projectImage1, // Add image here
    },
    // {
    //   id: 2,
    //   title: "Admin Panel",
    //   description: "MongoDB schema management through user-friendly UI",
    //   link: "#",
    //   category: "utility",
    //   tech: ["MERN Stack", "AdminJS", "JWT"],
    //   features: [
    //     "Schema management",
    //     "CRUD operations",
    //     "JWT authentication",
    //     "User-friendly interface"
    //   ],
    //   image: projectImage2,  // Add image here
    // },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application with geolocation",
      link: "https://weather-app-nine-ebon-25.vercel.app/",
      category: "other",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      features: [
        "Geolocation",
        "Search functionality",
        "Real-time updates",
        "Responsive design",
      ],
      image: projectImage4, // Add image here
    },
    {
      id: 3,
      title: "Shopping Web App",
      description: "User-friendly e-commerce platform",
      link: "https://shopping-app-orpin-one.vercel.app/",
      category: "ecommerce",
      tech: ["React", "React Router", "State Management"],
      features: [
        "Responsive design",
        "Product navigation",
        "State management",
        "Reusable components",
      ],
      image: projectImage2, // Add image here
    },
    {
      id: 4,
      title: "Hydra",
      description: "Responsive Gaming website",
      link: "https://hydra-vr-landing-page.vercel.app/",
      category: "other",
      tech: ["React", "Three.js", "GSAP"],
      features: ["3D Animations", "Responsive Design", "Interactive UI"],
      image: projectImage3,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "education", label: "Education" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "other", label: "Other" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
        <p className="section__subtitle">
          Explore my latest work and creative solutions
        </p>
      </motion.div>

      <motion.div
        className={styles.filters}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            className={`${styles.filterButton} ${
              activeFilter === filter.id ? styles.active : ""
            }`}
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
