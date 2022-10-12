import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-accent mt-20 mb-10'>React Router Q/A</h1>
            <div className="grid grid-cols-1 w-11/12 md:w-9/12 mx-auto">
                <div className="p-10">
                    <h3 className="text-2xl font-semibold mb-4">What is the purpose of react router?</h3>
                    <p className="text-gray-500 text-lg ml-8">React Router is one of the most popular routing frameworks for React. The library is designed with intuitive components to let you build a declarative routing system for your application. This means that you can declare exactly which of your components has a certain route. With declarative routing, you can create intuitive routes that are human-readable, making it easier to manage your application architecture.In React, routers help create and navigate between the different URLs that make up your web application. They allow your user to move between the components of your app while preserving user state, and can provide unique URLs for these components to make them more shareable. With routers, you can improve your app’s user experience by simplifying site navigation.</p>
                </div>
                <div className="p-10">
                    <h3 className="text-2xl font-semibold mb-4">How does context API works?</h3>
                    <p className="text-gray-500 text-lg ml-8">React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.Context is designed to share data that can be considered “global” for a tree of React Components.There are four steps to using React context:(1)Create context using the createContext method, (2)Take your created context and wrap the context provider around your component tree, (3)Put any value you like on your context provider using the value prop, (4)Read that value within any component by using the context consumer.</p>
                </div>
                <div className="p-10">
                    <h3 className="text-2xl font-semibold mb-4">Uses of useRef</h3>
                    <p className="text-gray-500 text-lg ml-8"> The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.  </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;