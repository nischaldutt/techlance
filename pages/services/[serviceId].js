import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiFillCar, AiOutlinePhone } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

import {
  Accordion,
  Carousal,
  Collapse,
  CustomTabs,
  Gallery,
  ServiceListItem,
  StaticMap,
  Footer,
} from "../../components";

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
      <ul className="border-border-black text-xs grid grid-cols-1">
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety size={20} className="text-secondary mr-1" />
          Contactless Payment Available
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety size={20} className="text-secondary mr-1" />
          Disinfection between clients
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety size={20} className="text-secondary mr-1" />
          Barbicide COVID-19 Certified
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety size={20} className="text-secondary mr-1" />
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
          <BsPhone size="20" className="text-gray-700 mr-1" />
          +91987654321
        </div>
        <button className="border border-gray-300 rounded-lg p-1">
          <AiOutlinePhone size="20" className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "Details",
    content: (
      <>
        <div className="flex justify-center py-2">
          <StaticMap />
        </div>
        <div className="grid gap-2">
          <AboutSection />
          <HealthSafetyRules />
          <ContactInformation />
        </div>
      </>
    ),
  },
  {
    title: "Reviews",
    content: "working or not just show this",
  },
  {
    title: "Portfolio",
    content: "working or not just show this",
  },
];

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Barber shop</title>
        <meta name="description" content="Service name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border border-black flex justify-between flex-col w-[90vw] mx-auto my-8">
        <div className="border border-green-500">
          <Carousal />

          <div className="py-2">
            <div className="px-3 py-1 rounded-full text-gray-700 bg-gray-200 text-xs inline-flex justify-between w-max cursor-pointer">
              <AiFillCar size="15" />
              <span className="ml-1">Traveling Service</span>
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

          <div className="py-4">
            <CustomTabs tabs={tabs} />
          </div>
        </div>
        <div className="text-gray-700">
          <div className="border border-black">Contact & Business Hours</div>
        </div>
      </div>

      <div className="py-4 text-gray-700">
        <div className="uppercase pt-6 py-3 underline underline-offset-8 font-bold">
          See Our Work
        </div>
        <Gallery />
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
