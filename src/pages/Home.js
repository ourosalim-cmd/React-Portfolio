import React from "react";
import { Link } from "react-router-dom";
import  "../utils/style.css";
function Home() {
    return (
    <div>
        <div className = "jumbotron">
            <h1>
                Hello, I'm <span className="nameCol"> Aboudou Ouro-Salim. </span>
                <br/>
                A full-stack web developer.
            </h1>
            <Link to="/portfolio">
                <div className="call align-self-center">
                    <h5> View my work</h5>
                </div>
            </Link>
        </div>
    </div>
    )};
    export default Home;