import { useState } from 'react';
import Question from './Question.jsx';
import Results from './Results.jsx';
import QUESTIONS from '../questions.js';

export default function GameScreen() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;
    const isGameFinished = userAnswers.length === QUESTIONS.length;
    const questionsAnswered = `${activeQuestionIndex + 1}/${QUESTIONS.length}`; 

    function handleUserAnswer(answer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, answer];
        });
    }

    if (isGameFinished) {
        return <Results userAnswers={userAnswers} />
    }

    return (
        <div className="flex items-center justify-center mt-16">
            <div className="bg-linear-to-b from-sky-50 via-sky-100 to-sky-200 rounded-2xl p-8 shadow-lg w-11/12 max-w-xl">
                <p className="w-full sm:w-10/12 mx-auto text-purple-400
                            pb-3 mb-6 border-b-2 border-purple-400 font-bold text-xl">
                        {questionsAnswered}
                </p>
                <Question
                    index={activeQuestionIndex} 
                    handleUserAnswer={handleUserAnswer}
                />
            </div>
        </div>
       
    )
}