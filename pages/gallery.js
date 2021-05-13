import Head from "next/head";
import { useRouter } from "next/router";

import MyGallery from "../components/myGallery";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Gallery() {
  const router = useRouter();
  const { t } = useTranslation("gallery");

  return (
    <main>
      <Head>
        <title>Gallery</title>
      </Head>
      <MyGallery />
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["gallery", "navigation"])),
  },
});

export default Gallery;
