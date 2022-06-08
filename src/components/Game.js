import { useState } from "react";
import "../assets/style/Game.css";
import questions from "../questions.json";

const Game = () => {
  const randomQuestions = Math.floor(Math.random() * 5);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  console.log(currentQuestion);

  const handeAnswerSubmit = (thatsRight, e) => {
    e.target.classList.add(thatsRight ? "correct" : "incorrect");

    if (thatsRight) {
      setScore(score + 1000);
    } else {
      setIsFinished(true);
    }

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setIsFinished(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 1500);
  };

  if (isFinished)
    return (
      <div className="game">
        <div className="juego-terminado">
          <p>Obtuviste {score} puntos</p>
        </div>
        <button onClick={() => (window.location.href = "/")}>
          Bolver a jugar
        </button>
      </div>
    );

  const engGame = () => {
    setIsFinished(true);
    if (isFinished)
      return (
        <div className="game">
          <div className="juego-terminado">
            <p>Obtuviste {score} puntos</p>
          </div>
          <button onClick={() => (window.location.href = "/")}>
            Bolver a jugar
          </button>
        </div>
      );
  };

  return (
    <div className="game">
      <div className="titles">
        <h1>{questions[currentQuestion].title}</h1>
      </div>
      <div className="questions">
        <p>{questions[currentQuestion].options[randomQuestions].question}</p>
      </div>
      <div className="options">
        {questions[currentQuestion].options[randomQuestions].responses.map(
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
