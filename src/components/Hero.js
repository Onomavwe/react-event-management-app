import React from 'react'
import { Link } from "react-router-dom";
import bgImg from '../assets/dashboard-bg.jpg'

export default function Hero(props) {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-centre md:items-start w-full px-2 py-8">
          <p className="text-2xl">Organise Tasks and Schedules</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Event Management</h1>
          <p className="text-2xl">This is your home secretary</p>
          <button className="px-6 py-3 sm:w-[60%] my-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
            <Link className="Link" to="/signup" smooth={true} duration={500}>
              Get Started
            </Link>
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
}
