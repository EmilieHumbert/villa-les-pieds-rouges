import React, { useState } from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PlansDetails from "../components/plans/plansDetails";
import PlansFloor from "../components/plans/plansFloor";

function Plans() {
  const { t } = useTranslation("plans");
  const [active, setActive] = useState(0);

  return (
    <main className="mx-7px">
      <Head title={t("title")} />
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto lg:gap-x-32">
        <div className="col-span-3 mb-8">
          <PlansFloor activeState={[active]} setActive={setActive} />
        </div>
        <div className="col-span-2 lg:col-span-3">
          <PlansDetails activeState={[active]} setActive={setActive} />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["plans", "navigation"])),
  },
});

export default Plans;
