import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiFillCar } from "react-icons/ai";

import {
  ClientAccordion,
  ClientCarousal,
  ClientGallery,
  ClientServiceNavHeader,
  ClientRatingStats,
  ClientReviewForm,
  ClientStaticMap,
  Footer,
} from "@/components";

import HealthSafetyRules from "@/pages/categories/[dynamicCategorySlug]/HealthSafetyRules";
import AboutSection from "@/pages/categories/[dynamicCategorySlug]/AboutSection";
import ContactInformation from "@/pages/categories/[dynamicCategorySlug]/ContactInformation";
import SocialLinks from "@/pages/categories/[dynamicCategorySlug]/SocialLinks";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function ServicePage() {
  const router = useRouter();
  const [reviews, setReviews] = useState([]);

  function addNewReview(newReview) {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  }

  function swapNewReview(newReview) {
    setReviews((prevReviews) => {
      return prevReviews.map((pre) => {
        return pre?.reviewId === newReview?.reviewId ? newReview : pre;
      });
    });
  }

  function bookServiceHandler(serviceId) {
    console.log({ serviceId });
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

          <HealthSafetyRules />

          <div className="py-4 text-gray-700">
            <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
              Ratings
            </div>
            <ClientRatingStats
              rating={3}
              reviews={reviews}
              swapNewReview={swapNewReview}
            />
            <ClientReviewForm addNewReview={addNewReview} />
          </div>
        </div>

        <div className="text-gray-700 bg-gray-50 sm:w-4/5 md:w-2/5 2xl:w-[32%]">
          <ClientStaticMap />

          <div className="p-4 grid gap-4 sticky-top top-20 z-20">
            <AboutSection />
            <ContactInformation />
            <SocialLinks />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
