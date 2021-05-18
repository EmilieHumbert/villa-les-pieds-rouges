import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactForm from "../components/contact/contactForm";

function Contact() {
  const { t } = useTranslation("contact");

  return (
    <main className="mx-7px">
      <Head title={t("title")}></Head>
      <div className="grid grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-x-32 w-mobile mb-8 sm:mb-20">
        <ContactForm />
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "navigation"])),
  },
});

export default Contact;
