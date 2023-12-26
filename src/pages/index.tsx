import React from "react";
import "/styles.css";
import Image from "next/image";

import {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from "../../configurations";

// Use API_KEY and DATABASE_URL in your application
console.log(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD);

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/*Logon will be placed here */}
      <div>
        <div className="text-center">
        <Image src="/Images/QLLogo.png" alt="QL Logo" width={200} height={100} />
        <h1 className="text-4xl font-bold mb-4" >Welcome to QuickLists</h1>
      {/*Sign-up form below */}
      </div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-grey p-8 rounded-md shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Sign up</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Enter your Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Enter your email
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Create Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Create Password
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

export default SignUp;
