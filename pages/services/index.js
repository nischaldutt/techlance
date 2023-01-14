import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Footer } from "../../components";

import { categories, servicesList } from "../data";

const ServiceCategory = ({ icon, label, onToggle }) => {
  return (
    <div
      className="bg-white rounded-lg flex flex-col justify-center items-center w-32 py-6 shadow-md hover:shadow-lg cursor-pointer transform transition duration-500 hover:scale-110"
      onClick={() => onToggle(label.toLowerCase())}
    >
      {icon}
      <div className="pt-4 font-semibold">{label}</div>
    </div>
  );
};

const ServiceType = ({ name, image }) => {
  return (
    <section className="group flex justify-center w-[275px] transform transition duration-500 hover:-translate-y-2">
      <div className="rounded-lg bg-white max-w-sm">
        <Link href="#">
          <a>
            <div className="relative">
              <Image
                className="rounded-lg"
                src={image}
                alt={name}
                width={275}
                height={180}
                objectFit="cover"
              />

              <div className="w-full absolute bottom-1 rounded-bl-lg rounded-br-lg right-0 text-white text-right p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                <div className="font-bold text-lg transform transition duration-500 group-hover:-translate-y-2">
                  {name}
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default function Services() {
  const [currentServices, setCurrentServices] = React.useState(servicesList);
  const [filterValue, setFilterValue] = React.useState("");

  React.useEffect(() => {
    function filterServices() {
      if (!filterValue) {
        return setCurrentServices(() => servicesList);
      }

      const newServices = servicesList.reduce((accumulator, service) => {
        if (
          service.categories.findIndex(
            (category) => category.toLowerCase() === filterValue
          ) > -1
        ) {
          accumulator.push(service);
        }

        return accumulator;
      }, []);

      return setCurrentServices(() => newServices);
    }

    filterServices();
  }, [filterValue]);

  function onToggle(serviceClicked) {
    if (serviceClicked === filterValue) {
      setFilterValue(() => "");
    } else {
      setFilterValue(() => serviceClicked);
    }
  }

  return (
    <>
      <Head>
        <title>TechLance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="px-4 py-20 bg-gray-100 flex justify-center">
          <div className="w-[45%] flex justify-between">
            {categories.map((category) => {
              return (
                <ServiceCategory
                  key={category.label}
                  icon={category.icon}
                  label={category.label}
                  onToggle={onToggle}
                />
              );
            })}
          </div>
        </section>

        <section className="px-4 py-12 bg-white flex justify-center">
          <section className="w-[45%] grid grid-cols-[repeat(3,_minmax(0,_275px))] justify-between gap-6">
            {currentServices.map((service) => {
              return (
                <ServiceType
                  key={service.id}
                  name={service.name}
                  image={service.image}
                />
              );
            })}
          </section>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
