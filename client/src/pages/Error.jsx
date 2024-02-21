import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-sky-200">
      <div className="content text-center p-8">
        <h2 className="header text-[18vw] leading-tight font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent">404</h2>
        <h4 className="text-5xl font-bold text-gray-700 mb-6">Sorry! Page not found</h4>
        <p className="text-gray-600 text-2xl mb-6">
          Oops! It seems like the page you're trying to access doesn't exist.
          If you believe there's an issue, feel free to report it, and we'll
          look into it.
        </p>
        <div className="btns">
          <NavLink
            to="/"
            className="inline-block px-6 py-3 mr-4 text-white bg-blue-500 border border-blue-600 rounded-full uppercase text-xl font-semibold hover:bg-blue-600 transition duration-300"
          >
            Return Home
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-block px-6 py-3 text-blue-500 border border-blue-500 rounded-full uppercase text-xl font-semibold hover:bg-blue-100 transition duration-300"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
