import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhant Varma </span>
            from <span className="purple"> Pune, Maharashtra.</span>
            <br />I’m a Computer Scince Engineering graduate with a primary focus on Data Science and Artificial Intelligence, working on building data-driven and machine learning solutions for real-world problems. Alongside this, I have hands-on experience in full-stack development and software testing, which helps me build reliable and end-to-end systems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge Watching 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Siddhant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
