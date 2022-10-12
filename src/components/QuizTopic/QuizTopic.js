import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const QuizTopic = ({topic}) => {
    const {id,name, logo, total} = topic;
    return (
        <div className=" bg-white rounded shadow-sm md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t bg-zinc-300"
              src={logo}
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              {name}
            </h5>
            <p className="mb-5 text-gray-800 font-semibold">
              Total Quiz: {total}
            </p>
            <Link to={`/quiz/${id}`}>
            <button
              type="submit"
              className="inline-flex items-center justify-center py-3 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none"
            >
              <span>Start Practice</span> 
              <ArrowRightIcon className="h-6 w-6"/>
            </button>
            </Link>
          </div>
        </div>
    );
};

export default QuizTopic;