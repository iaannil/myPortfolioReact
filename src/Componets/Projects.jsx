import React from 'react'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import sm1 from "../assets/sm_img.png";

const Projects = () => {
  return (
    <div id="portfolio">
          <div className="container">
            <h1 className="sub-title">My Work : Projects</h1>
            <div className="work-list">
              <div className="work">
                <img src="qgpt.jpg" alt="QuickGPT" />
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
                <img src="goout.jpg" alt="GO-OUT" />
                <div className="layer">
                  <h3>Go-OUT Travel App</h3>
                  <p>
                    Tech Stack: Nextjs, Tailwind CSS, Docker, Git, Vercel
                  </p>
                  <h4>
                    - Developed a responsive travel web application using Next.js and Tailwind CSS.

                  </h4>
                  <h4>
                    - Containerized the application using a custom Dockerfile and built optimized production images.

                  </h4>
                  <h4>
                    - Published the Docker image on Docker Hub (docker push username/goout:latest).

                  </h4>
                  <h4>
                    - Deployed on Vercel with Git-based CI/CD, ensuring scalability
                    and production readiness.
                  </h4>
                  <h4>
                    - Automated environment setup and ensured consistent deployments across machines using containers.
                  </h4>
                  <a
                    href="https://go-out-kappa.vercel.app/
    "
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>


              <div className="work">
                <img src="chess1.jpg" alt="Chess.com clone" />
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
            </div>
          </div>
          <a className="btn" href="/">Go to Home Page</a>
        </div>
  )
}

export default Projects