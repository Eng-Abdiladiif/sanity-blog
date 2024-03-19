"use client"

import React, { useState } from "react";
import logo from "../../public/image/codes.png";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./MoonToogle";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";

function Navbar() {

  const [open , setOpen]   = useState("")
  return (
    <div className="max-w-5xl  mx-auto mt-5 p-4">
      <div className="flex justify-between items-center ">
        {/* main */}
        {/* logo */}
        <div>
          <Image src={logo} width={0} height={0} alt="image" />
        </div>

        <div  className="cursor-pointer z-50 md:hidden" 
        onClick={() => setOpen(!open)}>

          {
            open  ?
            <HiMenuAlt2 className="text-xl"/>  :
            <HiMenuAlt3 className="text-xl"/>
          }


        </div>
        {/* desktop */}
        <div className="space-x-5  hidden md:flex items-center">
          <Link
            className="text-md font-bold font-DM hover:border-b-2 hover:border-purple-800 rounded-xl py-2 transition-all duration-500"
            href="/"
          >
            Blogs
          </Link>
          <Link
            className="text-md font-bold font-DM hover:border-b-2 hover:border-purple-800 rounded-xl py-2 transition-all duration-500"
            href="/About"
          >
            About
          </Link>
          <Link
            className="text-md font-bold font-DM hover:border-b-2 hover:border-purple-800 rounded-xl py-2 transition-all duration-500"
            href="/Contect"
          >
            Contect
          </Link>
          <div className="px-10">
            <ModeToggle />
          </div>
        </div>
        {/* mobile */}
        <div
          className={`absolute flex flex-col  justify-center items-center
right-0 w-32 h-screen bg-gray-900/25 top-0 space-y-10 bg-dark-gray-900 rounded-tl-[100px]
md:hidden ${open ? "flex" :"hidden"}`}
        >
          <Link
            className="text-md font-bold font-DM hover:border-b-2 hover:border-purple-800 rounded-xl py-2 transition-all duration-500"
            href="/"
          >
            Blogs
          </Link>
          <Link
            className="text-md font-bold font-DM hover:border-b-2 hover:border-purple-800 rounded-xl py-2 transition-all duration-500"
            href="/About"
          >
            About
          </Link>
          <Link
            className="text-md font-bold font-DM hover:border-b-2 hover:border-purple-800 rounded-xl py-2 transition-all duration-500"
            href="/Contect"
          >
            Contect
          </Link>
          <ModeToggle />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
