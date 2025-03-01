import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Aimbrill Techinfo',
      period: 'Jan 2024 - Feb 2025',
      description: 'Developed and maintained scalable web applications using the MERN stack.',
      achievements: [
        'Developed scalable web applications using MERN stack ensuring optimal performance',
        'Designed and implemented RESTful APIs using Node.js and Express',
        'Implemented JWT-based authentication for enhanced security'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      logo: '💼'
    },
    {
      title: 'B.Tech Student',
      company: 'SILVER OAK UNIVERSITY',
      period: '2021 - 2025',
      description: 'Information Technology | CGPA: 9.00/10.0',
      achievements: [
        'Specialized in Object-Oriented Programming (OOP)',
        'Studied Data Structures and Algorithms (DSA)',
        'Learned Database Management Systems (DBMS)'
      ],
      tech: ['C', 'Java', 'JavaScript', 'DSA', 'DBMS'],
      logo: '🎓'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="experience" id="experience">
      <motion.div 
        className="experience__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section__title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience__item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 5px 20px rgba(0,0,0,0.15)"
              }}
            >
              <div className="experience__item-header">
                <span className="experience__logo">{exp.logo}</span>
                <div className="experience__title-group">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p className="experience__period">{exp.period}</p>
                </div>
              </div>
              
              <p className="experience__description">{exp.description}</p>
              
              <ul className="experience__achievements">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
              
              <div className="experience__tech">
                {exp.tech.map((tech, idx) => (
                  <motion.span 
                    key={idx}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (0.1 * idx) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
