import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Cross-platform Development', 'Mobile UI Development', 'Reusable Components', 'React Hooks', 'API Integration']
    },
    {
      title: 'Frontend',
      skills: ['React JS', 'JavaScript ES6+', 'HTML5', 'CSS3', 'CSS Flexbox/Grid', 'React Hooks', 'Redux', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'API Integration', 'JWT Authentication']
    },
    {
      title: 'MERN Stack',
      skills: ['MongoDB', 'Express.js', 'React JS', 'Node.js', 'Full Stack Development', 'SPA Development']
    },
    {
      title: 'Data Science & ML',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'KNN Algorithm', 'Computer Vision', 'PyCharm']
    },
    {
      title: 'Tools & Methodologies',
      skills: ['Git', 'GitHub', 'React DevTools', 'Agile', 'VS Code', 'Google Colab', 'Cross-browser Testing']
    }
  ];

  return (
    <section id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
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

export default Skills;
