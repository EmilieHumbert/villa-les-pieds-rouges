import React from "react";
import dynamic from "next/dynamic";

import { useTranslation } from "next-i18next";

export default function LocationMap() {
  const { t } = useTranslation("location");

  const Map = React.useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => <p>Loading map...</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 text-2xl">
        {t("locationMap-title")}
      </h1>
      <div className="leading-normal mb-8 text-xl tracking-wide">
        {t("locationMap-text")}
      </div>
      <div className="leading-normal mb-8 text-xl tracking-wide">
        <Map />
      </div>
    </>
  );
}
