import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

export const TopicContext = createContext([])

const Main = () => {
    const loaderData = useLoaderData();
    const topics = loaderData.data;

    return (
        <TopicContext.Provider value={topics}>
            <Header></Header>
            <Outlet></Outlet>
        </TopicContext.Provider>
    );
};

export default Main;