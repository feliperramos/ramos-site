'use client'
import { getRouteName } from "@/utils/getRouteName";
import { getSocialMedia } from "@/utils/getSocialMedia";
import { useTranslations } from 'next-intl';

export default function FooterSection() {
  const commonStrings = getRouteName();
  const t = useTranslations('footer');

  return (
    <footer className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('title')}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">{t('description')}</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email:
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-8"
                placeholder={t('placeholder')}
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus:visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {t('buttonSend')}
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">{t('titleMenu')}</dt>
              {commonStrings
                .filter((item) => item.visible === true)
                .map((item, index) => (
                  <a key={index} href={item.link}>
                    <dd className="mt-2 leading-7 text-gray-300 hover:text-sky-600">{item.value}</dd>
                  </a>
                ))}
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-white">{t('titleSocialMedia')}</dt>
              {getSocialMedia.map((item, index) => (
                <a key={index} href={item.link}>
                  <dd className="mt-2 leading-7 text-gray-300 text-xs hover:text-sky-600">
                    <item.icon width="32px" height="32px" className="mr-2" />{item.title}
                  </dd>
                </a>
              ))}

              <dt className="mt-4 font-semibold text-white">{t('madeDescription')}</dt>
              <dt className="font-semibold text-white">{t('madeDescription2line')}<a className="hover:text-sky-600" href="https://nextjs.org">{' Next.js'}</a></dt>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </footer>
  )
}
