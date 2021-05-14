import { useState } from "react";

import { useTranslation } from "next-i18next";

export default function PlansDetails({ activeState: [active] }) {
  const { t } = useTranslation("plans");

  console.log(active);
  return (
    <>
      <h1 className="border-b-2 border-red-900 col-span-1 font-bold mb-8 text-2xl">
        {t("details-title")}
      </h1>
      {[
        [0, "ground"],
        [1, "first"],
        [2, "second"],
      ].map(([number, floor]) => (
        <div key={number}>
          {active === number && (
            <p className="leading-normal mb-8 text-xl tracking-wide">
              {t(`details-floor-${floor}-paragraph-one`)}
              <br />
              <br />
              {t(`details-floor-${floor}-paragraph-two`)}
              <br />
              {t(`details-floor-${floor}-paragraph-three`)}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
