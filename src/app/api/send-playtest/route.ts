// src/app/api/send-playtest/route.ts
import { EmailTemplate } from "@/template/PlaytestEmailTemplate";
import { GMAIL_APP_PASSWORD, EMAIL } from "@/constants";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!EMAIL || !GMAIL_APP_PASSWORD) {
      console.error("Missing mail envs");
      return Response.json({ ok: false }, { status: 500 });
    }

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL, pass: GMAIL_APP_PASSWORD },
    });

    const mailOptions: Mail.Options = {
      from: EMAIL,
      to: EMAIL,
      replyTo: data.email,
      subject: "Inscrição – PuzzleArena Playtest",
      html: EmailTemplate(data),
    };

    await new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => (err ? reject(err) : resolve()));
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("send-playtest error", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
