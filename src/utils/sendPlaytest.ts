import type { PlaytestForm } from "@/types/puzzlearena";

export async function sendPlaytest(data: PlaytestForm) {
  try {
    const res = await fetch("/api/send-playtest", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!res.ok) return false;
    await res.json();
    return true;
  } catch {
    return false;
  }
}
