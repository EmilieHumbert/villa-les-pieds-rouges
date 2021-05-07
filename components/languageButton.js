import classNames from "classnames";

import { useRouter } from "next/router";

export default function LanguageButton() {
  const languages = ["en", "fr"];
  const router = useRouter();

  return (
    <div className="content-start text-right lg:max-w-4xl">
      {languages.flatMap((locale, index) => {
        return [
          <button
            onClick={() =>
              router.push(router.asPath, router.asPath, { locale })
            }
            key={locale}
            type="button"
            className={classNames(
              "border-b-2 border-transparent capitalize focus:outline-none hover:text-gray-500 text-sm",
              {
                "border-red-900": router.locale === locale,
              }
            )}
          >
            {locale.toUpperCase()}
          </button>,
          index < languages.length - 1 ? " / " : null,
        ];
      })}
    </div>
  );
}
