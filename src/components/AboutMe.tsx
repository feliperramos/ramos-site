import Image from "next/image";
import MySelfImage from "../../public/images/myself.jpg"

export default function AboutMeSection() {
  return (
    <div className="overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto grid justify-between max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold trackin-tight text-sky-800 sm:text-4xl">About Me</p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                My Name is Felipe Ramos. I am a FrontEnd Developer and I create this site for you to know more about myself.
              </p>
            </div>
          </div>
          <div className="flex lg:justify-end md:flex-row md:justify-center">
            <Image
              src={MySelfImage}
              alt="Felipe Ramos"
              className="w-[12rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
              width={520}
              height={780}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
