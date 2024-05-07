import React from 'react';
import { Link } from 'react-router-dom';

const Auth = ({loginHandler}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md ring-2 ring-blue-500 ring-inset w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <Link to = "/main/users">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Sign In
        </button>
        </Link>
        <p className="mt-4">
          Don't have an account?{' '}
          <span className="text-blue-500 cursor-pointer">Sign up here</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
