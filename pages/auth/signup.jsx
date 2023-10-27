import Head from "next/head";

import { ClientSignUpForm } from "@/components";

export default function SignUn() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-center mt-10">
        <ClientSignUpForm />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
