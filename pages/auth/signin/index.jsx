import React from "react";
import Head from "next/head";
import Image from "next/image";

import { SignInForm } from "./SignInForm";
import { Signin as SignInSvg } from "@/assets";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center bg-[#FAFAFA] py-8">
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <SignInSvg className="w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw]" />
        </div>

        <div className="">
          <SignInForm />
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
