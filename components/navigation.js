import classNames from "classnames";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { Link, withTranslation } from "../i18n";

const getHref = (page) => (page === "gallery" ? "/" : `/${page}`);

function Navigation({ t, i18n }) {
  const router = useRouter();
  const pages = ["gallery", "plans", "about", "contact"];

  return (
    <nav className="flex items-end justify-between mx-auto max-w-xl lg:max-w-4xl mt-20 mb-32 space-x-10 sm:space-x-18 lg:space-x-30">
      <Link href="/">
        <a className="bg-red-900 hover:bg-red-800 font-sans h-24 sm:h-36 p-2 text-md sm:text-3xl text-white w-24 min-w-6rem sm:w-36 ">
          <div>
            Villa les Pieds Rouges
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
    </nav>
  );
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("navigation")(Navigation);
