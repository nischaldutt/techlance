import React from "react";
import { useRouter } from "next/router";
import { ConfigProvider } from "antd";

import { ClientNavbar } from "@/components";
import { theme } from "@/tailwind.config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.layout || (({ children }) => <>{children}</>);

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
        {!router.pathname.includes("/business") && <ClientNavbar />}

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
