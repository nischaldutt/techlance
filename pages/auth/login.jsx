import Head from "next/head";

import { getUser } from "@/services";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";
import { ClientLoginForm } from "@/components";

export async function getServerSideProps({ req }) {
  const user = await getUser(req?.cookies?.token);

  if (user?.user_type === APP_CONSTANTS.USER_TYPE.CUSTOMER) {
    return {
      redirect: {
        destination: URL_CONSTANTS.ROUTES.HOME,
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login({ redirectMsg }) {
  console.log({ redirectMsg });

  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex justify-center mt-10">
        <ClientLoginForm />
      </section>
    </>
  );
}
