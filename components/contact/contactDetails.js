import PropTypes from "prop-types";

import { withTranslation } from "../../i18n";

function ContactDetails({ t }) {
  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 text-2xl">
        {t("details-title")}
      </h1>
      <div className="leading-normal mb-8 text-xl tracking-wide">
        {t("details-text")}
        <a
          href="https://www.google.com/maps/@43.6639574,-1.4436666,646m/data=!3m1!1e3?hl=en"
          target="_blank"
        >
          {t("details-google-map-link")}
        </a>
        )
      </div>
    </>
  );
}

ContactDetails.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("contact")(ContactDetails);
