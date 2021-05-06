import { useState } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../../i18n";
import classNames from "classnames";

function PlansFloor({ activeState: [active], t }) {
  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 mt-8 text-2xl">
        {t("floor-title")}
      </h1>
      {[
        ["bg-planSecond", 2],
        ["bg-planFirst", 1],
        ["bg-planGround", 0],
      ].map(([bgClassName, floorNumber]) => {
        if (active === floorNumber) {
          return (
            <div
              className={classNames(
                "bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl",
                active === floorNumber ? bgClassName : ""
              )}
            ></div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

PlansFloor.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("plans")(PlansFloor);
