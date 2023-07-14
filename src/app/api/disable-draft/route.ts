import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  draftMode().disable();

  redirect(searchParams.get("redirect") || "/");
}
