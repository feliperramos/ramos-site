"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { SVGProps } from "react";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import type { PlaytestForm } from "@/types/puzzlearena";
import { sendPlaytest } from "@/utils/sendPlaytest";
import { HeaderSection, FooterSection } from "@/components";
import { Tomorrow } from "next/font/google";
const tomorrow = Tomorrow({ subsets: ["latin"], weight: ["400", "700", "800"] });

/* ———————————————————— instagram ———————————————————— */
const IG_HANDLE = "@puzzlearenagame";
const IG_URL = "https://www.instagram.com/puzzlearenagame";
const buildIgLink = (place: string) =>
  `${IG_URL}?utm_source=site&utm_medium=social&utm_campaign=landing&utm_content=${place}`;

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

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

function PhoneShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-[2rem] border border-white/10 bg-[#0e0e0e] p-2 shadow-2xl">
      <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl bg-black/80 border-x border-b border-white/10 z-10" />
      <div className="relative aspect-[9/19.5] rounded-[1.6rem] overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
      </div>
    </div>
  );
}

/* ———————————————————— página ———————————————————— */
export default function PuzzleArenaLanding() {
  const sp = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("puzzleArena");

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
      platform: "ambas", // mantém o valor esperado pelo backend
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
    <div className={`${tomorrow.className} bg-[#121212] text-[#eeeeee]`}>
      <HeaderSection />

      {/* HERO */}
      <section className="px-6 pt-16 pb-10 mx-auto max-w-(--breakpoint-xl)">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2">
              <Pill>🧩 {t("hero.pills.sudoku")}</Pill>
              <Pill>🔗 {t("hero.pills.numberlink")}</Pill>
              <Pill>🧮 {t("hero.pills.n2048")}</Pill>
              <Pill>🧟‍♂️ {t("hero.pills.defense")}</Pill>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">{t("hero.headline")}</h1>
            <p className="mt-3 text-lg text-gray-300">
              {t.rich("hero.description", {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <a
              href="#inscricao"
              className="inline-block mt-6 rounded-md bg-[#9f86ff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#8f74ff]"
            >
              {t("hero.cta")}
            </a>

            {/* — Instagram button — */}
            <div className="mt-3">
              <a
                href={buildIgLink("hero_button")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-transparent px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
              >
                <InstagramIcon className="h-5 w-5" />
                <span>Seguir {IG_HANDLE}</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#444444] bg-[#1b1b1b]">
            <Image src="/images/puzzlearena/hero-2.png" alt={t("hero.imageAlt")} fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <Section title={t("howItWorks.title")}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#444444] bg-[#1b1b1b] p-5">
            <h3 className="text-lg font-bold">{t("howItWorks.step1.title")}</h3>
            <p className="mt-1 text-gray-300">{t("howItWorks.step1.p1")}</p>
            <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
              <li>{t("howItWorks.step1.b1")}</li>
              <li>{t("howItWorks.step1.b2")}</li>
              <li>{t("howItWorks.step1.b3")}</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#444444] bg-[#1b1b1b] p-5">
            <h3 className="text-lg font-bold">{t("howItWorks.step2.title")}</h3>
            <p className="mt-1 text-gray-300">{t("howItWorks.step2.p1")}</p>
            <p className="mt-3 text-sm text-gray-400">{t("howItWorks.step2.p2")}</p>
          </div>
          <div className="rounded-xl border border-[#444444] bg-[#1b1b1b] p-5">
            <h3 className="text-lg font-bold">{t("howItWorks.step3.title")}</h3>
            <p className="mt-1 text-gray-300">{t("howItWorks.step3.p1")}</p>
            <p className="mt-3 text-sm text-gray-400">{t("howItWorks.step3.p2")}</p>
          </div>
        </div>
      </Section>

      {/* OS JOGOS */}
      <Section title={t("games.title")}>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { key: "sudoku", img: "sudoku.png" },
            { key: "numberlink", img: "numberlink.png" },
            { key: "n2048", img: "2048.png" },
            { key: "defense", img: "defense.png" },
          ].map((g) => (
            <div key={g.key} className="rounded-xl overflow-hidden border border-[#444444] bg-[#1b1b1b]">
              <div className="relative aspect-[4/3] mt-4">
                <Image src={`/images/puzzlearena/${g.img}`} alt={t(`games.cards.${g.key}.title`)} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold">{t(`games.cards.${g.key}.title`)}</h3>
                <p className="text-sm text-gray-300">{t(`games.cards.${g.key}.line`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* POWER-UPS */}
      <Section title={t("powerups.title")}>
        <div className="flex flex-wrap gap-3">
          <Pill>{t("powerups.items.xp")}</Pill>
          <Pill>{t("powerups.items.freeze")}</Pill>
          <Pill>{t("powerups.items.hints")}</Pill>
          <Pill>{t("powerups.items.collectibles")}</Pill>
          <Pill>{t("powerups.items.events")}</Pill>
          <Pill>{t("powerups.items.skins")}</Pill>
        </div>
        <p className="mt-4 text-gray-300">
          {t.rich("powerups.text", {
            i: (chunks) => <i>{chunks}</i>,
          })}
        </p>
      </Section>

      {/* GALERIA */}
      <Section title={t("gallery.title")}>
        <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["shot1.png", "shot2.png", "shot3.png", "shot4.png", "shot5.png", "shot6.png"].map((f, i) => (
            <PhoneShot key={f} src={`/images/puzzlearena/${f}`} alt={t("gallery.screenshotAlt", { n: i + 1 })} />
          ))}
        </div>
      </Section>

      {/* MOTIVOS */}
      <Section title={t("betaWhy.title")}>
        <ul className="list-disc ml-5 text-gray-300 space-y-1">
          <li>{t("betaWhy.i1")}</li>
          <li>{t("betaWhy.i2")}</li>
          <li>{t("betaWhy.i3")}</li>
          <li>{t("betaWhy.i4")}</li>
        </ul>
      </Section>

      {/* FORM */}
      <Section id="inscricao" title={t("form.sectionTitle")}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  {t("form.labels.name")}
                </label>
                <input
                  id="name"
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder={t("form.placeholders.name")}
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  {t("form.labels.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder={t("form.placeholders.email")}
                  {...register("email", { required: true })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="platform" className="block mb-2 text-sm font-medium">
                    {t("form.labels.platform")}
                  </label>
                  <select
                    id="platform"
                    className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    {...register("platform", { required: true })}
                  >
                    <option value="ios">{t("form.options.platform.ios")}</option>
                    <option value="android">{t("form.options.platform.android")}</option>
                    <option value="ambas">{t("form.options.platform.both")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="gamerType" className="block mb-2 text-sm font-medium">
                    {t("form.labels.gamerType")}
                  </label>
                  <select
                    id="gamerType"
                    className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    {...register("gamerType")}
                  >
                    <option value="casual">{t("form.options.gamerType.casual")}</option>
                    <option value="midcore">{t("form.options.gamerType.midcore")}</option>
                    <option value="hardcore">{t("form.options.gamerType.hardcore")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium">
                  {t("form.labels.country")}
                </label>
                <input
                  id="country"
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder={t("form.placeholders.country")}
                  {...register("country")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  {t("form.labels.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow-xs bg-white/5 border border-white/10 text-gray-100 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 placeholder:text-gray-500"
                  placeholder={t("form.placeholders.message")}
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? t("form.buttons.sending") : t("form.buttons.submit")}
              </button>
            </form>

            {validate === true && (
              <div className="mt-4 flex items-center p-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                <span className="font-medium">{t("form.alerts.successTitle")}</span>&nbsp;{t("form.alerts.successBody")}
              </div>
            )}
            {validate === false && (
              <div className="mt-4 flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">{t("form.alerts.errorTitle")}</span>&nbsp;{t("form.alerts.errorBody")}
              </div>
            )}
          </div>

          <aside className="order-1 lg:order-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">{t("aside.title")}</h3>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                <li>{t("aside.i1")}</li>
                <li>{t("aside.i2")}</li>
                <li>{t("aside.i3")}</li>
                <li>{t("aside.i4")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <FooterSection />
    </div>
  );
}
