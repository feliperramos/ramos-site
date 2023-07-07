import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { CONTENTFUL_PREVIEW_SECRET } from "@/constants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("previewSecret") !== CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  redirect(searchParams.get("redirect") || "/");
}
