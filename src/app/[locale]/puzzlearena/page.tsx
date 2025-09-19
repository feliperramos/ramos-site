"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import type { PlaytestForm } from "@/types/puzzlearena";
import { sendPlaytest } from "@/utils/sendPlaytest";
import { HeaderSection, FooterSection } from "@/components";
import { Tomorrow } from 'next/font/google';
const tomorrow = Tomorrow({ subsets: ['latin'], weight: ['400', '700', '800'] });

/* ———————————————————— micro componentes ———————————————————— */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#444444] bg-[#1b1b1b] px-3 py-1 text-sm text-gray-200">
      {children}
    </span>
  );
}
function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-12 mx-auto max-w-(--breakpoint-xl)">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/* ———————————————————— página ———————————————————— */
export default function PuzzleArenaLanding() {
  const sp = useSearchParams();
  const locale = useLocale();
  const [validate, setValidate] = useState<boolean | string>("");
  const [sending, setSending] = useState(false);

  const utm = useMemo(
    () => ({
      utm_source: sp.get("utm_source"),
      utm_medium: sp.get("utm_medium"),
      utm_campaign: sp.get("utm_campaign"),
      utm_content: sp.get("utm_content"),
      channel: sp.get("channel"),
    }),
    [sp]
  );

  const { register, handleSubmit, reset } = useForm<PlaytestForm>({
    defaultValues: {
      name: "",
      email: "",
      platform: "ambas",
      country: "",
      gamerType: "casual",
      message: "",
      ...utm,
    },
  });

  async function onSubmit(data: PlaytestForm) {
    try {
      setSending(true);
      const ok = await sendPlaytest({ ...data, ...utm });
      setValidate(ok);
      if (ok) reset({ platform: "ambas", gamerType: "casual", ...utm });
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    if (validate === true || validate === false) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [validate]);

  return (
    <div className={`bg-[#121212] text-[#eeeeee]`}>
      <HeaderSection />

      {/* HERO — curto, divertido, com CTA visível */}
      <section className="px-6 pt-16 pb-10 mx-auto max-w-(--breakpoint-xl)">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2">
              <Pill>🧩 Sudoku</Pill>
              <Pill>🔗 Numberlink</Pill>
              <Pill>🧮 2048</Pill>
              <Pill>🧟‍♂️ Defense</Pill>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              PuzzleArena (beta)
            </h1>
            <p className="mt-3 text-lg text-gray-300">
              Jogue puzzles rápidos, pegue loot, e use tudo para evoluir sua <b>Cidade</b>.
              Upgrades, boosts, colecionáveis e eventos sazonais. Tudo no mesmo lugar.
            </p>
            <a
              href="#inscricao"
              className="inline-block mt-6 rounded-md bg-[#9f86ff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#8f74ff]"
            >
              Entrar no beta fechado
            </a>
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#444444] bg-[#1b1b1b]">
            {/* troque por vídeo/gif do jogo */}
            <Image src="/images/puzzlearena/hero.png" alt="PuzzleArena" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — 3 passos, sem textão */}
      <Section title="Como funciona">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#444444] bg-[#1b1b1b] p-5">
            <h3 className="text-lg font-bold">1) Jogue</h3>
            <p className="mt-1 text-gray-300">Partidas rápidas nos seus puzzles favoritos.</p>
            <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
              <li>XP + Coins</li>
              <li>Moeda do jogo (ex.: Stones no Numberlink)</li>
              <li>Chance de colecionáveis</li>
            </ul>
          </div>
          <div className="rounded-xl border bborder-[#444444] bg-[#1b1b1b] p-5">
            <h3 className="text-lg font-bold">2) Pegue o loot</h3>
            <p className="mt-1 text-gray-300">Recompensas variam por dificuldade e desempenho.</p>
            <p className="mt-3 text-sm text-gray-400">Boost de XP? Assista um anúncio OU use item e dobre o ganho. 😎</p>
          </div>
          <div className="rounded-xl border border-[#444444] bg-[#1b1b1b] p-5">
            <h3 className="text-lg font-bold">3) Evolua a Cidade</h3>
            <p className="mt-1 text-gray-300">Gaste as moedas específicas para subir prédios.</p>
            <p className="mt-3 text-sm text-gray-400">Upgrades liberam bônus, skins e produção/hora.</p>
          </div>
        </div>
      </Section>

      {/* OS JOGOS — cards curtinhos */}
      <Section title="Os jogos do hub">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { img: "sudoku.png", title: "Sudoku", line: "Do fácil ao hardcore" },
            { img: "numberlink.png", title: "Numberlink", line: "Conecte sem cruzar" },
            { img: "2048.png", title: "2048", line: "Clássico + modifiers" },
            { img: "defense.png", title: "Defense", line: "Waves + upgrades" },
          ].map((g) => (
            <div key={g.title} className="rounded-xl overflow-hidden border border-[#444444] bg-[#1b1b1b]">
              <div className="relative aspect-[4/3]">
                <Image src={`/images/puzzlearena/${g.img}`} alt={g.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold">{g.title}</h3>
                <p className="text-sm text-gray-300">{g.line}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BOOSTS + PROGRESSO — em pílulas */}
      <Section title="Power-ups & progresso">
        <div className="flex flex-wrap gap-3">
          <Pill>⚡ XP Boost (x1.5 / x2)</Pill>
          <Pill>🧊 Freeze/Tempo extra</Pill>
          <Pill>💡 Dicas</Pill>
          <Pill>🎲 Colecionáveis raros</Pill>
          <Pill>🎯 Eventos com drop buff</Pill>
          <Pill>🏆 Skins e desbloqueios</Pill>
        </div>
        <p className="mt-4 text-gray-300">
          Vença → ganhe XP/coins/<i>moeda do jogo</i> → suba de nível → libere mais coisas.
          Alguns upgrades pedem itens de coleção (drop em partidas e eventos).
        </p>
      </Section>

      {/* MINI GALERIA — 3–6 prints só pra “vender” o visual */}
      <Section title="Um gostinho do visual">
        <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["shot1.png", "shot2.png", "shot3.png", "shot4.png", "shot5.png", "shot6.png"].map((f) => (
            <div key={f} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#444444] bg-[#1b1b1b]">
              <Image src={`/images/puzzlearena/${f}`} alt="Screenshot" fill className="object-cover" />
            </div>
          ))}
        </div>
      </Section>

      {/* POR QUE ENTRAR NO BETA — bullets curtos */}
      <Section title="Por que entrar no beta?">
        <ul className="list-disc ml-5 text-gray-300 space-y-1">
          <li>Acesso antecipado (iOS/Android)</li>
          <li>Recompensas exclusivas quando o jogo lançar</li>
          <li>Ajude a calibrar custos, boosts e eventos</li>
          <li>Canal direto pra palpitar (e a gente AMA isso)</li>
        </ul>
      </Section>

      {/* FORM */}
      <Section id="inscricao" title="Bora testar?">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                <input
                  id="name"
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder="Seu nome"
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder="voce@exemplo.com"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="platform" className="block mb-2 text-sm font-medium">Plataforma</label>
                  <select
                    id="platform"
                    className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    {...register("platform", { required: true })}
                  >
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="ambas">Ambas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="gamerType" className="block mb-2 text-sm font-medium">Perfil</label>
                  <select
                    id="gamerType"
                    className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    {...register("gamerType")}
                  >
                    <option value="casual">Casual</option>
                    <option value="midcore">Midcore</option>
                    <option value="hardcore">Hardcore</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium">País (opcional)</label>
                <input
                  id="country"
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder="Brasil"
                  {...register("country")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem (opcional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder="Dispositivos, horários, sugestões…"
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Enviando..." : "Quero participar"}
              </button>
            </form>

            {validate === true && (
              <div className="mt-4 flex items-center p-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                <span className="font-medium">Pronto!</span>&nbsp;Recebemos sua inscrição. Em breve mandamos o convite.
              </div>
            )}
            {validate === false && (
              <div className="mt-4 flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">Ops!</span>&nbsp;Não conseguimos enviar. Tenta de novo 🙏
              </div>
            )}
          </div>

          <aside className="order-1 lg:order-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">O que vem no beta</h3>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                <li>iOS e Android</li>
                <li>Recompensas exclusivas de fundador</li>
                <li>Skins temáticas e eventos de drop</li>
                <li>Canal de feedback com o time</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <FooterSection />
    </div>
  );
}
