import React from "react";
import Head from "next/head";

import { BusinessHero, BusinessFeatures, Contact, Footer } from "@/components";

export default function Business() {
  return (
    <>
      <Head>
        <title>TechLance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BusinessHero />
        <BusinessFeatures />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
