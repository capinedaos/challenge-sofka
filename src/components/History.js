import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../assets/style/History.css";

const History = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    const usersObject = JSON.parse(window.localStorage.getItem("users"));
    return usersObject;
  };

  useEffect(() => {
    setUsers(getData());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="container-history">
          <h1>Game History</h1>

          {users !== null ? (
            <table>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
              {users.map((user) => (
                <tr>
                  <td>
                    <p key={uuidv4()}>{user.name}</p>
                  </td>
                  <td>
                    <p key={uuidv4()}>{user.score}</p>
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <p>No records yet, play a game !!!</p>
          )}

          <button onClick={() => (window.location.href = "/")}>
            <i className="fa-solid fa-house"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
