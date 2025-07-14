import { transactionalEmailApi } from "../brevo/brevo.config.js";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to, subject, htmlContent) => {
  const sender = {
    name: process.env.BREVO_NAME,
    email: process.env.BREVO_REGISTERED_EMAIL,
  };

  try {
    await transactionalEmailApi.sendTransacEmail({
      sender,
      to: [{ email: to }],
      subject,
      htmlContent,
    });

    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Email send failed:", error);
    throw error;
  }
};

export default sendEmail;
