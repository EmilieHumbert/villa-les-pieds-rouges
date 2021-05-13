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
    ["/images/front-house.jpg", "Front of the house"],
    ["/images/patio-trees.jpg", "Trees in the patio"],
    [
      "/images/livingroom-view-back-table.jpg",
      "Livingroom with view on the back of the house",
    ],
    ["/images/la-sud.jpg", "La sud Hossegor"],
    [
      "/images/livingroom-two-windows-front.jpg",
      "Livingroom with view on the beach",
    ],
    ["/images/bedroom-three.jpg", "Bedroom"],
    ["/images/commode.jpg", "Commode"],
    ["/images/kitchen.jpg", "Kitchen"],
    ["/images/bedroom-four.jpg", "Bedroom"],
    ["/images/bedroom-first.jpg", "Bedroom"],
    ["/images/waves.jpg", "Waves"],
    [
      "/images/view-livingroom-on-patio-front.jpg",
      "View from the livingroom to the front patio",
    ],
    ["/images/bedroom-first-garden.jpg", "Bedroom with garden view"],
    ["/images/sunset.jpg", "Sunset"],
    ["/images/bedroom-five.jpg", "Bedroom"],
    ["/images/corridor.jpg", "Corridor"],
    ["/images/patio-front.jpg", "Patio front of the house"],
    ["/images/livingroom-view-corridor.jpg", "Livingroom view on the corridor"],
    ["/images/bedroom-first-garden-2.jpg", "Bedroom view on garden"],
    ["/images/patio-front-view-up.jpg", "Patio view from top floor"],
    ["/images/livingroom.jpg", "Livingroom"],
    ["/images/patio-back.jpg", "Patio at the back of the house"],
    [
      "/images/livingroom-view-back.jpg",
      "Livingroom view to the back of the house",
    ],
    ["/images/bedroom-second-garden.jpg", "Bedroom with view on garden"],
  ];
  return (
    <main>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-5 w-mobile">
        {images.map(([image, description]) => {
          return (
            <div>
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
