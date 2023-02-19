import React from "react";
import { ConfigProvider } from "antd";

import "../styles/globals.css";

import { ClientNavbar } from "@/components";
import { theme } from "@/tailwind.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.extend.colors.primary[100],
            fontFamily: "Montserrat",
          },
        }}
      >
        <ClientNavbar />
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}

export default MyApp;
