import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      period: '2022 - 2024',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Led research project on Neural Networks. GPA: 3.9/4.0',
      achievements: ['Dean\'s List 2023', 'Published paper in AI Conference', 'Teaching Assistant for ML course'],
      logo: '🎓'
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'Indian Institute of Technology',
      period: '2018 - 2022',
      description: 'Major in Computer Science with minor in Data Science. Graduated with First Class Honours.',
      achievements: ['Department Gold Medalist', 'Technical Lead of Coding Club', 'Won National Hackathon'],
      logo: '🏛️'
    },
    {
      degree: 'High School Diploma',
      institution: 'Delhi Public School',
      period: '2016 - 2018',
      description: 'Science stream with Computer Science. School prefect and tech club president.',
      achievements: ['School topper in Computer Science', 'Won State Level Science Fair', 'Perfect attendance'],
      logo: '🏫'
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
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="education" id="education">
      <motion.div 
        className="education__container"
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
          Education Journey
        </motion.h2>
        <div className="education__list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education__item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 5px 20px rgba(0,0,0,0.15)"
              }}
            >
              <div className="education__item-header">
                <span className="education__logo">{edu.logo}</span>
                <div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="education__period">{edu.period}</p>
                </div>
              </div>
              <p className="education__description">{edu.description}</p>
              <ul className="education__achievements">
                {edu.achievements.map((achievement, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * idx }}
                    viewport={{ once: true }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
