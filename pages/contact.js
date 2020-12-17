import Head from "next/head";

import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactForm />
    </>
  );
}
