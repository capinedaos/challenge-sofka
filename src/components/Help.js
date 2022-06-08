import React from "react";
import "../assets/style/Help.css";

const Help = () => {
  return (
    <div className="container">
      <div className="container-help">
        <div className="header" > 
          <h1>Help</h1>
          <h2>Instructions</h2>
        </div>
        <p>
          <b>1.</b>
          If you wish to withdraw and keep your prize, please press the exit
          button.
        </p>
        <p>
          {" "}
          <b>2.</b>If you answer a question incorrectly, you lose your prize.
        </p>
        <p>
          {" "}
          <b>3.</b>The score per round is 1000
        </p>
        <p>
          {" "}
          <b>4.</b>Highest score is 5000
        </p>
        <button onClick={() => (window.location.href = "/")}>
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
    </div>
  );
};

export default Help;
