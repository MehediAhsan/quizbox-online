import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({quiz,idx}) => {
    const {question, options, correctAnswer} = quiz;

    const handleOptionData = (option) => {
        if(option === correctAnswer){
            toast.success('Your answer is correct', { autoClose: 1000 })
        }
        else{
            toast.warning('Your answer is wrong', { autoClose: 1000 })
        }
    }

    const handleCorrectAnswer = () => {
        toast.info(`Correct answer is : ${correctAnswer}`, { autoClose: 5000 })
    }

    return (
        <div className='w-max-xs lg:w-6/12 mx-auto mt-10 shadow-lg p-5'>
            <div className='flex items-baseline justify-between mb-5'>
                <h1 className='text-xl font-semibold'>Quiz {idx+1}: {question}</h1>
                <button onClick={handleCorrectAnswer}><EyeIcon className="h-6 w-6"/></button>
            </div>
            <div>
                
                {
                    options.map((option,idx) => 
                        <button onClick={() => handleOptionData(option)} key={idx} className="flex items-center space-x-3 mb-3 p-3 hover:bg-gray-100 border-gray-300 border ml-8 w-11/12">
                        <input type="radio" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"/>
                        <span>
                            {option}
                        </span>
                        </button>
                     )
                }
                                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;