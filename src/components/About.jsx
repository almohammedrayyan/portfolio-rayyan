import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              I'm Mohammed Fuzail Rayyan H, a React Native Mobile Developer and Full Stack
              Developer based in Chennai, Tamil Nadu. I currently work at SRM Technologies,
              where my focus is building cross-platform mobile applications with React Native
              alongside modern web solutions.
            </p>
            <p>
              My work brings together mobile app development and a strong foundation in the
              MERN stack: MongoDB, Express.js, React JS, and Node.js. I enjoy turning product
              requirements into practical interfaces that feel clear, responsive, and easy to use.
            </p>
            <p>
              I build reusable components with React and React Native, use React Hooks and
              state management to organize application logic, and connect interfaces to RESTful
              APIs. I focus on keeping code maintainable so features can evolve with the product.
            </p>
            <p>
              My development approach emphasizes thoughtful layouts, reliable data handling,
              and careful testing and debugging. Whether working on a mobile screen or a web
              application, I aim to create consistent experiences across screen sizes and
              handle loading, empty, and error states clearly.
            </p>
            <p>
              I value collaboration with designers, backend developers, and other team members
              to turn ideas into working features. With experience in full-stack development
              and a growing focus on mobile, I'm continually strengthening my skills to build
              useful applications that solve everyday problems.
            </p>
          </motion.div>
          
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img src="/about.png" alt="Mohammed Fuzail Rayyan H" className="profile-image" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
