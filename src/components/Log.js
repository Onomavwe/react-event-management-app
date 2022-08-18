import React from 'react'
import { Link } from "react-router-dom";

export default function Log(props) {
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-40 sm:mt-20">
        <div className="w-full max-w-lg">
          <form action="" className="shadow-md bg-white rounded px-12 pt-16 pb-16 mb-4">
            <div className="mb-6">
              <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Log in
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" href="./Home">
                Forgot Password
              </a>
            </div>
            <div className="inline-block align-baseline mt-6">
              <div className="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-blue-600  pr-4">First time here?</div>
              <button className="text-blue-400 hover:text-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link className="Link" to="/signup" smooth={true} duration={500}>
                  Signup
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
