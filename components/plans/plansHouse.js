import { useState } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../../i18n";
import classNames from "classnames";

function HousePlans({ t, active, setActive }) {
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
          <button
            key={floorNumber}
            onClick={() => setActive(floorNumber)}
            className={classNames(
              "absolute h-1/6 left-1/3 lg:left-2 w-2/6 lg:w-48",
              "bg-opacity-50 bg-white focus:outline-none",
              "border-2 border-opacity-50 border-red-900 rounded-lg",
              positionClassName,
              active === floorNumber ? "bg-opacity-75 border-47" : ""
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

HousePlans.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("plans")(HousePlans);
