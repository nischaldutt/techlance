import React from "react";
import Typewriter from "typewriter-effect";

export default function CustomTypewriter() {
  return (
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
  );
}
