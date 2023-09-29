import Head from "next/head";

import { BusinessSignUpForm } from "@/components";

export default function BusinessSignUn() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-center mt-10">
        <BusinessSignUpForm />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
