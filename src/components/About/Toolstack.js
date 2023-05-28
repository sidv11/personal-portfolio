import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiVirtualbox,
  SiR,
  SiKalilinux
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6 className="name">
          Visual Studio Code
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6 className="name">
          Linux
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h6 className="name">
          Jupyter Notebook
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
        <h6 className="name">
          Virtual Box
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
        <h6 className="name">
          R Studio
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <h6 className="name">
          kali Linux
        </h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
