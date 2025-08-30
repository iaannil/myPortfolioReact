import React from 'react';
import { faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <FontAwesomeIcon icon={faCode} />
            <h2 style={{ color: 'rgb(82, 121, 129)' }}>Web Developing : Web App Application</h2>
            <p>
              I am learning HTML, CSS, JavaScript, React.js, Bootstrap, MongoDB, Express.js And Node.js 
              and make some project like Portfolio, E-commerce website and Chart Application work based 
              on RESTful API based backend. So I am doing Web Developing as Fullstack Web app Developer.
            </p>
            <a href="#">learn more</a>
          </div>

          <div>
            <FontAwesomeIcon icon={faPenNib} />
            <h2 style={{ color: 'rgb(82, 121, 129)' }}>Web Design : Web App Application design</h2>
            <p>
              I am learning HTML, CSS, JavaScript, React.js, Bootstrap, MongoDB, Express.js And Node.js 
              and make some project like Portfolio, E-commerce website and Chart Application work based 
              on RESTful API based backend. So I am doing Web Developing as Fullstack Web app Developer.
            </p>
            <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;