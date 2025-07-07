import React, { useState } from "react";
import Questions from "./Questions";
import "./Quiz.css";

export default function Quiz() {
  const [quiz, setQuiz] = useState("default");

  function startQuiz(event) {
    setQuiz("startQuestions");
  }

  function startAgain(event) {
    setQuiz("default");
  }

  return (
    <div className="quiz-container">
      {quiz === "default" ? (
        <button type="button" className="btn start-btn" onClick={startQuiz}>
          Start Quiz <br />
          🤓
        </button>
      ) : (
        <div>
          <Questions />
          <button type="button" className="btn start-btn" onClick={startAgain}>
            Restart ☺️
          </button>
        </div>
      )}
    </div>
  );
}
