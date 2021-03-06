import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import MyGallery from "../components/myGallery";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Gallery() {
  const router = useRouter();
  const { t } = useTranslation("gallery");

  return (
    <main className="mx-7px">
      <Head title={t("title")}>
        <title>Gallery</title>
      </Head>
      <div className="mb-8 sm:mb-20">
        <MyGallery />
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["gallery", "navigation"])),
  },
});

export default Gallery;
