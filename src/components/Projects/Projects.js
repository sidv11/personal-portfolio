import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anti from "../../Assets/Projects/anti.png";
import weather from "../../Assets/Projects/weather.png";
import todo from "../../Assets/Projects/todo.png";
import hospital from "../../Assets/Projects/hospital.png";
import bill from "../../Assets/Projects/bill.png";
import pet from "../../Assets/Projects/pet.png";
import web from "../../Assets/Projects/web.png"


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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="The To-Do is a user-friendly and efficient to-do list application designed to streamline task management. It offers a simple and intuitive interface, allowing users to easily create, organize, and prioritize their tasks."
              ghLink="https://github.com/sidv11/To-Do-list"
              demoLink="https://siddhant-to-dolist.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={bill} 
    isBlog={false}
    title="Tanvish Silver House – Billing System"
    description="An advanced bullion billing software built using Electron, React, Redux, and Node.js. Handles gold/silver billing, purity calculations, customer records, real-time fine gold calculation, and PDF bill generation."
    ghLink="https://github.com/sidv11/tanvish-silver-house" 
  />
</Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={pet} 
    isBlog={false}
    title="Wiggles & Walk – Pet Care Website"
    description="A beautiful and responsive website for pet boarding and pet care services. Includes service pages, booking form, reviews, gallery & contact section. Built with React and Tailwind."
    ghLink="https://github.com/sidv11/wiggles-walk" 
    demoLink="https://wiggleswalk.netlify.app/" 
  />
</Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={web}
    isBlog={false}
    title="Website Templates Catalog"
    description="A platform where I showcase and sell pre-built modern website templates for different business categories. Built with React and Tailwind, featuring responsive UI, product gallery, and inquiry form."
    ghLink="https://github.com/sidv11/portfolio-landing-page-main" 
    demoLink="https://siddhant11.netlify.app/" 
  />
</Col>
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
