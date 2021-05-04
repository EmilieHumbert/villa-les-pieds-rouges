import { useState } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

function PlansFloor({ activeState: [active], t }) {
  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 mt-8 text-2xl">
        {t("floor-title")}
      </h1>
      {active === 2 && (
        <div className="bg-planSecond bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl"></div>
      )}
      {active === 1 && (
        <div className="bg-planFirst bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl"></div>
      )}
      {active === 0 && (
        <div className="bg-planGround bg-contain bg-top bg-no-repeat col-span-2 content h-xl w-xl"></div>
      )}
    </>
  );
}

PlansFloor.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("plans")(PlansFloor);
