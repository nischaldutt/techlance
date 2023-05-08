import React from "react";
import { useRouter } from "next/router";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ConfigProvider } from "antd";

import { ClientNavbar } from "@/components";
import { theme } from "@/tailwind.config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          {!router.pathname.includes("/business") && <ClientNavbar />}

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
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
