import React from "react";

import { useTranslation } from "next-i18next";
import classNames from "classnames";

export default function HousePlans({ active, setActive }) {
  const { t } = useTranslation("plans");

  return (
    <>
      <h1 className="border-b-2 border-red-900 col-span-2 font-bold mb-8 text-2xl">
        {t("house-title")}
      </h1>
      <p className="col-span-2 leading-normal mb-8 text-xl tracking-wide">
        {t("house-paragraph")}
      </p>
      <div className="bg-contain bg-fullHouse bg-no-repeat bg-top col-span-2 h-72 sm:h-72  mb-8 relative md:l-1/3 :w-xl  ">
        {[
          [`${t("second-floor")}`, "top-1/6", 2],
          [`${t("first-floor")}`, "top-42", 1],
          [`${t("ground-floor")}`, "bottom-1/6", 0],
        ].map(([label, positionClassName, floorNumber]) => (
          <div
            key={floorNumber}
            className={classNames(
              "absolute h-1/6 left-1/3 lg:left-2 w-2/6 lg:w-48",
              positionClassName
            )}
          >
            {floorNumber === 2 && (
              <span className="absolute flex h-4 w-4 -right-1 -top-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-900"></span>
              </span>
            )}
            <button
              key={floorNumber}
              onClick={() => setActive(floorNumber)}
              className={classNames(
                "w-full h-full",
                "bg-opacity-50 bg-white focus:outline-none",
                "border-2 border-opacity-50 border-red-900 rounded-lg",
                active === floorNumber ? "bg-opacity-75 border-47" : ""
              )}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
