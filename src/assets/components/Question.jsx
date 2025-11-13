import QUESTIONS from '../../questions.js';
import Answers from './Answers.jsx';

export default function Question({ index, handleUserAnswer }) {

    return (
        <div>
            <h1 className='text-sky-700 text-2xl mb-8'>{QUESTIONS[index].text}</h1>
            <Answers 
                key={index} 
                answers={QUESTIONS[index].answers}
                handleUserAnswer={handleUserAnswer}
            />
        </div>
    )
}