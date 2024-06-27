import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

function Section({ title, content }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div className="section-2">
      <section
        ref={sectionRef}
        className={`hidden ${isVisible ? 'fade-in' : ''}`}
      >
        <h1 className="h1">{title}</h1>
        <div className="Rectangle-1319">
          <p className="content1">{content}</p>
        </div>
      </section>
    </div>
  );
}

export default Section;
