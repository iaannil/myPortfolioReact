import React  from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sm from "../assets/sm_img.png";
// import { useNavigate } from "react-router-dom";

import Projects from "./Projects";
// import chart from "../assets/chart_img.png";
// import ecom from "../assets/ecom_img.png";

const Portfolio = () => {
   
  // const navigate = useNavigate();
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work : Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src={sm} alt="Social Media App" />
            <div className="layer">
              <h3>QuickGPT – AI-Powered Content Generator</h3>
              <p>
                Tech Stack: React.js, Tailwind CSS, Node.js, Express.js,
                MongoDB, OpenAI API, ImageKit, Axios, Postman, Git, Vercel
              </p>
              <h4>
                - Built and deployed an AI-powered SaaS app that generates text
                & images using OpenAI API and ImageKit.
              </h4>
              <h4>
                - Implemented JWT authentication & authorization, credit-based
                usage system, and payment gateway integration.
              </h4>
              <h4>
                - Designed a responsive UI with React & Tailwind; developed
                RESTful APIs with Node/Express and tested with Postman.
              </h4>
              <h4>
                - Deployed on Vercel with Git-based CI/CD, ensuring scalability
                and production readiness.
              </h4>
              <a
                href="https://qgpt-project.vercel.app/
"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
          <div className="work">
            <img src={sm} alt="Social Media App" />
            <div className="layer">
              <h3>Chess.com clone</h3>
              <p>
                Tech Stack: React.js, Tailwind CSS, Node.js,,Chess.js,Socket.io,Express.js, Postman, Git, Vercel
              </p>
              <h4>
                - Real-time multiplayer chess game built with Node.js, Express, and Socket.io .
              </h4>
              <h4>
                - Implemented WebSocket communication for live move synchronization between players.
              </h4>
              <h4>
                - Integrated chess.js for game logic, move validation, and special move handling.

              </h4>
              <h4>
                - Developed drag-and-drop interface with turn-based validation and board state management
              </h4>
              <h4>
                -Designed player role system (white/black/spectator) with proper connection handling.
              </h4>
              <a
                href="https://chess-com-virid.vercel.app/"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>

          <a className="btn" href="/myPortfolioReact/projects">Go to Projects</a>

           

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
