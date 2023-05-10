import React from "react";
import Head from "next/head";

import LoginForm from "@/pages/auth/login/LoginForm";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-center mt-10">
        <LoginForm />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
