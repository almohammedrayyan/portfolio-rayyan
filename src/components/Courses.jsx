import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import './Courses.css';

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const courses = [
    {
      title: 'Drowsiness Detection Based on Driver Face Behaviour Using Machine Learning',
      institution: 'Aalim Muhammed Salegh College of Engineering',
      location: 'Chennai, Tamil Nadu, India',
      period: 'Dec 2019 - Mar 2020',
      description: 'Developed a real-time machine learning project to prevent road accidents by detecting driver drowsiness. Around 84.7% of road accidents occur due to various reasons, with driver drowsiness being a significant factor. This project helps save human lives through early detection.',
      technologies: ['Python', 'Machine Learning', 'PyCharm Community', 'Computer Vision'],
      hardware: 'Windows 10, 4GB RAM, 200GB Storage, USB Camera, Mobile Phone'
    },
    {
      title: 'Movie Recommendation Analysis Using Data Science',
      institution: 'Self-Learning Project',
      location: 'Online',
      period: 'Feb 2021 - Mar 2021',
      description: 'Built a movie recommendation system analyzing raw data using data science applications. Implemented K-Nearest Neighbor (KNN) algorithm to provide personalized movie recommendations based on user preferences and viewing patterns.',
      technologies: ['Python', 'Data Science', 'KNN Algorithm', 'Google Colab'],
      hardware: 'Cloud-based development environment'
    },
    {
      title: 'Stock Market Prediction',
      institution: 'Self-Learning Project',
      location: 'Online',
      period: 'Jan 2021 - Mar 2021',
      description: 'Developed a stock market prediction system to determine the future value of company stocks and financial instruments traded on exchanges. Analyzed raw data using various machine learning algorithms and data science techniques to predict stock trends and provide future price information.',
      technologies: ['Python', 'Data Science', 'Machine Learning', 'Predictive Analytics', 'Google Colab'],
      hardware: 'Cloud-based development environment'
    },
    {
      title: 'Data Science with Machine Learning and Artificial Intelligence',
      institution: 'Besant Technologies',
      location: 'Chennai, Tamil Nadu, India',
      period: 'Oct 2020 - Feb 2021',
      description: 'Comprehensive course combining domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. Applied machine learning algorithms to numbers, text, images, video, and audio to produce AI systems that perform tasks requiring human intelligence.',
      technologies: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Python', 'Statistics', 'Mathematics'],
      hardware: 'Machine Learning algorithms, AI systems development'
    },
    {
      title: 'Course on Artificial Intelligence',
      institution: 'Barola Technology',
      location: 'Chennai, Tamil Nadu, India',
      period: 'Jun 2019 - Jul 2019',
      description: 'Studied the basics of artificial intelligence and its packages. Gained hands-on experience by working on real-time AI projects, understanding AI fundamentals and practical applications.',
      technologies: ['Artificial Intelligence', 'Python', 'AI Packages', 'Real-time Projects'],
      hardware: 'AI development environment'
    },
    {
      title: 'IBM SPSS Modeler',
      institution: 'Learn Softech Institute',
      location: 'Chennai, Tamil Nadu, India',
      period: 'Mar 2021',
      description: 'Learned to use IBM SPSS Modeler software for data analysis. The platform offers advanced statistical analysis, a vast library of machine learning algorithms, text analysis, open source extensibility, integration with big data, and seamless deployment into applications.',
      technologies: ['IBM SPSS Modeler', 'Statistical Analysis', 'Machine Learning', 'Text Analysis', 'Big Data'],
      hardware: 'IBM SPSS software platform'
    },
    {
      title: 'ERP and Web Development',
      institution: 'Self-Learned',
      location: 'Chennai, Tamil Nadu, India',
      period: 'Oct 2018 - Dec 2018',
      description: 'Self-learned ERP and web development through online resources. Gained practical experience in web development technologies and enterprise resource planning systems using modern development tools.',
      technologies: ['Web Development', 'ERP Systems', 'HTML', 'CSS', 'JavaScript', 'Microsoft Visual Studio Code'],
      hardware: 'Microsoft Visual Studio Code'
    }
  ];

  return (
    <section id="courses" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Courses & Projects</h2>
        <div className="courses-container">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="course-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="course-header">
                <div className="course-icon">
                  <BookOpen size={24} />
                </div>
                <div className="course-title">
                  <h3>{course.title}</h3>
                  <h4>{course.institution}</h4>
                </div>
              </div>
              
              <div className="course-meta">
                <div className="course-meta-item">
                  <Calendar size={16} />
                  <span>{course.period}</span>
                </div>
                <div className="course-meta-item">
                  <MapPin size={16} />
                  <span>{course.location}</span>
                </div>
              </div>

              <p className="course-description">{course.description}</p>

              <div className="course-section">
                <h5>Technologies Used:</h5>
                <div className="course-tech">
                  {course.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="course-hardware">
                <h5>Environment:</h5>
                <p>{course.hardware}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Courses;
