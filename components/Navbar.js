import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { MdAccountCircle } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

export default function Navbar({ headers }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);

  React.useEffect(() => {
    router.pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [router.pathname]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    window.scrollY <= 420 ? setIsScrolled(false) : setIsScrolled(true);
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className={`flex w-full items-center flex-wrap ${
          isScrolled || !isHome ? "bg-black" : "bg-transparent"
        } transition-colors ease-out duration-500 p-3 ${
          isHome ? "fixed" : ""
        } z-10`}
      >
        <section>
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 animate-pulse">
              <span className="font-['Bebas_Neue'] text-3xl sm:text-5xl text-white font-bold uppercase tracking-wide">
                Techlance
              </span>
            </a>
          </Link>

          <button
            className="inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto outline-none"
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
            <div className="flex-grow">
              <div
                className={`hidden border border-gray-400 w-[30vw] rounded-lg text-gray-300 ${
                  isScrolled || !isHome ? "lg:grid" : ""
                } grid-cols-3 text-[11px] font-black mx-auto cursor-pointer`}
              >
                <div
                  className="border-r border-gray-400 p-3 inline-flex items-center gap-2"
                  onClick={() => {
                    console.log("handle1");
                  }}
                >
                  <BiSearchAlt size="14" />
                  Book a Service
                </div>
                <div
                  className="border-r border-gray-400 p-3 inline-flex items-center gap-2"
                  onClick={() => {
                    console.log("handle2");
                  }}
                >
                  <GoLocation size="14" />
                  India
                </div>
                <div
                  className="border-r border-gray-400 p-3 inline-flex items-center gap-2"
                  onClick={() => {
                    console.log("handle3");
                  }}
                >
                  <AiOutlineCalendar size="14" />
                  When?
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-start lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
              <Link href="/signin">
                <a className="w-full px-3 py-2 rounded text-white text-sm font-bold items-center justify-center lg:inline-flex lg:w-auto">
                  <MdAccountCircle size="25" />
                  <span className="ml-[10px]">Log In / Sign Up</span>
                </a>
              </Link>

              <Link href="/">
                <a className="w-full px-3 py-2 rounded text-white text-sm font-bold items-center justify-center lg:inline-flex lg:w-auto">
                  India
                </a>
              </Link>

              <Link href="/">
                <a className="w-full px-3 py-2 uppercase rounded text-black text-xs font-bold bg-white items-center justify-center lg:inline-flex lg:w-auto">
                  For Business
                </a>
              </Link>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
