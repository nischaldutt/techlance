import React from "react";
import Head from "next/head";
import Image from "next/image";

import SignUpForm from "./SignUpForm";
import { Signin as SigninSvg } from "@/assets";

export default function SignUn() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center bg-[#FAFAFA] py-8">
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <SigninSvg className="w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw]" />
        </div>

        <div className="">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
