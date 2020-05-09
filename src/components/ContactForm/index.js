import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ContactForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Your Name"
          id="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="email"
          type="text"
          className="form-control"
          placeholder="Enter your email here"
          id="name"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          value={props.search}
          onChange={props.handleInputChange}
          name="msg"
          type="text"
          className="form-control"
          placeholder="Message"
          id="message"
          rows="5"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
