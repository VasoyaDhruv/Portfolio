import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '20+', label: 'Happy Clients' },
    { value: '10+', label: 'Awards' }
  ];

  const interests = [
    { icon: '🚀', name: 'Space Exploration' },
    { icon: '🎮', name: 'Gaming' },
    { icon: '📚', name: 'Reading' },
    { icon: '🎨', name: 'Digital Art' },
    { icon: '🎸', name: 'Music' },
    { icon: '✈️', name: 'Traveling' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="about" id="about">
      <motion.div 
        className="about__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="about__header" variants={itemVariants}>
          <h2 className="section__title">About Me</h2>
          <div className="about__subtitle">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Passionate Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Creative Thinker
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Problem Solver
            </motion.span>
          </div>
        </motion.div>

        <div className="about__content">
          <motion.div 
            className="about__text-content"
            variants={itemVariants}
          >
            <p>
              Hello! I'm <span className="highlight">Dhruv Vasoya</span>, a passionate full-stack developer 
              based in India. With a keen eye for detail and a love for clean code, 
              I transform ideas into powerful digital solutions.
            </p>
            <p>
              My journey in tech started with a simple "Hello World" program, and since then, 
              I've been on an exciting adventure of continuous learning and growth. I specialize 
              in building scalable web applications and creating seamless user experiences.
            </p>
            <motion.div 
              className="about__quote"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </motion.div>
          </motion.div>

          <motion.div 
            className="about__stats"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat__item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  {stat.value}
                </motion.h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="about__interests"
          variants={itemVariants}
        >
          <h3>Things I Love</h3>
          <div className="interests__grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="interest__item"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="interest__icon">{interest.icon}</span>
                <span className="interest__name">{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about__cta"
          variants={itemVariants}
        >
          <motion.button 
            className="cta__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
          <motion.button 
            className="cta__button cta__button--secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
