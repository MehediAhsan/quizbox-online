import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const loaderData = useLoaderData();
    const topic = loaderData.data;
    console.log(topic);
    const {name, questions} = topic;
    return (
        <div className='mb-20'>
            <h1 className='text-2xl font-bold text-center my-20'>Quiz of {name}</h1>
            {
                questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;