import React from "react";
import Head from "next/head";
import { useQueryClient } from "@tanstack/react-query";
import { Divider, Steps, Button, Result } from "antd";

import { ProtectedRoute } from "@/contexts/AuthContext";
import { APP_CONSTANTS } from "@/constants";
import { Footer, ClientJobRateCard } from "@/components";

import FirstStep from "@/pages/bookingRequest/formSteps/FirstStep";
import SecondStep from "@/pages/bookingRequest/formSteps/SecondStep";
import ThirdStep from "@/pages/bookingRequest/formSteps/ThirdStep";

// todo: implement getServerSideProps to fetch and prerender the page or redirect based on user session
export default function ServiceBooking() {
  const queryClient = useQueryClient();

  const [formStage, setFormStage] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);

  function next() {
    return setFormStage((formStage) => formStage + 1);
  }

  function previous() {
    return setFormStage((formStage) => formStage - 1);
  }

  function done() {
    // perform cache clean up after successfull business creation
    // queryClient.removeQueries({
    //   queryKey: APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
    //   exact: true,
    // });

    // queryClient.removeQueries({
    //   queryKey: APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_INSURANCE,
    //   exact: true,
    // });

    // queryClient.removeQueries({
    //   queryKey: APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_REFERENCES,
    //   exact: true,
    // });

    setIsDone(true);
  }

  const steps = [
    {
      title: "Schedule",
      content: <FirstStep next={next} />,
    },
    {
      title: "Job Details",
      content: <SecondStep previous={previous} next={next} />,
    },
    {
      title: "Confirm",
      content: <ThirdStep previous={previous} done={done} />,
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
        {!isDone ? (
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
        ) : (
          <Result
            status="success"
            title="Congratulation! Business Registration Successfull"
            subTitle="Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Explore Services
              </Button>,
              <Button key="buy">Techlance Home</Button>,
            ]}
          />
        )}

        <Footer />
      </div>
    </>
  );
}
