import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const topics = useContext(TopicContext);
    console.log(topics);
    return (
        <div>        
            <h1 className='text-2xl font-bold text-center my-10'>Total Quiz</h1>
            <BarChart
            style={{ margin: "0 auto" }}
            width={600}
            height={400}
            data={topics}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statistics;