import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Quien quiere ser millonario !!!</h1>
      </div>
      <div className="container-home">
        <h1>Home</h1>
        <button>
          <i className="fa-solid fa-gamepad"></i>
          <span>
            <Link to="/game" className="link">
              Juego nuevo
            </Link>
          </span>
        </button>
        <button>
          <i className="fa-solid fa-user"></i>
          <span>Estadistica</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
