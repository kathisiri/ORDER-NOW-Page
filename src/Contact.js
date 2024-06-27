import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const currentContact = contactRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentContact) {
      observer.observe(currentContact);
    }

    return () => {
      if (currentContact) {
        observer.unobserve(currentContact);
      }
    };
  }, []);

  return (
    <section
      ref={contactRef}
      className={`hidden ${isVisible ? 'fade-in' : ''}`}
    >
      <h1 className="h1 ch">Contact us</h1>
      <div className="container1">
        <div className="container">
          <div className="contact-info">
            <h2 className={isVisible ? 'fade-in' : 'hidden'}>Contact Information</h2>
            <ul>
              <li className={isVisible ? 'fade-in' : 'hidden'}><i className="fas fa-phone"></i> +1012 3456 789</li>
              <li className={isVisible ? 'fade-in' : 'hidden'}><i className="fas fa-envelope"></i> demo@gmail.com</li>
              <li className={isVisible ? 'fade-in' : 'hidden'}><i className="fas fa-map-marker-alt"></i> 132 Dartmouth Street Boston, Massachusetts 02156 United States</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2 className={isVisible ? 'fade-in' : 'hidden'}>Contact Details</h2>
            <form>
              <div className="form-group">
                <div className="form-half">
                  <label htmlFor="first-name" className={isVisible ? 'fade-in' : 'hidden'}>First Name</label>
                  <input type="text" id="first-name" name="first-name" className={isVisible ? 'fade-in' : 'hidden'} />
                </div>
                <div className="form-half">
                  <label htmlFor="last-name" className={isVisible ? 'fade-in' : 'hidden'}>Last Name</label>
                  <input type="text" id="last-name" name="last-name" className={isVisible ? 'fade-in' : 'hidden'} />
                </div>
              </div>
              <div className="form-group">
                <div className="form-half">
                  <label htmlFor="email" className={isVisible ? 'fade-in' : 'hidden'}>Email</label>
                  <input type="email" id="email" name="email" className={isVisible ? 'fade-in' : 'hidden'} />
                </div>
                <div className="form-half">
                  <label htmlFor="phone" className={isVisible ? 'fade-in' : 'hidden'}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" className={isVisible ? 'fade-in' : 'hidden'} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="quantity" className={isVisible ? 'fade-in' : 'hidden'}>Quantity</label>
                <input type="number" id="quantity" name="quantity" className={isVisible ? 'fade-in' : 'hidden'} />
              </div>
              <div className="form-group">
                <label className={isVisible ? 'fade-in' : 'hidden'}>Type Of Order</label>
              </div>
              <div className="form-group radio-group">
                <input type="radio" id="b2b" name="order-type" value="b2b" defaultChecked className={isVisible ? 'fade-in' : 'hidden'} />
                <label htmlFor="b2b" className={isVisible ? 'fade-in' : 'hidden'}>Business to Business</label>
                <input type="radio" id="b2r" name="order-type" value="b2r" className={isVisible ? 'fade-in' : 'hidden'} />
                <label htmlFor="b2r" className={isVisible ? 'fade-in' : 'hidden'}>Business to Retailer</label>
                <input type="radio" id="c2b" name="order-type" value="c2b" className={isVisible ? 'fade-in' : 'hidden'} />
                <label htmlFor="c2b" className={isVisible ? 'fade-in' : 'hidden'}>Customer to Business</label>
              </div>
              <p className={isVisible ? 'fade-in' : 'hidden'}>*TNM will contact you for confirming your order</p>
              <button type="submit" className={isVisible ? 'fade-in' : 'hidden'}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
