import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MyCarousel from "../components/myCarousel";

function Home() {
  const router = useRouter();
  const { t } = useTranslation("home");
  
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <MyCarousel
          slideUrls={[
            ["/images/patio-back.jpg", `${t("patio-back")}`],
            ["/images/la-sud.jpg", `${t("la-sud")}`],
            [
              "/images/livingroom-two-windows-front.jpg",
              `${t("livingroom-two-windows-front")}`,
            ],
            ["/images/bedroom-three.jpg", `${t("bedroom-three")}`],
            ["/images/patio-front.jpg", `${t("patio-front")}`],
            [
              "/images/bedroom-first-garden.jpg",
              `${t("bedroom-first-garden")}`,
            ],
            ["/images/front-house.jpg", `${t("front-house")}`],
          ]}
        />
      </div>

      <div className=" mx-auto max-w-xl lg:max-w-4xl text-center text-base sm:text-lg md:text-xl mt-32 mb-8 sm:mb-20">
        {t("intro")}
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "navigation"])),
  },
});

export default Home;
