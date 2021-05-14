import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactForm from "../components/contact/contactForm";

function Contact() {
  const { t } = useTranslation("contact");

  return (
    <main className="mx-7px">
      <Head title={t("title")}>
        {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
      </Head>
      <div className="grid grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-x-32 w-mobile">
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
