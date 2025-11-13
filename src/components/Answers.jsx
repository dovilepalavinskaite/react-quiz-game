import { useRef, useState } from "react";

export default function Answers({ answers, handleUserAnswer }) {
  const shuffledAnswers = useRef(null);
  const [clicked, setClicked] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  function saveUserAnswer(answer) {
    setClicked(answer);
    setIsCorrectAnswer(answer === answers[0]);
    setTimeout(() => {
      handleUserAnswer(answer);
      setClicked(null);
      setIsCorrectAnswer(null);
    }, 1000);
  }

  return (
    <div className="answers">
      <ul>
        {shuffledAnswers.current.map((answer) => {
          const isClicked = clicked === answer;

          let bgClass = "bg-sky-300 hover:bg-violet-400";
          if (isClicked && isCorrectAnswer === true) {
            bgClass = "bg-green-400";
          } else if (isClicked && isCorrectAnswer === false) {
            bgClass = "bg-red-400";
          }

          const classes = `
            w-full py-3 rounded-2xl text-xl font-bold cursor-pointer
            transition-colors duration-200 ${bgClass}
          `.trim();

          return (
            <li key={answer} className="mb-3">
              <button
                className={classes}
                onClick={() => saveUserAnswer(answer)}
                disabled={!!clicked}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}