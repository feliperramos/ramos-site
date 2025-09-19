// src/app/api/send-playtest/route.ts
import { EmailTemplate } from "@/template/PlaytestEmailTemplate";
import { GMAIL_APP_PASSWORD, EMAIL } from "@/constants";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, platform, country, gamerType, message, ...utm } = body;

    const EMAIL = process.env.PUBLIC_EMAIL;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

    if (!EMAIL || !GMAIL_APP_PASSWORD) {
      console.error("Missing mail envs");
      return NextResponse.json(
        { ok: false, error: "Missing envs" },
        { status: 500 }
      );
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
      replyTo: email,
      subject: "Inscrição – PuzzleArena Playtest",
      html: EmailTemplate(body),
    };

    await new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => (err ? reject(err) : resolve()));
    });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("send-playtest error", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "unknown" },
      { status: 500 }
    );
  }
}
