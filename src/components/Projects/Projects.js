import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import photog from "../../Assets/Projects/photog.png";
//import emotion from "../../Assets/Projects/emotion.png";
import admindash from "../../Assets/Projects/admindash.png";
import myport from "../../Assets/Projects/myport.png";
import aichatbot from "../../Assets/Projects/aichatbot.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import aiformvalidator from "../../Assets/Projects/aiformvalidator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
     <Container>
        <h1 className="project-heading">
          my <strong className="purple">projects </strong>...
        </h1>
       <p style={{ color: "white" }}>
         
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiformvalidator}
              isBlog={false}
              title="AI Form Validator"
              description="An intelligent React web application that extracts structured tasks (subject, date, time, location, etc.) from natural language input using AI (Cohere API). It also includes voice input, Firebase authentication, real-time saving, search, analytics, and more.
"
              ghLink="https://github.com/fatiimhh/ai-form-validator"
              demoLink="https://fatiimhh.github.io/ai-form-validator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={aichatbot} 
              isBlog={false}
              title="AI Support Chatbot"
              description="A simple and responsive customer support chatbot built with React.js, Firebase, and the OpenAI API.
                          It simulates real-time support conversations using NLP."
              ghLink="https://github.com/fatiimhh/ai-support-chatbot"
              demoLink="https://fatiimhh.github.io/ai-support-chatbot/" 
            />
          </Col>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admindash}
              isBlog={false}
              title="Admin Dashboard"
              description="React Admin Dashboard, this project was built using React.js for the front-end, JSS for styling, and React Router for navigation. It also features a responsive design and custom components."
              ghLink="https://github.com/fatiimhh/React-admin-dashboard-"
              demoLink="https://fatiimhh.github.io/React-admin-dashboard-/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photog}
              isBlog={false}
              title="Photo Gallery"
              description="React Photo Gallery, This app uses the Flickr API services. Users can search for photos by keyword, and filter the photos by date taken."
              ghLink="https://github.com/fatiimhh/photo-gallery"
              demoLink="https://fatiimhh.github.io/photo-gallery/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="A Weather App, Displays weather data and a 5-day forecast from any city in the world using the (OpenWeatherMap). This project was built using JavaScript, React.js, and Open Weather API"
              ghLink="https://github.com/fatiimhh/Weather-App?tab=readme-ov-file"
              demoLink="https://fatiimhh.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myport}
              isBlog={false}
              title="My Portfolio"
              description="My portfolio displays my experience and projects. This project was built using JavaScript, React.js, Bootstrap, and Node.js."
              ghLink="https://github.com/fatiimhh/fatiimhh.github.io"
              demoLink="https://fatiimhh.github.io/"
            />
          </Col>



 {/*
         

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description=""
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
