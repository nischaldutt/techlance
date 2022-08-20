import Link from "next/link";
import { useState } from "react";

export default function Navbar({ headers }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex w-full items-center flex-wrap bg-transparent p-3 fixed z-10">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <span className="font-['Bebas_Neue'] text-5xl text-white font-bold uppercase tracking-wide">
              Techlance
            </span>
          </a>
        </Link>

        <button
          className="inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="w-full flex flex-col items-start lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link href="/">
              <a className="w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 lg:inline-flex lg:w-auto">
                Log In / Sign Up
              </a>
            </Link>

            <Link href="/">
              <a className="w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 lg:inline-flex lg:w-auto">
                India
              </a>
            </Link>

            <Link href="/">
              <a className="w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 lg:inline-flex lg:w-auto">
                For Business
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
