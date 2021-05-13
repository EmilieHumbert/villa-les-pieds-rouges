import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Gallery() {
  const router = useRouter();
  const { t } = useTranslation("gallery");

  const images = [
    ["/images/front-house.jpg", `${t("front-house")}`],
    ["/images/patio-trees.jpg", `${t("patio-trees")}`],
    [
      "/images/livingroom-view-back-table.jpg",
      `${t("livingroom-view-back-table")}`,
    ],
    ["/images/la-sud.jpg", `${t("la-sud")}`],
    [
      "/images/livingroom-two-windows-front.jpg",
      `${t("livingroom-two-windows-front")}`,
    ],
    ["/images/bedroom-three.jpg", `${t("bedroom-three")}`],
    ["/images/commode.jpg", `${t("commode")}`],
    ["/images/kitchen.jpg", `${t("kitchen")}`],
    ["/images/bedroom-four.jpg", `${t("bedroom-four")}`],
    ["/images/bedroom-first.jpg", `${t("bedroom-first")}`],
    ["/images/waves.jpg", `${t("waves")}`],
    [
      "/images/view-livingroom-on-patio-front.jpg",
      `${t("view-livingroom-on-patio-front")}`,
    ],
    ["/images/bedroom-first-garden.jpg", `${t("bedroom-first-garden")}`],
    ["/images/sunset.jpg", `${t("sunset")}`],
    ["/images/bedroom-five.jpg", `${t("bedroom-five")}`],
    ["/images/corridor.jpg", `${t("corridor")}`],
    ["/images/patio-front.jpg", `${t("patio-front")}`],
    [
      "/images/livingroom-view-corridor.jpg",
      `${t("livingroom-view-corridor")}`,
    ],
    ["/images/bedroom-first-garden-2.jpg", `${t("bedroom-first-garden-2")}`],
    ["/images/patio-front-view-up.jpg", `${t("patio-front-view-up")}`],
    ["/images/livingroom.jpg", `${t("livingroom")}`],
    ["/images/patio-back.jpg", `${t("patio-back")}`],
    ["/images/livingroom-view-back.jpg", `${t("livingroom-view-back")}`],
    ["/images/bedroom-second-garden.jpg", `${t("bedroom-second-garden")}`],
  ];
  return (
    <main>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-5 w-mobile">
        {images.map(([image, description]) => {
          return (
            <div key={description}>
              <Image alt={description} src={image} width="500" height="500" />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["gallery", "navigation"])),
  },
});

export default Gallery;
