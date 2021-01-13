import PropTypes from "prop-types";

import { withTranslation } from "../i18n";
import LanguageButton from "./languageButton";

function Footer({ i18n }) {
  return <LanguageButton />;
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("navigation")(Footer);
