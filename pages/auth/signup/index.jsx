import Head from "next/head";

import SignUpForm from "@/pages/auth/signup/SignUpForm";

export default function SignUn() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-center mt-10">
        <SignUpForm />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
