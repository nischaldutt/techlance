import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  BusinessUserDropdown,
  BusinessNotificationDropdown,
} from "@/components";

import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTable,
} from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMapPin, FiSettings } from "react-icons/fi";
import { MdFingerprint } from "react-icons/md";
import { TiClipboard } from "react-icons/ti";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-4 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars size={18} />
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              TECHLANCE
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <BusinessNotificationDropdown />
            </li>
            <li className="inline-block relative">
              <BusinessUserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      TECHLANCE
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/business/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold flex gap-2 " +
                      (router.pathname.indexOf("/business/admin/dashboard") !==
                      -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  >
                    <AiOutlineFundProjectionScreen size={18} />
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/business/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold flex gap-2 " +
                      (router.pathname.indexOf("/business/admin/settings") !==
                      -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  >
                    <FiSettings size={18} />
                    Settings
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/business/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold flex gap-2 " +
                      (router.pathname.indexOf("/business/admin/tables") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  >
                    <AiOutlineTable size={18} />
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/business/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold flex gap-2 " +
                      (router.pathname.indexOf("/business/admin/maps") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  >
                    <FiMapPin size={18} />
                    Maps
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex gap-2"
                  >
                    <MdFingerprint size={18} />
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex gap-2"
                  >
                    <TiClipboard size={18} />
                    Register
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex gap-2"
                  >
                    <AiOutlineFundProjectionScreen size={18} />
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex gap-2"
                  >
                    <AiOutlineUser size={18} />
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
