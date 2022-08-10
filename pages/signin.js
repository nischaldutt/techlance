import Head from "next/head";
import Image from "next/image";

import SigninForm from "../components/SigninForm";

const imageSrc =
  "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80";

const myLoader = ({ src }) => {
  return src;
};

export default function Signin() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in to your Techlance account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border border-black flex justify-center">
        <div className="border border-black">
          <SigninForm />
        </div>
        <div className="border border-black">
          <Image
            loader={myLoader}
            src={imageSrc}
            width={700}
            height={900}
            alt="ds"
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
