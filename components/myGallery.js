import React from "react";

import "react-medium-image-zoom/dist/styles.css";
import { useTranslation } from "next-i18next";
import ZoomImage from "./zoomImage";

export default function MyGallery() {
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
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto md:gap-5 gap-x-5 gap-y-5 w-mobile">
        <h1 className="border-b-2 border-red-900 col-span-3 font-bold mb-8 text-2xl">
          {t("title")}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto md:gap-5 gap-x-5 gap-y-5 w-mobile">
        {images.map(([image, description]) => {
          return (
            <ZoomImage
              key={description}
              description={description}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
}
