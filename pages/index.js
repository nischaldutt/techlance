import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>TechLance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
