import Head from "next/head";
import Image from "next/image";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

import {
  Accordion,
  Carousal,
  Collapse,
  Gallery,
  ServiceListItem,
  Footer,
} from "../../components";

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

          <div className="text-sm py-2 text-gray-700">
            <div className="uppercase pt-6 py-3 font-bold">
              Venue Health & Safety Rules
            </div>
            <ul className="border-border-black text-sm grid grid-cols-1">
              <li className="inline-flex py-2">
                <MdOutlineHealthAndSafety
                  size={20}
                  className="text-secondary"
                />{" "}
                Contactless Payment Available
              </li>
              <li className="inline-flex py-2">
                <MdOutlineHealthAndSafety
                  size={20}
                  className="text-secondary"
                />{" "}
                Disinfection between clients
              </li>
              <li className="inline-flex py-2">
                <MdOutlineHealthAndSafety
                  size={20}
                  className="text-secondary"
                />{" "}
                Barbicide COVID-19 Certified
              </li>
              <li className="inline-flex py-2">
                <MdOutlineHealthAndSafety
                  size={20}
                  className="text-secondary"
                />{" "}
                Employees wear disposable gloves
              </li>
            </ul>
          </div>

          <div className="py-4 text-gray-700">
            <div className="uppercase pt-6 py-3 underline underline-offset-8 font-bold">
              See Our Work
            </div>
            <Gallery />
          </div>
        </div>
        <div className="border border-black text-gray-700">
          <div className="border border-black">Contact & Business Hours</div>
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
