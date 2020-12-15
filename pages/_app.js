import Head from "next/head";
import Navigation from '../components/navigation'

import "tailwindcss/tailwind.css";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Villa les pieds rouges</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navigation />
    <Component {...pageProps} />
  </>
}
