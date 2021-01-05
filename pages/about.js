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
      <div className="container grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-32 px-2">
        <div className="col-span-2">
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
