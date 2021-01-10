import React from "react";
import Head from "next/head";
import Navigation from "../components/navigation";

import App from 'next/app'
import { appWithTranslation } from "../i18n";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Villa les pieds rouges</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
