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
        <h1 className="border-b-2 border-red-900 col-span-2 font-bold mb-8 text-2xl">
          Contact us
        </h1>
        {complete ? (
          <div>Done!</div>
        ) : (
          <>
            <div className="col-span-2">
              <p className="leading-normal mb-8 text-xl tracking-wide">
                Please send us a message if you have any questions. We will be
                happy to get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                    Full Name
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                    name="fullName"
                    placeholder="John Smith"
                    ref={register({ required: true })}
                    type="text"
                  />
                  {errors.fullName && <p>This is required</p>}
                </div>
                <div className="mb-6">
                  <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                    name="_replyto"
                    placeholder="johnSmith@awesome.com"
                    ref={register({ required: true })}
                    type="email"
                  />
                  {errors._replyto && <p>This is required</p>}
                </div>
                <div className="mb-6">
                  <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
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
                    className="border-2 border-red-900 text-red-900 font-bold hover:bg-red-900 hover:text-white mb-8 px-4 py-2 rounded text-white"
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
            <div className="col-span-1 lg:row-start-1 lg:row-span-3 lg:col-start-3 w-md lg:w-sm">
              <h1 className="border-b-2 border-red-900 font-bold mb-8 text-2xl">
                Details
              </h1>
              <div className="leading-normal mb-8 text-xl tracking-wide">
                les pieds rouge, Hossegor, France (
                <a
                  href="https://www.google.com/maps/@43.6639574,-1.4436666,646m/data=!3m1!1e3?hl=en"
                  target="_blank"
                >
                  Google Map
                </a>
                )
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
