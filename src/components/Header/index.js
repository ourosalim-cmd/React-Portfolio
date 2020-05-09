import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div className= "jumbotron header">
      <h1>Aboudou Ouro-Salim</h1>
      <article className="widget_content">  
            <button className = "profile-button">
            <Link to="https://www.linkedin.com/in/aboudou-ouro-salim/" className ="fa fa-linkedin" />
            </button>
            <button className = "profile-button">
            <Link href="https://github.com/ourosalim-cmd" className="fa fa-github" /> 
            </button>
      </article>
    </div>
  );
}

export default Header;
