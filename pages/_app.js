import Head from "next/head";
import Navigation from "../components/navigation";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Villa les pieds rouges</title>
      </Head>
      <Navigation pages={["gallery", "plans", "about", "contact"]} />
      <Component {...pageProps} />
    </>
  );
}
