import Head from "next/head";
import Image from "next/image";

import { Carousal, Accordion } from "../../components";

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

          <div className="text-gray-800">
            <div className="text-3xl font-bold text-gray-800">
              Yoko @ Dapper Cuts
            </div>
            <div className="text-xs">2267 Main st, Fort Myers, 33901</div>
          </div>

          <div className="text-gray-800">
            <div className="text-2xl font-bold text-gray-800">Services</div>
            <div className="text-xs">
              <Accordion />
            </div>
          </div>
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
