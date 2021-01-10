import PropTypes from "prop-types";
import classNames from "classnames";

import { withTranslation } from "../i18n";

function LanguageButton({ i18n }) {
  const languages = ["en", "fr"];

  return (
    <div className="container flex justify-end mt-10">
      {languages.flatMap((language, index) => {
        return [
          <button
            onClick={() => i18n.changeLanguage(language)}
            type="button"
            className={classNames(
              "capitalize hover:text-gray-500 text-lg border-b-2 border-white",
              {
                "border-red-900 font-bold": i18n.language === language,
              }
            )}
          >
            {language.toUpperCase()}
          </button>,
          index < languages.length - 1 ? " / " : null,
        ];
      })}
    </div>
  );
}

LanguageButton.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("navigation")(LanguageButton);
