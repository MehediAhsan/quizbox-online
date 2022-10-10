import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Main';
import Banner from '../Banner/Banner';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const topics = useContext(TopicContext)
    console.log(topics);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-20 px-20">
                {
                    topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;