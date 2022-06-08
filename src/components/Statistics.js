import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Statistics = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    const usersObject = JSON.parse(localStorage.getItem("users"));
    return usersObject;
  };

  useEffect(() => {
    setUsers(getData());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="container-help">
          <h1>Statistics</h1>

          {users.map((user) => (
            <div key={uuidv4()}>
              <p key={uuidv4()}>
                Name: {user.name} Score:{user.score}{" "}
              </p>
            </div>
          ))}

          <button onClick={() => (window.location.href = "/")}>
            <i className="fa-solid fa-house"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
