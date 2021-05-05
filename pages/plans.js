import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";
import HousePlans from "../components/plans/plansHouse";

function Plans({ t }) {
  return (
    <main className="mx-7px">
      <Head title={t("title")} />
      <HousePlans />
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
