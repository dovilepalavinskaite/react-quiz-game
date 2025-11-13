import { useState } from 'react';
import Question from './Question.jsx';
import QUESTIONS from '../../questions.js'

export default function GameScreen() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;
    const isGameFinished = userAnswers.length === QUESTIONS.length;

    function handleUserAnswer(answer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, answer];
        });
    }

    if (isGameFinished) {
        return <h1>GAME OVER!</h1>
    }

    return (
        <div className="flex items-center justify-center mt-16">
            <div className="bg-linear-to-b from-sky-50 via-sky-100 to-sky-200 rounded-2xl p-8 shadow-lg w-11/12 max-w-xl">
                <Question
                    index={activeQuestionIndex} 
                    handleUserAnswer={handleUserAnswer}
                />
            </div>
        </div>
       
    )
}