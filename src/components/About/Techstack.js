import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiPandas, 
  SiNumpy,
  SiScikitlearn, 
  SiPowerbi,
  SiStreamlit,
  


} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6 className="name">
          Javascript
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6 className="name">
          Nodejs
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6 className="name">
          React
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6 className="name">
          Mongodb
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6 className="name">
          SQL
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6 className="name">
          Firebase
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6 className="name">
          Python
        </h6>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <h6 className="name">
          Power BI
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <h6 className="name">
          Streamlit
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6 className="name">
          Git
        </h6>
      </Col>
    </Row>
  );
}

export default Techstack;
