import Head from "next/head";
import "tailwindcss/tailwind.css";

import Navigation from "../components/navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Villa les pieds rouges</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navigation />
        <div>
          <img src="/images/beach-view.jpeg" alt="beach-hossegor" />
        </div>
      </main>

      <footer></footer>
    </>
  );
}
