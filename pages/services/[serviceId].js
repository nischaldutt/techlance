import Head from "next/head";
import Image from "next/image";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import {
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
        <title>Sign in</title>
        <meta name="description" content="Service name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border border-black flex justify-between w-3/5 mx-auto mt-8">
        <div className="border border-black w-[65%]">
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
              <Collapse />
              <ServiceListItem />
            </div>
          </div>

          <div className="border- border-black">
            <div className="">Venue Health & Safety Rules</div>
            <ul className="border-border-black text-sm grid grid-cols-2">
              <li className="inline-flex">
                <MdOutlineHealthAndSafety size={25} /> Contactless Payment
                Available
              </li>
              <li className="inline-flex">
                <MdOutlineHealthAndSafety size={25} /> Disinfection between
                clients
              </li>
              <li className="inline-flex">
                <MdOutlineHealthAndSafety size={25} /> Barbicide COVID-19
                Certified
              </li>
              <li className="inline-flex">
                <MdOutlineHealthAndSafety size={25} /> Employees wear disposable
                gloves
              </li>
            </ul>
          </div>

          <Gallery />
        </div>
        <div className="border border-black w-[30%]">
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
