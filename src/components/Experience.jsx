import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: 'SRM Technologies',
      position: 'React Native Mobile Developer | Software Developer',
      period: 'Sep 2025 - Present',
      description: [
        'Developing cross-platform mobile applications with React Native, with a focus on reusable components and consistent user interfaces',
        'Translating product requirements into mobile screens and features in collaboration with cross-functional teams',
        'Applying React Hooks and state management patterns to organize component behavior and application data',
        'Integrating RESTful APIs to connect user interfaces with backend services and support application workflows',
        'Building responsive layouts and handling loading, empty, and error states to create clearer user experiences',
        'Developing and maintaining full-stack web features using React, Node.js, and modern JavaScript alongside mobile development',
        'Testing and debugging application features, investigating interface and data-flow issues, and refining implementation quality',
        'Maintaining reusable, readable code and collaborating on testing and deployment to support reliable software delivery'
      ]
    },
    {
      company: 'Codeup Global Solutions Private Limited',
      position: 'Full Stack Web Developer / MERN Stack Developer',
      period: 'Mar 2023 - Feb 2025',
      description: [
        'Led the development of Xakal, a comprehensive human resource management platform for SMEs, utilizing React JS, Node.js, Express.js, and MongoDB',
        'Spearheaded front-end development using React JS, designing reusable components, and ensuring cross-browser compatibility with extensive use of HTML, CSS, and JavaScript',
        'Collaborated closely with UI/UX teams to create responsive, intuitive interfaces that improve user experience on both desktop and mobile platforms',
        'Integrated backend APIs using Node.js and Express.js for seamless data handling and performance tracking',
        'Optimized codebase to enhance performance and scalability by utilizing modern JavaScript ES6+ features like Promises, Async/Await, and Arrow Functions',
        'Conducted regular testing and debugging of features using React DevTools, ensuring smooth and responsive user interfaces',
        'Managed a version-controlled development workflow using Git and followed Agile methodologies to ensure smooth project cycles and delivery'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="exp-header">
                <div className="exp-icon">
                  <Briefcase size={24} />
                </div>
                <div className="exp-title">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                </div>
              </div>
              <div className="exp-period">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
              <ul className="exp-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
