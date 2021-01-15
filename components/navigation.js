import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { Link, withTranslation } from "../i18n";
import LanguageButton from "../components/languageButton";

const getHref = (page) => (page === "gallery" ? "/" : `/${page}`);

function Navigation({ t, i18n }) {
  const router = useRouter();
  const pages = ["gallery", "plans", "about", "contact"];
  const [active, setActive] = useState(false);

  return (
    <nav className={"mx-7px"}>
      <div className="flex items-end justify-between mx-auto max-w-xl lg:max-w-4xl mt-m sm:mt-20 mt-8 mb-8 sm:mb-32 space-x-10 sm:space-x-18 lg:space-x-30">
        <Link href="/">
          <a className="bg-red-900 hover:bg-red-800 font-sans h-24 sm:h-36 p-2 text-md sm:text-3xl text-white w-24 min-w-6rem sm:w-36 ">
            <div>Villa les Pieds Rouges</div>
          </a>
        </Link>
        {pages.map((page) => {
          const isActivePage = router.pathname === getHref(page);
          return (
            <Link key={page} href={getHref(page)}>
              <a
                className={classNames(
                  "hidden sm:block capitalize hover:text-gray-500 text-lg border-b-2 border-white",
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
        <div className={"flex flex-col justify-between sm:hidden"}>
          <LanguageButton />
          <div className="relative">
            <button
              onClick={() => setActive(!active)}
              className="border-2 border-red-900 hover:border-red-800 font-bold px-4 py-2 rounded mt-6 text-red-900 hover:text-red-800 text-white uppercase"
            >
              Menu
            </button>
            <div className={"absolute flex flex-col w-menu"}>
              {active &&
                pages.map((page) => {
                  const isActivePage = router.pathname === getHref(page);
                  return (
                    <Link key={page} href={getHref(page)}>
                      <a
                        className={classNames(
                          "bg-white border-b-2 border-transparent bottom-0 capitalize focus:outline-none pl-2 hover:text-gray-500 text-md z-50",
                          {
                            "bg-gray-300": isActivePage,
                          }
                        )}
                      >
                        {t(page)}
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("navigation")(Navigation);
