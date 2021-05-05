import { useState } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../../i18n";
import PlansDetails from "./plansDetails";
import PlansFloor from "./plansFloor";

function HousePlans({ t }) {
  const [active, setActive] = useState(0);

  return (
    <div className="gap-x-32 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto">
      <h1 className="border-b-2 border-red-900 col-span-2 font-bold mb-8 text-2xl">
        {t("house-title")}
      </h1>
      <p className="col-span-2 leading-normal mb-8 text-xl tracking-wide">
        {t("house-paragraph")}
      </p>
      <div className="bg-contain bg-fullHouse bg-no-repeat bg-top col-span-2 h-72 sm:h-xl mb-8 relative :w-xl">
        <button
          onClick={() => setActive(2)}
          className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 focus:outline-none h-1/6 left-35 sm:left-1/6 top-1/6 rounded-lg w-2/6 sm:w-8/12"
        ></button>
        <button
          onClick={() => setActive(1)}
          className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 focus:outline-none h-1/6 left-35 sm:left-1/6 top-42 rounded-lg w-2/6 sm:w-8/12"
        ></button>
        <button
          onClick={() => setActive(0)}
          className="absolute bg-opacity-25 bg-white border-4 border-double border-opacity-50 border-red-900 bottom-1/6 focus:outline-none h-1/6 left-35 sm:left-1/6 rounded-lg w-2/6 sm:w-8/12"
        ></button>
        {active === 2 && (
          <button
            onClick={() => setActive(2)}
            className="absolute bg-opacity-50 bg-white border-47 border-red-900 focus:outline-none h-1/6 left-35 sm:left-1/6 top-1/6 rounded-lg w-2/6 sm:w-8/12"
          ></button>
        )}
        {active === 1 && (
          <button
            onClick={() => setActive(1)}
            className="absolute bg-opacity-50 bg-white border-47 border-red-900 focus:outline-none h-1/6 left-35 sm:left-1/6 top-42 rounded-lg w-2/6 sm:w-8/12"
          ></button>
        )}
        {active === 0 && (
          <button
            onClick={() => setActive(0)}
            className="absolute bg-opacity-50 bg-white border-47 border-red-900 bottom-1/6 focus:outline-none h-1/6 left-35 sm:left-1/6 rounded-lg w-2/6 sm:w-8/12"
          ></button>
        )}
      </div>
      <div className="col-span-2 lg:col-span-1 lg:row-start-1 lg:row-span-3 lg:col-start-3 lg:w-sm">
        <PlansDetails activeState={[active]} />
      </div>
      <div className="col-span-2 lg:col-span-3 row-2 contentSection">
        <PlansFloor activeState={[active]} />
      </div>
    </div>
  );
}

HousePlans.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("plans")(HousePlans);
