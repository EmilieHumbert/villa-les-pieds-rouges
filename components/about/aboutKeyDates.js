import PropTypes from "prop-types";

import { withTranslation } from "../../i18n";

function KeyDates({ t }) {
  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 my-2 text-2xl">
        {t("title-dates")}
      </h1>
      <ul>
        <li className="leading-normal mb-8 text-lg tracking-wide">
          <b>{t("date-one")}</b> {t("date-one-text")}
        </li>
        <li className="leading-normal mb-8 text-lg tracking-wide">
          <b>{t("date-two")}</b> {t("date-two-text")}
        </li>
        <li className="leading-normal mb-8 text-lg tracking-wide">
          <b>{t("date-three")}</b> {t("date-three-text")}
        </li>
        <li className="leading-normal mb-8 text-lg tracking-wide">
          <b>{t("date-four")}</b> {t("date-four-text")}
        </li>
        <li className="leading-normal mb-8 text-lg tracking-wide">
          <b>{t("date-five")}</b> {t("date-five-text")}
        </li>
      </ul>
    </>
  );
}

KeyDates.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("about")(KeyDates);