"use client"
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


function Navbar() {
    const [nav, setNav] = useState(true)
    return <div className="flex justify-between  md:px-16 px-4 items-center py-4 shadow-xl bg-white sticky top-0 z-10">

        <div className="z-10">
            <h1 className="hover:bg-gray-200 font-bold md:font-normal font-mono">Gourmet Catering</h1>
        </div>

        <div className="space-x-10 font-mono hidden md:inline-block">
            <Link href={"#homepage"} target="_parent" className="hover:bg-gray-200">Home</Link>
            <Link href={"#aboutpage"} target="_parent" className="hover:bg-gray-200">About</Link>
            <Link href={"#menupage"} target="_parent" className="hover:bg-gray-200">Menu</Link>
        </div>

        {/* Hamburger button */}
        <div className="md:hidden text-xl z-10" onClick={() => { setNav(!nav) }}>
            {nav ? <GiHamburgerMenu /> : <ImCross />}
        </div>

        {/* overlay */}
        {!nav ? <div className="fixed top-0 left-0 flex items-center md:hidden justify-center flex-col w-full bg-white h-[50%] text-xl leading-10 font-mono">
            <Link href={"#homepage"} target="_parent" className="hover:bg-gray-200">Home</Link>
            <Link href={"#aboutpage"} target="_parent" className="hover:bg-gray-200">About</Link>
            <Link href={"#menupage"} target="_parent" className="hover:bg-gray-200">Menu</Link>
        </div> : null}
    </div>
}

export default Navbar;