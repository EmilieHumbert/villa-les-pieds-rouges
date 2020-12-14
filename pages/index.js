import Head from "next/head";
import "tailwindcss/tailwind.css";

import Navigation from "../components/navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Villa les pieds rouges</title>
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
