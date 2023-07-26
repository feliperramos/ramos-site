import { sendEmail } from "@/libs/sendmail/sendmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { fullName, email, subject, contactType, message, lang } =
    await request.json();

  try {
    await sendEmail({
      fullName: fullName,
      to: email,
      contactType: contactType,
      subject: subject,
      message: message,
      lang,
    });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
