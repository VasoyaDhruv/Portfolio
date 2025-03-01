import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '4+', label: 'Projects Completed' },
    { value: '9.0', label: 'CGPA' },
    { value: 'MERN', label: 'Specialist' }
  ];

  const interests = [
    { icon: '💻', name: 'Coding' },
    { icon: '🌐', name: 'Web Development' },
    { icon: '📱', name: 'App Development' },
    { icon: '🎮', name: 'Gaming' },
    { icon: '📚', name: 'Learning' },
    { icon: '🎨', name: 'UI/UX Design' }
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
              Full Stack Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              MERN Specialist
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              UI/UX Enthusiast
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
              specializing in MERN stack development. Currently pursuing B.Tech in Information Technology 
              at SILVER OAK UNIVERSITY with a CGPA of 9.00/10.0.
            </p>
            <p>
              With expertise in building scalable web applications and RESTful APIs, I focus on creating 
              seamless user experiences and robust backend systems. My experience at Aimbrill Techinfo has 
              honed my skills in developing secure and performant applications using modern web technologies.
            </p>
            <div className="about__contact">
              <p>📧 dhruvvasoya48@gmail.com</p>
              <p>📱 +91 9327850512</p>
              <p>🔗 github.com/VasoyaDhruv</p>
            </div>
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
          <h3>Areas of Interest</h3>
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
      </motion.div>
    </section>
  );
};

export default About;