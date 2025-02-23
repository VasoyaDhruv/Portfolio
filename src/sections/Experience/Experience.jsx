import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Google',
      period: '2023 - Present',
      description: 'Leading a team of 5 engineers in developing cloud-native applications using React, Node.js, and Google Cloud Platform.',
      achievements: [
        'Improved application performance by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers'
      ],
      tech: ['React', 'Node.js', 'GCP', 'Kubernetes'],
      logo: '🌟'
    },
    {
      title: 'Full Stack Developer',
      company: 'Microsoft',
      period: '2021 - 2023',
      description: 'Developed and maintained enterprise-level applications using .NET Core and React.',
      achievements: [
        'Built real-time analytics dashboard',
        'Reduced API response time by 35%',
        'Awarded Best Team Player 2022'
      ],
      tech: ['React', '.NET Core', 'Azure', 'SQL'],
      logo: '💻'
    },
    {
      title: 'Software Developer Intern',
      company: 'Amazon',
      period: '2020 - 2021',
      description: 'Worked on AWS Lambda functions and serverless architecture.',
      achievements: [
        'Developed automated testing framework',
        'Contributed to open-source projects',
        'Extended internship to full-time offer'
      ],
      tech: ['AWS', 'Python', 'Node.js', 'DynamoDB'],
      logo: '🚀'
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
          Professional Journey
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
