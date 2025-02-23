import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

function ProjectCard({ image, title, description, link, tech, features, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: 'blur(0px)'
    },
    visible: { 
      opacity: 1,
      backdropFilter: 'blur(8px)',
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: 0.05
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: 0.1
      }
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.05
      }
    }
  };

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <motion.div 
          className={styles.overlay}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={overlayVariants}
        >
          <motion.div 
            className={styles.overlayContent}
            variants={contentVariants}
          >
            <motion.div 
              className={styles.viewButtonWrapper}
              variants={buttonVariants}
            >
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className={styles.buttonIcon}>→</span>
                <span className={styles.buttonText}>View Project</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techStack}>
          {tech.map((item, idx) => (
            <motion.span 
              key={idx} 
              className={styles.techItem}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div 
        className={styles.shine}
        animate={{
          x: isHovered ? ["0%", "100%"] : "0%",
          opacity: isHovered ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

export default ProjectCard;
