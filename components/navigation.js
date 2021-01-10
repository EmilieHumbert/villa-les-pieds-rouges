import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import PropTypes from "prop-types";

import { i18n, withTranslation } from "../i18n";

const getHref = (page) => (page === "gallery" ? "/" : `/${page}`);

function Navigation({ t }) {
  const router = useRouter();
  const pages = [t("gallery"), t("plans"), t("about"), t("contact")];

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
              className={classNames("capitalize hover:text-gray-500 text-lg", {
                "border-b-2 border-red-900": isActivePage,
              })}
            >
              {page}
            </a>
          </Link>
        );
      })}
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
        }
      >
        {t("change-locale")}
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("navigation")(Navigation);
