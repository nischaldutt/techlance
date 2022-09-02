import { useEffect } from "react";
import "../styles/globals.css";

import NavBar from "../components/Navbar";

const headers = [
  { label: "Explore Services" },
  { label: "Become a Seller" },
  { label: "Login" },
  { label: "Join" },
];

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <>
      <NavBar headers={headers} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
