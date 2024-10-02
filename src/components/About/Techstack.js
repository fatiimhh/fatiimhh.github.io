import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiMysql,
  DiHtml5,
  DiBootstrap,
  DiAws,
  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
 // SiNextdotjs,
 // SiSolidity,
 // SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/*<Col xs={4} md={1} className="tech-icons">
        <CgCPlusPlus />
      </Col>*/}
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/*<Col xs={4} md={1} className="tech-icons">
        <TbBrandGolang />
      </Col>*/}
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      {/*<Col xs={4} md={1} className="tech-icons">
        <SiSolidity />
      </Col>*/}
      {/*<Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
      </Col>*/}
      <Col xs={4} md={1} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiBootstrap />
      </Col>
       <Col xs={4} md={1} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
      </Col>
       <Col xs={4} md={1} className="tech-icons">
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
