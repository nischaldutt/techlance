import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { CardSlider, ServiceSearchCard, Footer } from "../../components";

export default function AvailableServices() {
  const router = useRouter();

  function bookServiceHandler(serviceId) {
    console.log({ serviceId });
    router.push(`/service_booking/${serviceId}`);
  }

  return (
    <>
      <Head>
        <title>Barber shop</title>
        <meta name="description" content="Search Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="py-8">
          <div className="pb-6 text-gray-700 text-2xl font-bold mx-auto w-[98vw] xs:w-[90vw] 2xl:w-3/5">
            Hair Salons near you in Noida, IN
          </div>
          <CardSlider />
        </div>

        <div className="py-2 mx-auto w-full md:w-[90%] xl:w-3/5">
          <hr />
        </div>

        <div className="mx-auto w-full md:w-[90%] lg:w-4/5 xl:w-3/5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((searchResult) => {
            return (
              <ServiceSearchCard
                key={searchResult}
                bookServiceHandler={bookServiceHandler}
              />
            );
          })}
        </div>
      </div>

      <Footer />
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
