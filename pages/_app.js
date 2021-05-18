import React from "react";
import Head from "next/head";

import Navigation from "../components/navigation";
import { appWithTranslation } from "next-i18next";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Villa les pieds rouges</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(MyApp);
