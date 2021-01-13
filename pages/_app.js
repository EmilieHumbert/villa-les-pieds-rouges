import React from "react";
import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import App from "next/app";
import { appWithTranslation } from "../i18n";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import LanguageButton from "../components/languageButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Villa les pieds rouges</title>
      </Head>
      <div className={"hidden sm:block"}>
        <LanguageButton />
      </div>
      <Navigation />
      <Component {...pageProps} />
      <div className={"sm:hidden"}>
        <Footer />
      </div>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
