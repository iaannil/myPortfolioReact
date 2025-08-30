import React, { useState } from 'react';
import profile from "../assets/1.jpeg"

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={profile} alt="Profile" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              To obtain a challenging and rewarding full-stack developer
              position in a dynamic and innovative company, where I can utilize
              my skills and experience in front-end and back-end development to
              design, develop, and deploy scalable, efficient, and user-friendly
              web applications. I aim to leverage my expertise in React,
              Node.js, Express.js, MongoDB, and API development to contribute to
              the growth and success of the company, while continuously learning
              and expanding my skill set to stay up-to-date with the latest
              technologies and industry trends.
            </p>

            <div className="tab-titles">
              <p 
                className={`tab-links ${activeTab === 'skills' ? 'active-links' : ''}`} 
                onClick={() => openTab('skills')} 
                style={{color: 'aqua'}}
              >
                Skills
              </p>
              <p 
                className={`tab-links ${activeTab === 'experience' ? 'active-links' : ''}`} 
                onClick={() => openTab('experience')} 
                style={{color: 'aqua'}}
              >
                Experience
              </p>
              <p 
                className={`tab-links ${activeTab === 'education' ? 'active-links' : ''}`} 
                onClick={() => openTab('education')} 
                style={{color: 'aqua'}}
              >
                Education
              </p>
            </div>

            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>UI & UX</span> <br />Designing web interfaces</li>
                <li><span>Web Development</span> <br />Web App Development</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><h2 style={{color: 'blueviolet'}}>Personal Project</h2></li>
                <li><span>Portfolio</span> <br />....</li>
                <li><span>E-commerce website</span> <br />....</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>
                  <span>B.Tech(2020-24)</span> <br />Veer Surendra Sai
                  University Of Technology,Burla
                </li>
                <li>
                  <span>12th-Science(2018-20)</span> <br />Prativa Residential
                  Higher Secondary School,Chhatrapur
                </li>
                <li>
                  <span>10th(2018)</span> <br />Rabighosh Nodal
                  Bidyapitha,Sumandal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
