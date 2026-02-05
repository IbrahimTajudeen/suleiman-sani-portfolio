"use client";

import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
// return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//             <h1 className="font-semibold">Suleiman Sani</h1>
            // <nav className="flex gap-6 text-sm">
            //     {['Home','About','Work','Skills','Contact'].map((item) => (
            //         <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">
            //             {item}
            //         </a>
            //     ))}
            // </nav>
//         </div>
//     </header>
//     )

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 border-b-2 border-[#e5e7eb] backdrop-blur-[2px]">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Suleiman Sani
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-gray-600 font-medium">
            {['Home','About','Work','Skills','Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition text-[20px]">
                    {item}
                </Link>
            ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-white  absolute">
          <div className="flex flex-col space-y-4 text-gray-700 font-medium">
            {['Home','About','Work','Skills','Contact'].map((item) => (
                <Link 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setOpen(false)}
                    className="hover:text-black hover:bg-[#f0f2f4] transition p-3 text-[14px]">
                    {item}
                </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );

}