import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Divider, message, Steps } from "antd";

import FirstStep from "./formSteps/FirstStep";
import SecondStep from "./formSteps/SecondStep";
import ThirdStep from "./formSteps/ThirdStep";

import { Footer, ClientJobRateCard } from "@/components";

export default function ServiceBooking() {
  const router = useRouter();
  const { serviceId } = router.query;

  const [formStage, setFormStage] = React.useState(0);
  const [jobData, setJobData] = React.useState({});

  const updateJobData = (data) => {
    return setJobData((prevData) => ({ ...prevData, ...data }));
  };

  function next() {
    return setFormStage((formStage) => formStage + 1);
  }

  function previous() {
    return setFormStage((formStage) => formStage - 1);
  }

  function done() {
    message.success("Processing complete!");
  }

  function onEdit() {
    return setFormStage(0);
  }

  const steps = [
    {
      title: "Schedule",
      content: (
        <FirstStep
          jobData={jobData}
          updateJobData={updateJobData}
          next={next}
        />
      ),
    },
    {
      title: "Job Details",
      content: (
        <SecondStep
          jobData={jobData}
          updateJobData={updateJobData}
          next={next}
          previous={previous}
        />
      ),
    },
    {
      title: "Confirm",
      content: <ThirdStep jobData={jobData} done={done} onEdit={onEdit} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title.toUpperCase(),
  }));

  return (
    <>
      <Head>
        <title>Book a Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-[100vh]">
        <main className="my-8 flex justify-between gap-10 w-[90%] xl:w-[70%] 2xl:w-3/5 mx-auto text-gray-900">
          <section className="w-full lg:w-[70%] xl:w-3/4">
            <h1 className="text-lg lg:text-3xl font-bold py-4">
              Book Appliance Install Service
            </h1>
            <Steps
              current={formStage}
              items={items}
              className="font-bold pt-2"
            />

            <Divider />

            <section>{steps[formStage].content}</section>
          </section>

          <section className="hidden lg:block lg:w-[30%] xl:w-1/4">
            <ClientJobRateCard />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
