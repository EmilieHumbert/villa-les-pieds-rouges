import React from "react";
import Image from "next/image";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTranslation } from "next-i18next";

export default function LocationDescription() {
  const { t } = useTranslation("location");

  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 text-2xl">
        {t("locationDescription-title")}
      </h1>
      <div className="leading-normal mb-8 text-xl tracking-wide">
        <p className="my-8">{t("locationDescriptionHossegorP1")}</p>
        <Zoom>
          <Image
            alt={t("locationDescriptionImage")}
            src="/images/surfing.jpg"
            width="793"
            height="500"
          />
        </Zoom>
        <p className="my-8">{t("locationDescriptionHossegorP2")}</p>
        <p className="my-8">{t("locationDescriptionHossegorP3")}</p>
      </div>
    </>
  );
}
