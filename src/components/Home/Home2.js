import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
//import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  //AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              about <span className="purple"> me </span>...
            </h1>
            <p className="home-about-body">
            Hey there, it's Fatima, a junior software developer from Jordan.👩‍💻
            <br />
              <br />Proficient in front-end technologies like
            <b className="purple"> HTML, CSS, JavaScript, and TypeScript </b>with a strong focus on building dynamic interfaces using
            <b className="purple"> React.js</b>, alongside with a solid understanding of back-end
            technologies including, <b className="purple"> Node.js</b>. 
              <i>
                
              </i>
              <br />
              <br />
              Currently, I’m expanding my expertise in Automation and AI Development through my internship, 
              where I’m learning how to integrate cutting-edge technologies into real-world projects.  &nbsp;
              <i>
                <b className="purple"> </b> 
                {" "}
                
              </i>
              <br />
              <br />
               <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
         {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>

          <Col md={12} className="home-about-social">
            <h1>find me on</h1>
            <p>
              <span className="purple"> </span>
            </p>


            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fatiimhh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*<li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>*/}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fatima-bani-sakher-4773561b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/*<li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
