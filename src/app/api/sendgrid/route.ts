import sendgrid from "@sendgrid/mail";
import { SENDGRID_APIKEY } from "@/constants";

sendgrid.setApiKey(SENDGRID_APIKEY);

export default async function sendEmail(req: Request, res: Response) {
  await sendgrid.send({
    to: "feliperramos@icloud.com",
    from: "feliperramos@icloud.com",
    subject: "TESTE",
    html: `<div>Teste Email send succesful</div>`,
  });
}
