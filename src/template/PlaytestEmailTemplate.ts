import type { PlaytestForm } from "@/types/puzzlearena";

export function EmailTemplate(d: PlaytestForm) {
  const rows = [
    ["Nome", d.name],
    ["Email", d.email],
    ["Plataforma", d.platform],
    ["País", d.country ?? "-"],
    ["Perfil", d.gamerType ?? "-"],
    ["Canal", d.channel ?? "-"],
    ["UTM Source", d.utm_source ?? "-"],
    ["UTM Medium", d.utm_medium ?? "-"],
    ["UTM Campaign", d.utm_campaign ?? "-"],
    ["UTM Content", d.utm_content ?? "-"],
    ["Mensagem", d.message ?? "-"],
  ];

  const tr = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #eee"><b>${k}</b></td><td style="padding:8px 12px;border:1px solid #eee">${String(
          v ?? ""
        ).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:auto">
    <h2>Nova inscrição – PuzzleArena</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px">${tr}</table>
    <p style="color:#777;margin-top:16px">Enviado automaticamente pelo site.</p>
  </div>`;
}
