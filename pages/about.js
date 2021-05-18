import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import KeyDates from "../components/about/aboutKeyDates";
import AboutTheVilla from "../components/about/aboutTheVilla";
import AboutUs from "../components/about/aboutUs";

function About() {
  const { t } = useTranslation("about");

  return (
    <main className="mx-7px">
      <Head title={t("title")} />
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto lg:gap-32 mb-8 sm:mb-20">
        <div className="col-span-2">
          <AboutTheVilla />
          <br />
          <AboutUs />
        </div>
        <div className="col-span-1">
          <KeyDates />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "navigation"])),
  },
});

export default About;
