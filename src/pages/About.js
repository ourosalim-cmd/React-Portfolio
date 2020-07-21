import React from "react";
import Container from "../components/Container";
import Row from "../components/Row"; 
import Col from "../components/Col";
import ProfileImage from "../utils/images/me.jpg";
// import Resume from "../utils/Aboudou's Resume.docx"

function About() {
  return (
    <div>
      
      <Container style={{ marginTop: 20}}>

        <Row >
          <Col size="md-4">
            <div className="card">
              <img src=  {ProfileImage} class="card-img-top" alt="Aboudou"/>
              <div className="card-body">
                <h5 className="card-title">Aboudou Ouro-Salim</h5>
                <p className="card-text">Clinical Engineering Technician transitioning into Software development.</p>
                <a href="https://docs.google.com/document/d/1trmt7WinnHj0sjvhKU9V5r4EEgKiObrOVwfEBz7skKI/edit?usp=sharing" className="btn btn-primary bg-dark">View Resume</a>
              </div>
            </div>
            
          </Col>

        
          <Col size="md-4">

            <h6>
              Graduated with a Bachelor’s Degree in Applied Computing from Western Connecticut State University, 
              where I developed programming fluency and gained in experience engineering software.
              Recent graduate full-stuck developer from Uconn school of egineering bootcamp, 
              refining my skills and learning new developer technics such as HTML5, CSS, bootstrap, 
              javascript, jQuery, Web APIs, AJAX, node.js/express, PWA, React, MySQL, MongoDB
              </h6>
              <br /> 
              <h6>
                Proficient in buiding mobile first web applications in HTML, CSS, Javascript/JQuery, 
                react on client side and server side applications using NodeJS, RESTful APIs, AJAX, SQL/MySQL and MongoDB.
                Check out few of my apps on my profile page.
              </h6>

              <h6> 
                As a personal who prefers challenges than comfort, I was always inclined
                towards the opportunities which inforced me to keep myself in ever learning state. 
                Self-driven, self-challenged individual and a great team player.
              </h6>         
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default About;
