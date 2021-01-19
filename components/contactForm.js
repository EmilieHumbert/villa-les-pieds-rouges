import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

function ContactForm({ t }) {
  const { handleSubmit, errors, formState, register } = useForm({
    defaultValues: {},
  });
  const { isSubmitSuccessful, isSubmitting } = formState;

  const [complete, setcomplete] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("https://formspree.io/f/xeqprbrl", data)
      .then((response) => setcomplete(true))
      .catch((error) => console.log("error"));
  };
  return (
    <>
      <h1 className="border-b-2 border-red-900 col-span-2 font-bold mb-8 text-2xl">
        {t("title")}
      </h1>
      {complete ? (
        <div>{t("submit")}</div>
      ) : (
        <>
          <div className="col-span-2">
            <p className="leading-normal mb-8 text-xl tracking-wide">
              {t("text")}
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                  {t("full-name")}
                </label>
                <input
                  className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                  name="fullName"
                  placeholder={t("full-name-example")}
                  ref={register({ required: true })}
                  type="text"
                />
                {errors.fullName && <p>{t("required")}</p>}
              </div>
              <div className="mb-6">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  {t("email")}
                </label>
                <input
                  className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                  name="_replyto"
                  placeholder={t("email-example")}
                  ref={register({ required: true })}
                  type="email"
                />
                {errors._replyto && <p>{t("required")}</p>}
              </div>
              <div className="mb-6">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  {t("message")}
                </label>
                <textarea
                  className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                  name="message"
                  placeholder="Message"
                  ref={register({ required: true })}
                  rows="6"
                />
                {errors.message && <p>{t("required")}</p>}
              </div>
              <input
                name="_subject"
                ref={register}
                type="hidden"
                value="New message from villaLesPiedsRouges.fr"
              ></input>
              <div className="flex items-center justify-between">
                <button
                  className="border-2 border-red-900 text-red-900 font-bold hover:border-red-800 hover:text-red-800 mb-8 px-4 py-2 rounded text-white uppercase"
                  type="submit"
                  disabled={isSubmitting || isSubmitSuccessful}
                >
                  {isSubmitting
                    ? t("submitting")
                    : isSubmitSuccessful
                    ? t("submitted")
                    : t("submit-button")}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

ContactForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("contact")(ContactForm);
