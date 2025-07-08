import React, { useState } from "react";
import "./Questions.css";

const questions = [
  {
    pergunta: "O Lala é garoto de programa?",
    options: [
      "Não! Ele é músico.",
      "Sim! 😏",
      "Só nos finais de semana",
      "O que é um garoto de programa?",
    ],
    answer: 1,
  },
  {
    pergunta: "O Lala tem quantos doguinhos?",
    options: ["2", "5", "1", "3"],
    answer: 3,
  },
  {
    pergunta: "Quantas tatuagens Lala tem?",
    options: ["4", "5", "2", "Ele é crente, e crente não tem tatuagem."],
    answer: 0,
  },
  {
    pergunta: "Qual o signo do Lala?",
    options: [
      "Peixes 🙃",
      "Sagita 😈",
      "Aquariano nato 😎",
      "Ele não acredita em signo. Libra.",
    ],
    answer: 3,
  },
  {
    pergunta: "Quais instrumentos o Lala toca?",
    options: [
      "Laerccius toca?",
      "Violão, Teclado e Sanfona",
      "Flauta e violão",
      "A intro do game of thrones no violão",
    ],
    answer: 1,
  },
  {
    pergunta: "Qual a naturalidade do Lala?",
    options: ["Mineirim", "Paulista", "Capixaba", "Targaryen"],
    answer: 0,
  },
  {
    pergunta: "O que o Lala escuta quando está trabalhando?",
    options: ["Sertanejo", "MPB", "Musica Eletrônica", "Funk"],
    answer: 2,
  },
  {
    pergunta:
      "Qual foi a cor preferida do Lala durante a infancia e adolescencia?",
    options: ["Azul", "Amarelo", "Preto", "Cinza"],
    answer: 1,
  },
  {
    pergunta: "Quantas cidades o Lala já morou?",
    options: ["2", "4", "6", "9"],
    answer: 3,
  },
  {
    pergunta: "Qual o nome do Lala?",
    options: ["Laerte", "Laercio", "Laerccius", "Laercciuus"],
    answer: 2,
  },
];

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(
        `Quiz terminado! Você acertou ${score + 1} de ${
          questions.length
        } perguntas.`
      );
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="questions-container">
      <h2 className="question">{questions[currentQuestion].pergunta}</h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button
              type="button"
              className="btn-option"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <p>
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>
    </div>
  );
}
