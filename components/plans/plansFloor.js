import React from "react";
import Image from "next/image";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTranslation } from "next-i18next";
import classNames from "classnames";

export default function PlansFloor({ activeState: [active], setActive }) {
  const { t } = useTranslation("plans");

  const floorNames = ["Ground", "First", "Second"];

  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 mt-8 text-2xl">
        {t("floor-title")}
      </h1>
      <div className="col-span-2 content">
        <div className="flex flex-row">
          {[
            [`${t("ground-floor")}`, 0],
            [`${t("first-floor")}`, 1],
            [`${t("second-floor")}`, 2],
          ].map(([floorTitle, floorNumber]) => (
            <div
              className="flex items-end justify-start mr-8 mb-8"
              key={floorTitle}
            >
              <a
                onClick={() => setActive(floorNumber)}
                className={classNames(
                  "hidden sm:block capitalize hover:text-gray-500 text-lg border-b-2 border-white",
                  active === floorNumber ? "border-red-900" : ""
                )}
              >
                {floorTitle}
              </a>
            </div>
          ))}
        </div>
        <Zoom>
          <Image
            alt={`${floorNames[active]} floor plan`}
            src={`/images/plan-${floorNames[active].toLowerCase()}-floor.jpg`}
            width={1440}
            height={1018}
          />
        </Zoom>
      </div>
    </>
  );
}
