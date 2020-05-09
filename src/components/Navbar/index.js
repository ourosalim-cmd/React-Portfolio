import React from "react";
import { Link } from "react-router-dom";
import  "./style.css";

function navbar() {
    return (
        // <button className = "profile-button">
        // <Link to="https://www.linkedin.com/in/aboudou-ouro-salim/" className ="fa fa-linkedin" />
        // </button>
        // <div className="container"> 
            <nav className="navbar navbar-expand-md justify-content-end pnav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav text-right mx-3">
                        {/* <article className="widget_content">   */}
                            <li className = "profile-button">
                                <a href="https://www.linkedin.com/in/aboudou-ouro-salim/" className ="fa fa-linkedin">
                                </a>
                            </li>
                            <li className = "profile-button">
                                <a href="https://github.com/ourosalim-cmd" className="fa fa-github" > 
                                </a>                                
                            </li>
                        {/* </article> */}
                        <li className="nav-item mx-3">
                            <Link className="nav-link mx-3" to="/Home"> Home </Link>
                        </li>
                        <li className="nav-item mx-3">
                        <Link className="nav-link mx-3" to="/About"> About </Link> 
                        </li>
                        <li className="nav-item mx-3">
                        <Link className="nav-link mx-3" to="/portfolio"> Portfolio </Link>
                        </li>
                        <li className="nav-item mx-3">
                        <Link className="nav-link mx-3" to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        // </div> 
    )};
    export default navbar;