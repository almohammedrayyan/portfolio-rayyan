import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'Aalim Muhammed Salegh College of Engineering',
      location: 'Chennai, Tamil Nadu, India',
      period: '2016 - 2020',
      grade: '7.77 CGPA'
    },
    {
      degree: 'Higher Secondary School Certificate (HSC)',
      institution: 'Don Bosco Matric.Hr.Sec School',
      location: 'Peravallur, Chennai-82',
      period: '2015 - 2016',
      grade: '76.6%'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Don Bosco Matric.Hr.Sec School',
      location: 'Peravallur, Chennai-82',
      period: '2014 - 2015',
      grade: '89.5%'
    }
  ];

  return (
    <section id="education" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="edu-header">
                <div className="edu-icon">
                  {index === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
                </div>
                <div className="edu-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="edu-location">{edu.location}</p>
                  <div className="edu-footer">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
