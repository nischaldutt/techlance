import Script from "next/script";
import { useEffect } from "react";

import "../styles/globals.css";

import NavBar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
