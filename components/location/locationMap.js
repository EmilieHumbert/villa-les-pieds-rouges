import { useTranslation } from "next-i18next";

export default function LocationMap() {
  const { t } = useTranslation("location");
  
  return (
    <>
      <h1 className="border-b-2 border-red-900 font-bold mb-8 text-2xl">
        {t("locationMap-title")}
      </h1>
      <div className="leading-normal mb-8 text-xl tracking-wide">
        {t("locationMap-text")}
        <a
          href="https://www.google.com/maps/@43.6639574,-1.4436666,646m/data=!3m1!1e3?hl=en"
          target="_blank"
        >
          {t("locationMap-google-map-link")}
        </a>
        )
      </div>
    </>
  );
}
