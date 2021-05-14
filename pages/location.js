import Head from "next/head";

import LocationDescription from "../components/location/locationDescription";
import LocationMap from "../components/location/locationMap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Location() {
  const { t } = useTranslation("location");

  return (
    <main className="mx-7px">
      <Head title={t("location")} />
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto lg:gap-32">
        <div className="col-span-2">
          <LocationDescription />
        </div>
        <div className="col-span-1">
          <LocationMap />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["location", "navigation"])),
  },
});

export default Location;
