import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="container-home">
        <h1>Home</h1>
        <button>
          <i className="fa-solid fa-gamepad"></i>
          <Link to="/game" className="link">
            <span>Start Game</span>
          </Link>
        </button>
        <button>
          <i className="fa-solid fa-user"></i>
          <Link to="/statistics" className="link">
            <span>Game history</span>
          </Link>
        </button>
        <button>
          <i className="fa-solid fa-circle-question"></i>
          <Link to="/help" className="link">
            <span>Help</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
