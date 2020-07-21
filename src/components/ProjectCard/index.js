import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (

    <div className="card">
      {/* <div className="img-container"> */}
        <img  className = "card-img-top" alt={props.name} src={props.image} />
      {/* </div> */}
      <div className="card-body">
        <ul>
          <li>
            <h5 className="card-title">{props.name}</h5> 
          </li>
          <li>
            <p className = "card-text">{props.description}</p> 
          </li>
          {/* <li>
            <a href={props.URL} className = "btn btn-primary cardLink leftLink">Demo</a>
            <a href= {props.URL} className = "btn btn-primary cardLink">GitHub Repo</a>
          </li> */}
        </ul>
      </div>
      <div className = "card-footer bg-white " style = {{padding: 0, height: 45}}> 
          <ul>
            <a href={props.URL} className = "btn btn-primary cardLink leftLink">Demo</a>
            <a href= {props.gitRepo} className = "btn btn-primary cardLink">GitHub Repo</a>
          </ul>
        </div>
    </div> 
  );
}
export default ProjectCard;
