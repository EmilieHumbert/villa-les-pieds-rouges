import Head from "next/head";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";
import KeyDates from "../components/aboutKeyDates";
import AboutTheVilla from "../components/aboutTheVilla";
import AboutUs from "../components/aboutUs";

function About({ t }) {
  return (
    <main>
      <Head title={t("title")} />
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-7px sm:mx-auto lg:gap-32">
        <div className="col-span-2">
          <AboutTheVilla />
          <br />
          <AboutUs />
        </div>
        <div className="col-span-1">
          <KeyDates />
        </div>
      </div>
    </main>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};
About.getInitialProps = async () => ({
  namespacesRequired: ["about", "navigation"],
});

export default withTranslation("about")(About);
