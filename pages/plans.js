import React, { useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";
import HousePlans from "../components/plans/plansHouse";
import PlansDetails from "../components/plans/plansDetails";
import PlansFloor from "../components/plans/plansFloor";

function Plans({ t }) {
  const [active, setActive] = useState(0);
  return (
    <main className="mx-7px">
      <Head title={t("title")} />
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto lg:gap-x-32">
        <div className="col-span-2 lg:col-span-2">
          <PlansDetails activeState={[active]} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <HousePlans active={active} setActive={setActive} />
        </div>
        <div className="col-span-3">
          <PlansFloor activeState={[active]} />
        </div>
      </div>
    </main>
  );
}

Plans.propTypes = {
  t: PropTypes.func.isRequired,
};
Plans.getInitialProps = async () => ({
  namespacesRequired: ["navigation", "plans"],
});

export default withTranslation("plans")(Plans);
