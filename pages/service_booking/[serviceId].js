import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import FirstStep from "./formSteps/FirstStep";
import SecondStep from "./formSteps/SecondStep";
import ThirdStep from "./formSteps/ThirdStep";

import { Stepper, Footer } from "../../components";

export default function ServiceBooking() {
  const router = useRouter();
  const { serviceId } = router.query;

  const [formStage, setFormStage] = React.useState(1);
  const [jobData, setJobData] = React.useState();

  const updateJobData = (data) => {
    return setJobData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <>
      <Head>
        <title>Book a Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-[100vh]">
        <main className="flex justify-center">
          <section className="border-2 border-black w-1/2">
            <h1>Book Appliance Install Services</h1>

            <Stepper />

            <ActiveFormStage
              formStage={formStage}
              setFormStage={setFormStage}
              jobData={jobData}
              updateJobData={updateJobData}
            />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

function ActiveFormStage({ formStage, setFormStage, jobData, updateJobData }) {
  switch (formStage) {
    case 1:
      return (
        <FirstStep
          setFormStage={setFormStage}
          jobData={jobData}
          updateJobData={updateJobData}
        />
      );
    case 2:
      return (
        <SecondStep
          setFormStage={setFormStage}
          jobData={jobData}
          updateJobData={updateJobData}
        />
      );
    case 3:
      return <ThirdStep setFormStage={setFormStage} jobData={jobData} />;
    default:
      return (
        <FirstStep
          setFormStage={setFormStage}
          jobData={jobData}
          updateJobData={updateJobData}
        />
      );
  }
}
