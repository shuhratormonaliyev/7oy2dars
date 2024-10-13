import React from 'react';

const MainContent = () => {
  return (
    <div className="p-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Keep track of your loved ones in real time!
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
        We noticed the high level of insecurity in the world, and we thought of
        how technology could be used to combat these insecurities.
      </p>
      <div className="mt-8 flex justify-center">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
          JOIN LIST!
        </button>
      </div>
    </div>
  );
};

export default MainContent;
