import React, { useEffect, useState } from "react";

const Statistics = () => {
  const [name, setName] = useState("");
  const [score, setsCore] = useState("");

  const getData = () => {
    return localStorage.getItem("nombre", "score");
  };

  useEffect(() => {
    setName(getData());
    setsCore(getData());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="container-help">
          <h1>Statistics</h1>
          <div>
            <p>
              Name:{name} Score:{score}{" "}
            </p>
          </div>
          <button onClick={() => (window.location.href = "/")}>
            <i className="fa-solid fa-house"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
