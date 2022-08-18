import React from 'react'
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/solid";
import bgImg from "../assets/dashboard-bg.jpg";

export default function Show(props) {
  return (
    <div className="w-full h-screen flex flex-col justify-between my-16">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div className="flex flex-col justify-centre md:items-start w-full px-2 py-8">
          <p className="text-2xl">Organise Your Events</p>
          <h1 className="py-12 text-3xl md:text-5xl ">Event Management</h1>
          <p className="text-2xl py-8">Modify your events and see progress</p>
          <button className="px-6 py-3 sm:w-[60%] my-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
            <Link className="Link" to="/update_events" smooth={true} duration={500}>
              Update Event
            </Link>
          </button>
        </div>
      </div>

      <div className="grid grid-col-2 mx-8 my-16 lg:grid-col-3 relative gap-x-8 gap-y-2 px-4 pt-8 sm:pt-20 text-black">
        <div className="grid md:grid-cols-2 ">
          <CalendarIcon className="p-4 w-16 bg-blue-500 text-white rounded-lg" />
          <h2 className="text">Events</h2>

          <p>Create an Event</p>

          <p>Delete an Event</p>

          <p className="mb-16">Create/Manage a Task</p>
        </div>
      </div>
    </div>
  );
}
