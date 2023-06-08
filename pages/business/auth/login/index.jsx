import Head from "next/head";

import BusinessLoginForm from "@/pages/business/auth/login/BusinessLoginForm";

export default function BusinessLogin() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-center mt-10">
        <BusinessLoginForm />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
