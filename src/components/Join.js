import React from 'react'
import { Link } from "react-router-dom";
import { UserGroupIcon } from "@heroicons/react/outline";
import bgImg from "../assets/pyramid-bg.jpg";

export default function Join(props) {
  return (
    <div className="w-full h-screen flex flex-col justify-between my-16">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div className="flex flex-col justify-centre md:items-start w-full px-2 py-8">
          <p className="text-2xl">Create Your Group</p>
          <h1 className="py-12 text-3xl md:text-5xl ">View Your Groups</h1>
          <p className="text-2xl py-8">Modify your groups and add members</p>
          <button className="px-6 py-3 sm:w-[60%] my-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
            <Link className="Link" to="/update_groups" smooth={true} duration={500}>
              Update Your Group
            </Link>
          </button>
        </div>
      </div>

      <div className="grid grid-col-2 mx-8 my-16 lg:grid-col-3 relative gap-x-8 gap-y-2 px-4 pt-8 sm:pt-20 text-black">
        <div className="grid md:grid-cols-2 ">
          <UserGroupIcon className="p-4 w-16 bg-blue-500 text-white rounded-lg" />
          <h2 className="text">Events</h2>

          <p>Create a Group</p>

          <p>Delete a Group</p>

          <p className="mb-16">Add Member to Your Group</p>
        </div>
      </div>
    </div>
  );
}
