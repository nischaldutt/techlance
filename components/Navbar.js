import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { MdAccountCircle } from "react-icons/md";
import { BiSearchAlt, BiArrowBack } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

const services = [
  "Hair Salon",
  "Barbershop",
  "Nail Salon",
  "Skin Care",
  "Eyebrows & Lashes",
  "Massage",
  "Makeup Artist",
  "Day Spa",
  "More...",
];

const ModalMenu = ({ showModalMenu, onClose }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full p-10 z-[100] h-screen bg-primary-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        showModalMenu
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full"
      }`}
    >
      <button className="absolute" onClick={onClose}>
        <BiArrowBack size="24" />
      </button>

      <ul className="list-none w-full flex flex-col items-start mt-8">
        {services.map((service) => {
          return (
            <Link href="/services/hair-salon" key={service}>
              <li
                className="text-xl font-bold py-2 cursor-pointer"
                onClick={onClose}
              >
                {service}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);
  const [showModalMenu, setShowModalMenu] = React.useState(false);

  React.useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      if (active) {
        setActive(!active);
      }
    });
  }, [router.events, active]);

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
    <nav>
      <div
        className={`flex w-full justify-center items-center flex-wrap ${
          isScrolled || !isHome || active ? "bg-primary-500" : "bg-transparent"
        } transition-colors ease-out duration-500 p-3 ${
          isHome ? "fixed" : ""
        } z-[100]`}
      >
        <Link href="/">
          <a className=" inline-flex items-center p-2 mr-4 animate-pulse">
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
            active ? "h-40 lg:h-auto" : "h-0"
          } w-full lg:inline-flex lg:items-center lg:flex-grow lg:w-auto transition-all duration-500 ease-in-out`}
        >
          <div className="flex-grow">
            <div
              className={`hidden border border-gray-400 w-[30vw] rounded-lg text-gray-300 ${
                isScrolled || !isHome ? "lg:grid" : "hidden"
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

          <div
            className={`${
              active ? "" : "hidden"
            } bg-gray-100 rounded-lg w-full flex flex-col items-start lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto`}
          >
            <Link href="/signin">
              <a
                className="border-2 w-full px-3 py-2 rounded text-primary-100 text-sm font-bold flex items-center lg:inline-flex lg:w-auto"
                onClick={handleClick}
              >
                {/* <MdAccountCircle size="20" /> */}
                <span className="">Log In / Sign Up</span>
              </a>
            </Link>

            <Link href="/">
              <a
                className="border-2 w-full px-3 py-2 rounded text-primary-100 text-sm font-bold flex items-center lg:inline-flex lg:w-auto"
                onClick={handleClick}
              >
                India
              </a>
            </Link>

            <Link href="/">
              <a
                className="border-2 w-full px-3 py-2 rounded text-primary-100 text-sm font-bold flex items-center lg:inline-flex lg:w-auto"
                onClick={handleClick}
              >
                For Business
              </a>
            </Link>

            <a
              className="border-2 w-full px-3 py-2 rounded text-primary-100 text-sm font-bold flex items-center lg:inline-flex lg:w-auto"
              onClick={() => setShowModalMenu(true)}
            >
              Services
            </a>
            <ModalMenu
              showModalMenu={showModalMenu}
              onClose={() => {
                handleClick();
                setShowModalMenu(false);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          isHome ? "hidden" : "lg:flex"
        } bg-primary-500 pb-6 hidden justify-center`}
      >
        <ui className="list-none flex lg:w-full xl:w-4/5 2xl:w-3/5 justify-between">
          {services.map((service) => {
            return (
              <Link key={service} href="/services/hair-salon/salon1">
                <li className="text-white text-sm block px-2 cursor-pointer">
                  {service}
                </li>
              </Link>
            );
          })}
        </ui>
      </div>
    </nav>
  );
}
