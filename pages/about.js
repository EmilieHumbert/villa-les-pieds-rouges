import Head from "next/head";
import KeyDates from "../components/aboutKeyDates";
import AboutTheVilla from "../components/aboutTheVilla";
import AboutUs from "../components/aboutUs";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 px-2">
        <div className="md:col-span-2 col-span-1">
          <AboutTheVilla />
          <br />
          <AboutUs />
        </div>
        <div className="col-span-1">
          <KeyDates />
        </div>
      </div>
    </>
  );
}
