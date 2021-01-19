import { useState } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

function PlansDetails({ activeState: [active], t }) {
  return (
    <>
      <h1 className="border-b-2 border-red-900 col-span-1 font-bold mb-8 text-2xl">
        {t("details-title")}
      </h1>
      {active === 2 && (
        <p className="leading-normal mb-8 text-xl tracking-wide">
          {t("details-floor-two-paragraph-one")}
          <br />
          <br />
          {t("details-floor-two-paragraph-two")}
          <br />
          {t("details-floor-two-paragraph-three")}
        </p>
      )}
      {active === 1 && (
        <p className="leading-normal mb-8 text-xl tracking-wide">
          {t("details-floor-one-paragraph-one")}
          <br />
          {t("details-floor-one-paragraph-two")}
        </p>
      )}
      {active === 0 && (
        <p className="leading-normal mb-8 text-xl tracking-wide">
          {t("details-floor-three-paragraph-one")}
          <br />
          {t("details-floor-three-paragraph-two")}
        </p>
      )}
    </>
  );
}

PlansDetails.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("plans")(PlansDetails);
