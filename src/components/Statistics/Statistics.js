import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics = useContext(TopicContext);
    return (
        <div className='sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto'>        
            <h1 className='text-3xl font-semibold text-center my-14'>Total Quiz Analysis</h1>
            <ResponsiveContainer width="100%" height={400}>
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
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;