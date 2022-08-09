import React, { useState } from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 foxed drop-shadow-lg">
      <div className="px-20 flex justify-between items-centre w-full h-full">
        <logo className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HOMESECRETARY.</h1>
        </logo> 
        <ul className="hidden md:flex pt-3">
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className='Link' to="/" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className='Link' to="/groups" smooth={true} duration={500}>Groups</Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className='Link' to="/events" smooth={true} duration={500}>Events</Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link className='Link' to="/manage" smooth={true} duration={500}>Manage</Link>
          </li>  
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5 pt-7" /> : <XIcon className="w-5 pt-7" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">Groups</li>
        <li className="border-b-2 border-zinc-300 w-full">Events</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
      </ul>

    </div>
  );
}
