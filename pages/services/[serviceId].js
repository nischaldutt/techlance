import Head from "next/head";
import Image from "next/image";

import { Carousal } from "../../components";

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Service name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border border-black flex justify-between w-3/5 mx-auto mt-8">
        <div className="border border-black">
          <Carousal />
        </div>
        <div className="border border-black w-[30%]">
          <div className="border border-black">Contact & Business Hours</div>
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
