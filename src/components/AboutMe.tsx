import Image from "next/image";
import MySelfImage from "../../public/images/myself.jpg"
import { getTechnologies } from '@/utils/getTechnologies';

export default function AboutMeSection() {
  return (
    <div className="overflow-hidden bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto grid justify-between max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold trackin-tight text-sky-800 sm:text-4xl">about me</p>
              <p className="mt-6 text-lg leading-8 text-gray-400 text-justify">
                {`My name is Felipe Ramos. I'm a Front End Developer and I created this site for you to know more about me.`}
                <br /><br />
                {`I've been working as a developer for over 5 years and I have experience in several technologies, but today my focus is mainly on these technologies:`}
              </p>

              <div className="grid grid-cols-2 my-5">
                {getTechnologies.map((item, index) => (
                  <div key={index} className="m-2 flex flex-row items-center">
                    {item.icon({ width: '48px', height: '48px', color: "rgb(7 89 133)" })}
                    <p className="text-center mx-2">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href="/about-me" className="font-semibold text-sky-800">
                  <span className="absolute inset-0" aria-hidden="true">
                  </span>and more <span aria-hidden="true">&rarr;</span></a>
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
    </div >
  );
}
