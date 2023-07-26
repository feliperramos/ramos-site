import sendmail from "@sendgrid/mail";
import { SENDGRID_APIKEY, EMAIL } from "@/constants";
import { emailFormatted } from "./emailFormatted";

interface MailProps {
  fullName: string;
  to: string;
  subject: string;
  contactType: string;
  message: string;
}

export const sendEmail = async ({
  fullName,
  to,
  subject,
  contactType,
  message,
}: MailProps) => {
  sendmail.setApiKey(SENDGRID_APIKEY);

  const formattedEmail = emailFormatted({
    fullName: fullName,
    email: to,
    subject,
    contactType,
    message,
  });

  const msgEmail = {
    to,
    cc: EMAIL,
    from: EMAIL,
    subject,
    html: formattedEmail,
  };

  try {
    await sendmail.send(msgEmail);
  } catch (err) {
    console.error(err);
  }
};
