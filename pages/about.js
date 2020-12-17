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
      <div class="grid grid-cols-3 gap-12">
        <div class="col-span-2">
          <AboutTheVilla />
          <br />
          <AboutUs />
        </div>
        <div class="col-span-1">
          <KeyDates />
        </div>
      </div>
    </>
  );
}
