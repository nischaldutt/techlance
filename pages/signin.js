import Head from "next/head";
import Image from "next/image";

import SigninForm from "../components/SigninForm";

export default function Signin() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border border-black flex justify-center">
        <div className="border">
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
