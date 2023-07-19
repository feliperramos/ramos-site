'use client'
import Image from "next/image";
import MySelfImage from "../../public/images/myself.jpg"
import { getTechnologies } from '@/utils/getTechnologies';
import { useLocale, useTranslations } from 'next-intl';

export default function AboutMeSection() {

  const locale = useLocale();

  const t = useTranslations('aboutMe');

  return (
    <div className="relative isolate overflow-hidden bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto grid justify-between max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold trackin-tight text-sky-800 sm:text-4xl">{t('title')}</p>
              <span className="mt-6 text-lg leading-8 text-gray-400 text-justify">
                {t.rich('description', { item: (chunck) => <p>{chunck}</p> })}
              </span>

              <div className="grid grid-cols-2 my-5">
                {getTechnologies.map((item, index) => (
                  <div key={index} className="m-2 flex flex-row items-center">
                    {item.icon({ width: '48px', height: '48px', color: "rgb(7 89 133)" })}
                    <p className="text-center mx-2">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href={`${locale}/about-me`} className="font-semibold text-sky-800">
                  <span className="absolute inset-0" aria-hidden="true">
                  </span>{t('button')} <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end md:flex-row md:justify-center">
            <Image
              src={MySelfImage}
              alt="Felipe Ramos"
              className="w-[16rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[24rem] md:-ml-4 lg:-ml-0"
              width={1040}
              height={1560}
            />
          </div>
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
    </div >
  );
}
