import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";
import ContactForm from "../components/contact/contactForm";
import ContactDetails from "../components/contact/contactDetails";

function Contact({ t }) {
  return (
    <main className="mx-7px">
      <Head title={t("title")}>
        {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-x-32 w-mobile">
        <ContactForm />
        <div className="col-span-2 lg:col-span-1 lg:row-start-1 lg:row-span-3 lg:col-start-3 lg:w-sm">
          <ContactDetails />
        </div>
      </div>
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
