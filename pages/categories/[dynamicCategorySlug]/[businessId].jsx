import Head from "next/head";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { AiFillCar } from "react-icons/ai";
import { Skeleton } from "antd";

import { useAverageBusinessRating } from "@/hooks";
import { getAverageBusinessRating } from "@/services/customerServices";
import { useAuthContext } from "@/contexts";
import { APP_CONSTANTS } from "@/constants";
import {
  ClientBusinessDetailsAboutSection,
  ClientBusinessDetailsContactInformation,
  ClientBusinessDetailsHealthSafetyRules,
  ClientBusinessDetailsSocialLinks,
  ClientAccordion,
  ClientCarousal,
  ClientGallery,
  ClientServiceNavHeader,
  ClientBusinessReviews,
  ClientStaticMap,
  Footer,
} from "@/components";

import { galleryImages } from "@/data";

export const getStaticPaths = async () => {
  // todo: fetch first 5 businesses and return businessIds in paths array

  return {
    paths: [
      {
        params: { dynamicCategorySlug: "hair-salon", businessId: "98" },
      },
    ],
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [
      APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.GET_AVERAGE_BUSINESS_RATING,
      params?.businessId,
    ],
    () => getAverageBusinessRating(params?.businessId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function ServicePage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthContext();
  const { businessId } = router.query;
  const averageRating = useAverageBusinessRating(businessId);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
      </>
    );
  }

  function bookServiceHandler(serviceId) {
    router.push(`/bookingRequest/${serviceId}`);
  }

  return (
    <>
      <Head>
        <title>Barber shop</title>
        <meta name="description" content="Service name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClientServiceNavHeader />

      <div className="flex flex-col items-center md:items-stretch md:flex-row lg:w-4/5 2xl:w-3/5 2xl:justify-between mx-auto my-8 ">
        <div className="px-2 2xl:px-0 w-[90%] sm:w-4/5 md:w-3/5 2xl:w-[65%]">
          <ClientCarousal />

          <div className="py-2">
            <div className="px-3 py-1 rounded-full text-white bg-primary-100 text-xs inline-flex justify-between w-max cursor-pointer">
              <AiFillCar size="15" />
              <span className="ml-1 font-bold text-[10px]">
                Traveling Service
              </span>
            </div>
          </div>

          <div className="text-gray-700">
            <div className="text-2xl font-bold text-gray-700 py-2">
              Yoko @ Dapper Cuts
            </div>
            <div className="text-xs pb-2">2267 Main st, Fort Myers, 33901</div>
          </div>

          <div className="text-gray-700">
            <div className="text-xl font-bold py-2">Services</div>

            <div className="">
              <ClientAccordion
                key="1"
                headLabel="Popular Services"
                initialExpand={true}
                bookServiceHandler={bookServiceHandler}
              />
              <ClientAccordion
                key="2"
                headLabel="Other Services"
                initialExpand={false}
                bookServiceHandler={bookServiceHandler}
              />
            </div>
          </div>

          <div className="py-4 text-gray-700">
            <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
              See Our Work
            </div>
            <ClientGallery images={galleryImages} />
          </div>

          <ClientBusinessDetailsHealthSafetyRules />

          <ClientBusinessReviews
            businessId={businessId}
            rating={averageRating}
          />
        </div>

        <div className="text-gray-700 bg-gray-50 sm:w-4/5 md:w-2/5 2xl:w-[32%]">
          <ClientStaticMap />

          <div className="p-4 grid gap-4 sticky-top top-20 z-20">
            <ClientBusinessDetailsAboutSection />
            <ClientBusinessDetailsContactInformation />
            <ClientBusinessDetailsSocialLinks />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
