import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [activeItem, setActiveItem] = useState(null);

 
  const toggleDescription = (item) => {
    setActiveItem(activeItem === item ? null : item); 
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         
          {/* Experience 1 */}
          <div className="experience-item">
            <div className="position" onClick={() => toggleDescription(1)}>
              ➖ Front-End/Web Developer Intern @ <b className="purple">  WelSpot| USA </b>
            </div>
            {activeItem === 1 && (
              <div className="description">
                <p>
               ▶ Developed and maintained responsive components for a fintech admin dashboard using 
               React.js, TypeScript, Bootstrap, CSS, SCSS, and HTML. Focused on creating efficient, 
                scalable solutions for real-time financial data visualization, enhancing user experience and accessibility. </p>
              <p>▶ Identified and resolved front-end bugs to improve stability
                 and user experience.</p>

              </div>
            )}
          </div>

          {/* Experience 2 */}
          <div className="experience-item">
            <div className="position" onClick={() => toggleDescription(2)}>
            ➖ Front-End Developer Intern @ <b className="purple"> ENGAGEathon| USA </b> 
            </div>
            {activeItem === 2 && (
              <div className="description">
                <p>
                ▶ Developed and maintained front end components for an
                 Android app using React Native and JavaScript with Expo
                </p>
                <p>▶ Implemented Figma designs into functional and visually
                consistent user interfaces.</p>
              </div>
            )}
          </div>

          {/* Experience 3 */}
          <div className="experience-item">
            <div className="position" onClick={() => toggleDescription(3)}>
            ➖ Automation and AI Developer Intern @ <b className="purple">  LeDi SEO| USA </b> 
            </div>
            {activeItem === 3 && (
              <div className="description">
                <p>
                ▶ Worked with GoHighLevel software to develop automation solutions,
                 exploring AI-driven approaches to improve workflows. Developed and automated email and SMS workflows using GHL.
                </p>
                <p>
                ▶ Leveraged Apollo, D7 Lead Finder, and Bulk Email Checker
                 for efficient lead generation, targeted searches, and email verification
                </p>
              </div>
            )}
          </div>

          <br />



          {/*<ul>
            <li className="about-activity">
              <ImPointRight /> *****
            </li>
            <li className="about-activity">
              <ImPointRight /> ****
            </li>
            <li className="about-activity">
              <ImPointRight /> *****
            </li> 
          </ul>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
