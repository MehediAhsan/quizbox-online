import React from 'react';

const Quiz = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    return (
        <div className='w-max-xs lg:w-6/12 mx-auto mt-10 shadow-lg p-5'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-xl font-semibold'>Quiz: {question}</h1>
                <button>eye</button>
            </div>
            <div>
                
                {
                    options.map((option,idx) => 
                        <label key={idx} className="flex items-center space-x-3 mb-3 p-3 hover:bg-gray-100 border-gray-300 border ml-8">
                        <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"/>
                        <span>
                            {option}
                        </span>
                        </label>
                     )
                }
                                
            </div>
        </div>
    );
};

export default Quiz;