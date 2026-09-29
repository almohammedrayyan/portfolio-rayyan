import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'Artificial Intelligence Training',
      issuer: 'Besant Technologies (Oracle & Microsoft Partner)',
      date: 'February 2021',
      certId: 'BDZ-21698',
      image: '/portfolio.jpg',
      description: 'Completed comprehensive AI training program covering machine learning algorithms, neural networks, and practical AI applications'
    },
    {
      title: 'Artificial Intelligence Internship',
      issuer: 'Barola Technologies',
      date: 'June 2021',
      certId: 'ISO 9001:2015',
          image: '/portfolio-2.jpg',

      description: '07 Days AI Internship at Research, Development & Training Facility, Chennai. Hands-on experience with AI technologies and real-world applications'
    },
    {
      title: 'Web Development Workshop',
      issuer: 'Aalim Muhammed Salegh College of Engineering',
      date: 'February 2019',
      certId: 'CSE Department',
             image: '/portfolio-3.jpeg',

      description: 'Led and managed Web Development Workshop on 27 & 28 Feb 2019. Guided participants in modern web development practices'
    },
    {
      title: 'IBM SPSS Modeler V3',
      issuer: 'IBM - Learn Softech Institute',
      date: '2020',
      certId: 'GRN: 506658695',
       image: '/portfolio-4.jpeg',
      description: 'Completed training and certification in IBM SPSS Modeler V3 for statistical analysis and data modeling'
    }
  ];

  return (
    <section id="certifications" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                  <span className="cert-view-text">
                    <ExternalLink size={16} />
                    View Certificate
                  </span>
                </div>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '10px' }}>
                  {cert.description}
                </p>
                <div className="cert-badge">
                  <Award size={14} />
                  {cert.certId}
                </div>
                <div className="cert-meta">
                  <div className="cert-meta-item">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
                <X size={24} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
              <div className="cert-modal-info">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
