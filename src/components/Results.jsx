import trophyImg from "../assets/trophy.png";
import QUESTIONS from "../questions.js";

export default function Results({ userAnswers }) {
  const answersEvaluation = userAnswers.map((userAnswer, index) => {
    const correctAnswer = QUESTIONS[index].answers[0];
    return userAnswer === correctAnswer ? "Correct" : "Incorrect";
  });

  const totalAnswered = answersEvaluation.length || 1; // avoid /0
  const correctAnswers = answersEvaluation.filter(
    (answer) => answer === "Correct"
  ).length;

  const correctPercentage = Math.round((correctAnswers / totalAnswered) * 100);
  const inCorrectPercentage = 100 - correctPercentage;

  return (
    <div className="flex items-center justify-center mt-10 px-4">
      <div className="w-full max-w-2xl lg:max-w-3xl p-6 sm:p-8 rounded-xl shadow-lg bg-violet-300 text-center">
        {/* Trophy */}
        <div className="mx-auto mb-4 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-black bg-violet-200">
          <img
            src={trophyImg}
            alt="Trophy image"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl text-purple-800 font-bold uppercase tracking-wider mb-6">
          Quiz completed!
        </h2>

        {/* Stats */}
        <div
          className="results-stats w-full sm:w-10/12 mx-auto
                     flex flex-col sm:flex-row items-center justify-center 
                     gap-3 sm:gap-8 pb-3 mb-6 
                     border-b-2 border-purple-400"
        >
          <p className="text-center text-sm sm:text-base">
            <span className="percentage text-xl sm:text-2xl font-bold">
              {correctPercentage}%
            </span>
            <span className="text"> Answered Correctly</span>
          </p>

          <p className="text-center text-sm sm:text-base">
            <span className="percentage text-xl sm:text-2xl font-bold">
              {inCorrectPercentage}%
            </span>
            <span className="text"> Answered Incorrectly</span>
          </p>
        </div>

        {/* Questions list */}
        <ul className="space-y-5 sm:space-y-6">
          {QUESTIONS.map((question, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center px-2"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 mb-2 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                {index + 1}
              </span>

              <span className="text-purple-900 font-medium mb-1 text-sm sm:text-base">
                {question.text}
              </span>

              <span className="text-purple-900 text-sm sm:text-base">
                Your answer:
                <span className="font-bold"> {userAnswers[index]}</span>
              </span>

              <span
                className={`mt-1 text-sm sm:text-base font-bold ${
                  answersEvaluation[index] === "Correct"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {answersEvaluation[index]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}