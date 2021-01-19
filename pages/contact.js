import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";
import ContactForm from "../components/contactForm";

function Contact({ t }) {
  return (
    <main>
      <Head title={t("title")} />
      <ContactForm />
    </main>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};
Contact.getInitialProps = async () => ({
  namespacesRequired: ["contact", "navigation"],
});

export default withTranslation("contact")(Contact);
