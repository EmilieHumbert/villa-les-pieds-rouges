import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MyCarousel from "../components/myCarousel";

function Home() {
  const router = useRouter();
  const { t } = useTranslation("home");

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <MyCarousel
          slideNames={[
            "frontHouse",
            "backHouse",
            "laSud",
            "kitchen",
            "livingroom",
            "livingroomSunset",
          ]}
        />
      </div>
      <div className=" mx-auto max-w-xl lg:max-w-4xl text-center text-base sm:text-lg md:text-xl mt-32">
        {t("intro")}
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "navigation"])),
  },
});

export default Home;
