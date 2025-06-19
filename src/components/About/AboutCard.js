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
              ➖ Front-End/Web Developer Intern @ <b className="purple">  WelSpot (Remote, USA) – Jun 2023 – Sep 2023 </b>
            </div>
            {activeItem === 1 && (
              <div className="description">
                <p>
               ▶ Built and maintained a fintech admin dashboard using React.js, TypeScript, Bootstrap, and SCSS.</p>
              <p>▶ Collaborated with backend team to connect APIs and optimize data visualization tools.
                </p>
                <p>▶ Diagnosed and fixed UI bugs, improving performance and user experience.
</p>

              </div>
            )}
          </div>

          {/* Experience 2 */}
          <div className="experience-item">
            <div className="position" onClick={() => toggleDescription(2)}>
            ➖ Front-End Developer Intern @ <b className="purple"> ENGAGEathon (Remote, USA) – Nov 2023 – May 2024</b> 
            </div>
            {activeItem === 2 && (
              <div className="description">
                <p>
                ▶ Developed mobile app components using React Native, JavaScript, and Expo.
                </p>
                <p>▶ Converted Figma designs into pixel-perfect UI while maintaining responsiveness and accessibility.</p>
                <p>▶ Used GitHub for version control and team collaboration across sprints.
</p>

              </div>
            )}
          </div>

          {/* Experience 3 */}
          <div className="experience-item">
            <div className="position" onClick={() => toggleDescription(3)}>
            ➖ Automation and AI Developer Intern @ <b className="purple">  LeDi SEO (Remote, USA) – Jul 2024 – Apr 2025 </b> 
            </div>
            {activeItem === 3 && (
              <div className="description">
                <p>
                ▶ Integrated AI tools (via n8n and APIs) to automate marketing funnels, CRM tasks, and email outreach.
                </p>
                <p>
                ▶ Customized WordPress sites to optimize user experience and lead capture workflows.
                </p>
                <p>▶ Improved website performance and SEO rankings through automated audits and content improvements. </p>

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
