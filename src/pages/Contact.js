import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";

class Contact extends Component {
 
  
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h2>Contact</h2>
          <hr />        
           <ContactForm
          
          />
        </Container>
      </div>
    );
  }
};

export default Contact;