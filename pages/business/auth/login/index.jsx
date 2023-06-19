import Head from "next/head";

import BusinessLoginForm from "@/pages/business/auth/login/BusinessLoginForm";
import { URL_CONSTANTS } from "@/constants";

export async function getServerSideProps({ req }) {
  const response = await getUser(req?.cookies?.token);

  if (!response?.id) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: URL_CONSTANTS.ROUTES.HOME,
      permanent: true,
    },
  };
}

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
