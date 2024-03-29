import React from "react";

import CustomTypewriter from "@/components/client/Hero/Typewriter";
import SearchSelect from "@/components/client/Hero/SearchSelect";

export default function ClientHero() {
  return (
    <>
      <div className="select-none relative h-[30rem] flex justify-center mb-8">
        <div className="w-full absolute top-0 left-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full object-cover h-[32rem] brightness-[0.75]"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-woman-with-blue-nails-typing-on-a-laptop-805/1080p.mp4"
              type="video/mp4"
            />
            Your browser does not supports HTML5 video.
          </video>
        </div>

        <div className="z-20 absolute w-full sm:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="sm:py-2 text-white text-2xl sm:text-4xl text-center font-bold">
            <CustomTypewriter />
          </div>

          <div className="py-2 text-white text-center sm:text-xl">
            Discover and book beauty & wellness professionals near you
          </div>

          <div className="m-4 sm:w-[36rem] md:w-[45rem] marker:font-bold bg-white rounded-lg">
            <SearchSelect />
          </div>

          {/* <Space className="py-2 w-full flex justify-center">
            <Button type="primary" size="large" onClick={getQuote}>
              <p className="font-bold">Get My Quote</p>
            </Button>
          </Space> */}
        </div>
      </div>
    </>
  );
}
