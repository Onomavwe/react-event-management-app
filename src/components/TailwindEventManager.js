import React from 'react'
import { Link } from "react-router-dom";
import bgImg from "../assets/diamonds-bg.jpg";

export default function TailwindEventManager() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-centre md:items-start w-full px-2 py-8">
          <p className="text-2xl">Organise Tasks and Schedules</p>
          <h1 className="py-3 text-3xl md:text-5xl my-8">Set a Reminder</h1>
          <p className="text-2xl">Your Tasks and Ocassions will appear here</p>
          <button className="px-6 py-3 my-8 sm:w-[60%] my-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
            <Link className="Link" to="/manage_tasks" smooth={true} duration={500}>
              Manage Your Tasks
            </Link>
          </button>
        </div>
        <div>
          <img className="w-full mb-32" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
}
