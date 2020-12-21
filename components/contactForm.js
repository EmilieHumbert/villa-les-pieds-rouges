import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
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
    <main>
      <div className="max-w-lg max-w-xs bg-gary-50 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
        <h1 className="text-center font-extrabold -mt-3 text-3xl">
          Contact us
        </h1>
        {complete ? (
          <div>Done!</div>
        ) : (
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="fullName"
                  placeholder="Full Name"
                  ref={register({ required: true })}
                  type="text"
                />
                {errors.fullName && <p>This is required</p>}
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="_replyto"
                  placeholder="Email"
                  ref={register({ required: true })}
                  type="email"
                />
                {errors._replyto && <p>This is required</p>}
              </div>
              <div className="mb-6">
                <textarea
                  className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  placeholder="Message"
                  ref={register({ required: true })}
                />
                {errors.message && <p>This is required</p>}
              </div>
              <input
                name="_subject"
                ref={register}
                type="hidden"
                value="New message from villaLesPiedsRouges.fr"
              ></input>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting || isSubmitSuccessful}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSubmitSuccessful
                    ? "Submitted"
                    : "Submit"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
