import sendEmail from "@sendgrid/mail";
import dedent from "dedent";

sendEmail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { fullName, email, message } = req.body;

  const text = dedent`
    You have a new message from la Villa les Pieds Rouges!

    Name: ${fullName}
    Email: ${email}
    Message:
    ${message}
  `;
  const msg = {
    to: process.env.CONTACT_EMAIL_TO,
    from: process.env.CONTACT_EMAIL_FROM,
    reply_to: email,
    subject: "Message about Villa",
    text,
  };

  try {
    await sendEmail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    return res.status(500).end();
  }

  return res.status(200).end();
};
