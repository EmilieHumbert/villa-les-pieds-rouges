import React from "react";
import { useTranslation } from "next-i18next";

export default function AboutUs() {
  const { t } = useTranslation("about");

  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 my-2 text-2xl">
        {t("title-us")}
      </h1>
      <p className="leading-normal mb-8 text-xl tracking-wide ">
        {t("text-us-paragraph-one")}
      </p>
      <p className="leading-normal mb-8 lg:mb-0 text-xl tracking-wide ">
        {t("text-us-paragraph-two")}
      </p>
    </>
  );
}
