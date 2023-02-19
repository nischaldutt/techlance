import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "antd";

export default function BusinessHero() {
  const router = useRouter();

  function registerBusiness() {
    router.push(`/business/registration`);
  }

  return (
    <>
      <section
        id="home"
        className="border-2 border-black relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-primary-100 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Free and Open-Source Next.js Template for Startup & SaaS
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button type="primary" shape="round" block size="large">
                    Download
                  </Button>
                  <Button
                    shape="round"
                    block
                    size="large"
                    onClick={registerBusiness}
                  >
                    Register your Business
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
