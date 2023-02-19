import React from "react";
import Head from "next/head";
import Image from "next/image";

import { SigninForm } from "@/components";
import { Signin as SigninSvg } from "@/assets";

export default function Signin() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center bg-[#FAFAFA] py-8">
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <SigninSvg className="w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw]" />
        </div>

        <div className="">
          <SigninForm />
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
