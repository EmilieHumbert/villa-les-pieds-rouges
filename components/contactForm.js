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
      <div className="container grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-4xl mx-auto gap-x-32">
        <h1 className="border-b-2 border-red-900 col-span-2 font-bold mb-8 my-2 text-2xl">
          Contact us
        </h1>
        {complete ? (
          <div>Done!</div>
        ) : (
          <>
            <div className="col-span-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-700 w-full"
                    name="fullName"
                    placeholder="Full Name"
                    ref={register({ required: true })}
                    type="text"
                  />
                  {errors.fullName && <p>This is required</p>}
                </div>
                <div className="mb-6">
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-700 w-full"
                    name="_replyto"
                    placeholder="Email"
                    ref={register({ required: true })}
                    type="email"
                  />
                  {errors._replyto && <p>This is required</p>}
                </div>
                <div className="mb-6">
                  <textarea
                    className="appearance-none focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded text-gray-700 shadow w-full"
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
                    className="bg-red-900 focus:outline-none focus:shadow-outline font-bold hover:bg-blue-700 mb-8 px-4 py-2 rounded text-white"
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
            </div>{" "}
            <div className="border-b-2 border-red-900 col-span-1 lg:row-start-1 lg:col-start-3 font-bold mb-8 my-2 text-2xl w-md lg:w-sm">
              <h1>Details</h1>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
