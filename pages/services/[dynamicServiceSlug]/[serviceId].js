import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiFillCar, AiOutlinePhone } from "react-icons/ai";
import { BsPhone, BsInstagram } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { BiShareAlt } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";

import {
  Accordion,
  Carousal,
  Collapse,
  Gallery,
  ServiceNavHeader,
  RatingStats,
  StaticMap,
  Footer,
} from "../../../components";

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

const socialPlatforms = [
  {
    name: "Instagram",
    icon: <BsInstagram size="20" />,
    profileLink: "/",
  },
  {
    name: "Facebook",
    icon: <FiFacebook size="20" />,
    profileLink: "/",
  },
  {
    name: "Web",
    icon: <GiEarthAmerica size="20" />,
    profileLink: "/",
  },
  {
    name: "Share",
    icon: <BiShareAlt size="20" />,
    profileLink: "/",
  },
];

const AboutSection = () => {
  return (
    <div className="text-sm text-gray-700">
      <div className="uppercase font-bold py-2">About Us</div>
      <p className="text-justify text-xs">
        The Barber Spot is a family-friendly, full service barbershop that is
        conveniently located in Downtown Orlando. Our master barbers have
        decades of experience, and over the years our staffers have received
        copious amounts of recognition for their haircuts. At The Barber Spot,
        we offer traditional hot lather and straight razor shaves, Additionally,
        our dedicated barbers provide premium services and pride themselves on
        creating long-term relationships with clients. The Barber Spot continues
        to service a loyal customer base and eagerly seeks to invite newcomers
        to become part of the Barber Spot family.
      </p>
    </div>
  );
};

const HealthSafetyRules = () => {
  return (
    <div className="text-sm text-gray-700">
      <div className="uppercase py-3 font-bold">
        Venue Health & Safety Rules
      </div>
      <ul className="border-border-black text-xs grid grid-cols-2">
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Contactless Payment Available
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Disinfection between clients
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Barbicide COVID-19 Certified
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Employees wear disposable gloves
        </li>
      </ul>
    </div>
  );
};

const ContactInformation = () => {
  return (
    <div className="">
      <div className="uppercase text-gray-700 text-sm font-bold py-2">
        Contact & Business Hours
      </div>

      <div className="text-sm py-3 flex justify-between">
        <div className="text-black inline-flex">
          <BsPhone size="20" className="text-primary-100 mr-1" />
          +91987654321
        </div>
        <button className="border border-gray-300 rounded-lg shadow-lg p-1">
          <AiOutlinePhone size="20" className="text-primary-100" />
        </button>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="py-2">
      <div className="uppercase text-gray-700 text-sm font-bold pb-4">
        Social Media & Share
      </div>
      <div className="flex justify-between">
        {socialPlatforms.map((social) => {
          return (
            <Link href={social.profileLink} key={social.name}>
              <a className="text-primary-100 text-xs grid place-items-center gap-2">
                {social.icon}
                {social.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Barber shop</title>
        <meta name="description" content="Service name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ServiceNavHeader />

      <div className="flex flex-col items-center md:items-stretch md:flex-row lg:w-4/5 2xl:w-3/5 2xl:justify-between mx-auto my-8 ">
        <div className="px-2 2xl:px-0 sm:w-4/5 md:w-3/5 2xl:w-[65%]">
          <Carousal />

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
              <Accordion
                key="1"
                headLabel="Popular Services"
                initialExpand={true}
              />
              <Accordion
                key="2"
                headLabel="Other Services"
                initialExpand={false}
              />
            </div>
          </div>

          <div className="py-4 text-gray-700">
            <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
              See Our Work
            </div>
            <Gallery images={galleryImages} />
          </div>

          <HealthSafetyRules />

          <div className="py-4 text-gray-700">
            <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
              Reviews
            </div>
            <RatingStats />
          </div>
        </div>

        <div className="text-gray-700 bg-gray-50 sm:w-4/5 md:w-2/5 2xl:w-[32%]">
          <StaticMap />

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
