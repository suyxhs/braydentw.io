import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="flex items-center text-lg font-bold list-none cursor-pointer">
        <Link href="/">
          <span className="flex items-center text-xl font-black">
            
            {"ВелоЛидер".split("").map((letter, index) => {
              return (
                <span key={index} className="transition-all duration-500 hover:text-fun-pink hover:-mt-2 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
     
    </nav>
  );
}

export default Navbar;
