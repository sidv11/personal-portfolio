import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anti from "../../Assets/Projects/anti.png";
import weather from "../../Assets/Projects/weather.png";
import chatify from "../../Assets/Projects/chatify.png";
import hospital from "../../Assets/Projects/hospital.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital management system"
              description="This is a Hospital management system made for adding new patients to the hospital database and managing them.The system can be customized according to the specific needs of the hospital or healthcare facility, and can help to improve efficiency, reduce errors, and enhance patient care. It built with HTML, PHP and Firebase."
              ghLink="https://github.com/sidv11/Hospital-Management-system"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="A weather forecast system made with JS and React is a web application that displays weather information for a specific location. The system collects data from various sources, including weather APIs, and uses JavaScript and React to create an interactive user interface that displays the information in an easy-to-understand format. The system can show current weather conditions, hourly and daily forecasts, and alerts for severe weather."
              ghLink="https://github.com/sidv11/weather-forecast-in-react"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anti}
              isBlog={false}
              title="Anti-Virus"
              description="A simple antivirus software made in Python designed to detect and remove computer viruses and other malicious software.The software can also use virus definition databases to identify known malware and compare files against them. Once malware is detected, the antivirus software can quarantine or remove it to prevent further damage to the system. However, it may not offer the same level of comprehensive protection as commercial antivirus software that often comes with more advanced features and support."
              ghLink="https://github.com/sidv11/Antivirus-in-python"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
