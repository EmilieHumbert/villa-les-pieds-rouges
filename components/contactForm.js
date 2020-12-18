import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
  const { handleSubmit, errors, formState, register } = useForm({
    defaultValues: {},
  });
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {
    axios
      .get("https://formspree.io/f/xeqprbrl")
      .then((response) => {
        console.log("Thank you,your request has been submitted.");
      })
      .catch((error) => console.log("error"));
  };
  return (
    <main>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" ref={register({ required: true })} type="text" />
        {errors.fullName && <p>This is required</p>}
        <label htmlFor="email">Email</label>
        <input
          name="_replyto"
          ref={register({ required: true })}
          type="email"
        />
        {errors._replyto && <p>This is required</p>}
        <label htmlFor="message">Message</label>
        <textarea name="message" ref={register({ required: true })} />
        {errors.message && <p>This is required</p>}
        <input
          name="_subject"
          ref={register}
          type="hidden"
          value="New message from villaLesPiedsRouges.fr"
        ></input>
        <button type="submit" disabled={isSubmitting || isSubmitSuccessful}>
          {isSubmitting
            ? "Submitting..."
            : isSubmitSuccessful
            ? "Submitted"
            : "Submit"}
        </button>
      </form>
    </main>
  );
}
