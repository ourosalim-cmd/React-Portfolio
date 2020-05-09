import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/API.js";


class Portfolio extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        projects
        
    };


    render() {

        console.log(this.state.projects);
    
    return (
        
    <Container style={{ marginTop: 30 }}>
        <Row>
            {this.state.projects.map(project => (
                <Col size="md-4">
                <ProjectCard

                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    URL = {project.URL}
                />
                </Col>
            ))}
        </Row>
    </Container>
    
        );
    }
}


  export default Portfolio;