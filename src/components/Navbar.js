import React, { useState } from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 foxed drop-shadow-lg">
      <div className="px-20 flex justify-between items-centre w-full h-full">
        <logo className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HOMESECRETARY.</h1>
        </logo>
        <ul className="hidden md:flex pt-3">
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className="Link" to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className="Link" to="/groups" smooth={true} duration={500}>
              Groups
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className="Link" to="/events" smooth={true} duration={500}>
              Events
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className="Link" to="/manage" smooth={true} duration={500}>
              Manage
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black font-bold mr-4 hover:bg-color-none hover:text-blue-700">
            <Link className="Link" to="/login" smooth={true} duration={500}>
              Login
            </Link>
          </button>
          <button className="py-8 px-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
            <Link className="Link" to="/signup" smooth={true} duration={500}>
              Signup
            </Link>
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5 pt-7" /> : <XIcon className="w-5 pt-7" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} className="Link" to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} className="Link" to="groups" smooth={true} duration={500}>
            Groups
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} className="Link" to="events" smooth={true} duration={500}>
            Events
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} className="Link" to="manage" smooth={true} duration={500}>
            Manage
          </Link>
        </li>
        <div className='flex flex-col my-4'>
          <button className="px-8 py-3 mb-4 bg-zinc-300 text-blue-500 border-blue-500 rounded-md font-bold hover:text-blue-700 hover:bg-transparent">
            <Link className="Link" to="/login" smooth={true} duration={500}>
              Login
            </Link>
          </button>
          <button className="px-6 py-3 my-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
            <Link className="Link" to="/signup" smooth={true} duration={500}>
              Signup
            </Link>
          </button>
        </div>
      </ul>
    </div>
  );
}
