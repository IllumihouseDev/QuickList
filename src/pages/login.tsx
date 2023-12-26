import React from 'react';
import '/styles.css';

const  Login: React.FC = () => {
  return (
    <div>
       {/* Content specific to the home page */}
       <div>
        <h1>Welcome to QuickLists</h1>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-grey p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">QuickLists Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Enter Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Enter Password
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Login;