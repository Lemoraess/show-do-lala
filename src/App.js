import "./App.css";
import React from "react";
import Quiz from "./Quiz.js";

export default function App() {
  return (
    <div className="App mt-3">
      <header className="App-header">
        <h1>Show do Lala</h1>
        <h5>Um quiz sobre o Lala 😌</h5>
      </header>

      <main className="App-main mt-5">
        <Quiz />
      </main>
      <footer>
        Coded by Le Santana, open-sourced at{" "}
        <a
          href="https://github.com/Lemoraess/show-do-lala"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        🤙
      </footer>
    </div>
  );
}
