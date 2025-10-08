import React from 'react';
import { 
  faEnvelope, 
  faPhone,
  faA
} from '@fortawesome/free-solid-svg-icons';
import { 
  // faFacebook, 
  faInstagram, 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
             maharanaanil424@gmail.com
          </p>
          
          <p>
            <FontAwesomeIcon icon={faPhone} /> +91 8114966252
          </p>
          
          <div className="social-icons">
            {/* <a href="https://m.facebook.com/profile.php?id=61556251740723&__n=K" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a> */}
            <a href="https://www.instagram.com/iaannil/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/anil-maharana-450b98202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/iaannil" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          
          <a 
            href="https://rxresu.me/maharanaanil424/anil-maharana-fullstack-resume" 
            download 
            className="btn btn2"
          >
            Download CV
          </a>
        </div>
        
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="Name" 
              placeholder="Enter Your Name" 
              required 
            />
            <input 
              type="email" 
              name="Email" 
              placeholder="Enter your Email" 
              required 
            />
            <textarea 
              name="Message" 
              placeholder="Enter your message" 
              rows="6"
            ></textarea>
            <button type="submit" className="btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
      
      <div className="copyright">
        <p>
         Copyright @ <FontAwesomeIcon icon={faA} />NIL | This is My Portfolio
        </p>
      </div>
    </div>
  );
};

export default Contact;