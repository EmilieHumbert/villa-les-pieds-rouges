import { Link } from '../i18n';
import { useRouter } from "next/router";
import classNames from "classnames";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const getHref = (page) => (page === "gallery" ? "/" : `/${page}`);

function Navigation({ t, i18n }) {
  const router = useRouter();
  const pages = ["gallery", "plans", "about", "contact"];

  return (
    <nav className="flex items-end justify-start mx-auto max-w-xl lg:max-w-4xl mt-20 mb-32 space-x-10 sm:space-x-18 lg:space-x-30">
      <Link href="/">
        <a className="font-black grid grid-rows-2 h-16 hover:text-red-800 text-3xl text-red-900 w-50">
          <div>
            Villa
            <br />
            les pieds rouges
          </div>
        </a>
      </Link>
      {pages.map((page) => {
        const isActivePage = router.pathname === getHref(page);
        return (
          <Link key={page} href={getHref(page)}>
            <a
              className={classNames(
                "capitalize hover:text-gray-500 text-lg border-b-2 border-white",
                {
                  "border-red-900": isActivePage,
                }
              )}
            >
              {t(page)}
            </a>
          </Link>
        );
      })}
      <button
        className={"focus:ring"}
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
        }
        type="button"
      >
        <span
          className={classNames(
            "capitalize hover:text-gray-500 text-lg border-b-2 border-white",
            {
              "border-red-900 font-bold": i18n.language === "en",
            }
          )}
        >
          EN
        </span>
        /
        <span
          className={classNames(
            "capitalize hover:text-gray-500 text-lg border-b-2 border-white",
            {
              "border-red-900 font-bold": i18n.language === "fr",
            }
          )}
        >
          FR
        </span>
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("navigation")(Navigation);
