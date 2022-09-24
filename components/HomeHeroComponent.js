import Link from "next/link";
import Typewriter from "typewriter-effect";
import { BiSearchAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

export default function HomeHeroComponent() {
  return (
    <div className="relative h-[30rem] flex justify-center mb-8">
      <div className="w-full absolute top-0 left-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full object-cover h-[32rem] brightness-[0.75]"
        >
          <source
            src="https://booksy-public.s3.amazonaws.com/horizontal_.webm"
            type="video/webm"
          />
          <source
            src="https://booksy-public.s3.amazonaws.com/US.mp4"
            type="video/mp4"
          />
          Your browser does not supports HTML5 video.
        </video>
      </div>

      <div className="z-20 absolute w-full sm:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="sm:py-2 text-white text-2xl sm:text-4xl text-center font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Be free")
                .pauseFor(1000)
                .deleteChars(4)

                .typeString("brave")
                .pauseFor(1000)
                .deleteChars(5)

                .typeString("bold")
                .pauseFor(1000)
                .deleteChars(4)

                .typeString("yourself")
                .pauseFor(1000)
                .deleteChars(8)

                .typeString("confident")
                .pauseFor(1000)
                .deleteChars(9)

                .typeString("colorful")
                .pauseFor(1000)
                .deleteChars(8)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="py-2 text-white text-center sm:text-xl">
          Discover and book beauty & wellness professionals near you
        </div>

        <div className="m-4 sm:w-[36rem] md:w-[45rem] p-2 sm:p-4 text-[10px] sm:text-xs text-gray-500 font-bold bg-white rounded-lg grid grid-cols-2 border border-gray cursor-pointer">
          <div
            className="inline-flex items-center"
            onClick={() => console.log("hi")}
          >
            <BiSearchAlt size="20" />
            <div className="ml-2">Book your services...</div>
          </div>

          <div className="border-l pl-2 inline-flex items-center">
            <GoLocation size="20" />
            <div className="ml-2">India</div>
          </div>
        </div>
      </div>
    </div>
  );
}
