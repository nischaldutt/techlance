import React from "react";
import Image from "next/image";

import { HiLocationMarker } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-col justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute -top-14">
                  <Image
                    src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                    alt=""
                    objectFit="cover"
                    className="shadow-xl rounded-full"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 text-center">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 flex flex-col items-center">
            <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase flex gap-2">
              <HiLocationMarker size={18} />
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10 flex gap-2">
              <GiSchoolBag size={18} />
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600 flex gap-2">
              <FaUniversity size={18} />
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
