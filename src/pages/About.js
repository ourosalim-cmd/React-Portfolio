import React from "react";
import Container from "../components/Container";
import Row from "../components/Row"; 
import Col from "../components/Col";
import ProfileImage from "../utils/images/me.jpg";
import Resume from "../utils/Aboudou's Resume.docx"

function About() {
  return (
    <div>
      
      <Container style={{ marginTop: 30}}>

        <Row>
          <Col size="md-4">

            <div className="card" style = {{ textAlign: "center", height: "380px"}}>
              <div className = "text-center">
                <img src= {ProfileImage} class= "img-fluid" alt="..."  style = {{height: "200px"}}/>
              </div>
              <div id = "badge" class="card-body">
                <h3 className="card-title">Aboudou Ouro-Salim</h3>
                <p className="card-text">Full Stack Developer</p>
              </div>
              <button className = "profileButton">
                <a className = "resume" target="-blank" href= {Resume}>
                  <i className = "fa fa-download"></i> Download Resume
                </a>
              </button>
            </div>
          </Col>

        
          <Col size="md-8 sm-6">

            <h6>
              I graduated with a Bachelor’s Degree in Applied Computing from Western Connecticut State University, 
              where I developed programming fluency and gained in experience engineering software.
              I am currently attending full-stuck developer bootcamp at Uconn school of egineering, 
              refining my skills and learning new developer technics such as HTML5, CSS, bootstrap, 
              javascript, jQuery, Web APIs, AJAX, node.js/express, PWA, React, MySQL, MongoDB
              </h6>
              <br /> 
              <h6>
                I am proficient in buiding mobile first web applications in HTML, CSS, Javascript/JQuery, 
                react on client side and server side apps in NodeJS using RESTful APIs, AJAX, SQL/MySQL and MongoDB.
                Check out few of my apps on my profile page.
              </h6>

              <h6> 
                As being a personal who prefers challenges than comfort, I was always inclined
                towards the opportunities which inforced me to keep myself in ever learning state. 
                I am self-driven, self-challenged individual and a great team player.
              </h6>
              <h6>
                I have passion to cook so that I can bring something exciting at dinner table for my family. 
                For selfcare I love to travel new places and I adore coffee dates with my girl friends!
              </h6>

          
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default About;
