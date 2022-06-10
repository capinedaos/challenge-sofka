import React, { useEffect, useState } from "react";
import "../assets/style/Game.css";
import questions from "../questions.json";

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [random, setRandom] = useState(0);
  const [nameUser, setNameUser] = useState("");
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    const randomQuestions = Math.floor(Math.random() * 5);
    setRandom(randomQuestions);
  }, []);

  const handeAnswerSubmit = (thatsRight, e) => {
    e.target.classList.add(thatsRight ? "correct" : "incorrect");

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setIsFinished(true);
        if (thatsRight) {
          setScore(score + 1000);
        } else {
          setScore(0);
        }
      } else {
        setCurrentQuestion(currentQuestion + 1);
        if (thatsRight) {
          setScore(score + 1000);
        } else {
          setScore(0);
          setIsFinished(true);
        }
      }
    }, 1500);
  };

  const saveUser = () => (window.location.href = "/");

  const saveData = () => {
    if (nameUser !== "") {
      setActiveButton(false);
      let user = {
        name: nameUser,
        score: score,
      };

      let arrayUsers = JSON.parse(window.localStorage.getItem("users")) || [];
      arrayUsers.push(user);
      let usersJSON = JSON.stringify(arrayUsers);
      window.localStorage.setItem("users", usersJSON);
      alert("Registro guardado");

      console.log(arrayUsers.length);
      setNameUser("");
      saveUser();
    } else {
      alert("ingrese un nombre");
    }
  };

  if (isFinished)
    return (
      <div className="game">
        <div>
          <h1>Save Game</h1>
          <p>Obtuviste {score} puntos</p>
        </div>

        <div className="input">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nameUser}
            onChange={(e) => setNameUser(e.target.value)}
          />
          <button onClick={saveData} disabled={!activeButton}>
            {" "}
            <i className="fa-solid fa-floppy-disk"></i>
          </button>
        </div>
      </div>
    );

  const engGame = () => {
    setIsFinished(true);
  };

  return (
    <div className="game">
      <div className="titles">
        <h1>{questions[currentQuestion].title}</h1>
      </div>
      <div className="questions">
        <p>{questions[currentQuestion].options[random].question}</p>
      </div>
      <div className="options">
        {questions[currentQuestion].options[random].responses.map(
          (response) => (
            <button
              key={response.response}
              onClick={(e) => handeAnswerSubmit(response["thats-right"], e)}
            >
              {response.response}
            </button>
          )
        )}
      </div>
      <button onClick={() => engGame()}>
        <i className="fa-solid fa-person-running"></i>
      </button>
    </div>
  );
};

export default Game;
