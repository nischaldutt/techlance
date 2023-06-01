import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Divider, message, Steps } from "antd";

import BasinInfo from "@/pages/business/registration/formSteps/BasicInfo";
import InsuranceInfo from "@/pages/business/registration/formSteps/InsuranceInfo";
import ReferenceInfo from "@/pages/business/registration/formSteps/ReferenceInfo";
import SelectServices from "@/pages/business/registration/formSteps/SelectServices";

import { Footer } from "@/components";

export default function BusinessRegistration() {
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
      title: "Basic Info",
      content: (
        <BasinInfo
          jobData={jobData}
          updateJobData={updateJobData}
          next={next}
        />
      ),
    },
    {
      title: "Insurance Info",
      content: (
        <InsuranceInfo
          jobData={jobData}
          updateJobData={updateJobData}
          next={next}
          previous={previous}
        />
      ),
    },
    {
      title: "References",
      content: (
        <ReferenceInfo
          jobData={jobData}
          updateJobData={updateJobData}
          next={next}
          previous={previous}
        />
      ),
    },
    {
      title: "Select Services",
      content: (
        <SelectServices
          jobData={jobData}
          updateJobData={updateJobData}
          next={next}
          previous={previous}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title.toUpperCase(),
  }));

  return (
    <>
      <Head>
        <title>TechLance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-[100vh]">
        <main className="my-8 flex flex-col justify-between w-[90%] xl:w-[70%] 2xl:w-3/5 mx-auto text-gray-900">
          <h1 className="text-lg lg:text-3xl font-bold py-4">
            Business On-Boarding
          </h1>

          <Divider className="my-2" />

          <section className="flex flex-col md:flex-row">
            <div className="">
              <Steps
                direction="vertical"
                size="small"
                className="font-bold pt-2"
                current={formStage}
                items={items}
              />
            </div>

            <div className="md:ml-[10vw]">{steps[formStage].content}</div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
