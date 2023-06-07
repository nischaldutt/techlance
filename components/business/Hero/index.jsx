import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "antd";

import { URL_CONSTANTS } from "@/constants";

export default function BusinessHero() {
  const router = useRouter();

  function loginBusinessUser() {
    router.push(URL_CONSTANTS.ROUTES.BUSINESS.AUTH.LOGIN);
  }

  function registerBusiness() {
    router.push(URL_CONSTANTS.ROUTES.BUSINESS.REGISTRATION);
  }

  return (
    <>
      <section className="h-[30rem] grid place-items-center relative">
        <Image
          src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="..."
          layout="fill"
          objectFit="cover"
          className=""
        />

        <div className="absolute top-[20%] md:top-[40%] bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-zinc-900 to-transparent">
          <div className="font-bold text-lg text-center flex flex-col items-center gap-4">
            <div className="text-4xl font-bold">The App for your Home</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex gap-6 flex-col md:flex-row">
              <Button type="primary" size="large" onClick={loginBusinessUser}>
                Login
              </Button>
              <Button size="large" onClick={registerBusiness}>
                Register your Business
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
