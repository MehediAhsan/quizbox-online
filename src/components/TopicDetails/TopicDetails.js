import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const loaderData = useLoaderData();
    const topic = loaderData.data;
    console.log(topic);
    const {name, questions, total} = topic;
    return (
        <div className='mb-20'>
            <div className='my-20'>
                <h1 className='text-3xl font-semibold text-center'>Quiz of <span className='text-purple-700'>{name}</span></h1>
                <h3 className='text-xl font-semibold text-center mt-3 text-gray-900'>Total Questions: {total}</h3>
            </div>
            {
                questions.map((quiz,idx) => <Quiz key={quiz.id} quiz={quiz} idx={idx}></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;