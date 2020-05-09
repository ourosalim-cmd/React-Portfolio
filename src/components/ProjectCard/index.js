import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img  className = "projectImg" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          <li>
            <p>{props.description}</p> 
          </li>
        </ul>
        
      </div>

      <span className="remove">
          <a href = {props.URL}> <i className="fa fa-link"  ></i></a>
      </span>
      
    </div>
  );
}


export default ProjectCard;
