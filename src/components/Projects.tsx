'use client';
import { getProjects } from "@/utils/getProjects";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div className="bg-sky-900 py-20 sm:py-24">
      <div className="mx-4 max-w-7x1 px-12 lg:px-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">Example projects that I have already created.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {getProjects.map((item, index) => (
            <article key={index} className="flex max-wl flex-col items-start justify-between">

              <div className="mx-auto flex justify-center content-center items-center gap-x-1">
                <Image src={item.logo} alt="" className="rounded-3xl" />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-100">
                  <span className="absolute inset-0" />
                  {item.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200 text-justify">{item.description}</p>
              </div>
              <div className="mt-5 flex justify-around items-center content-between gap-x-4 text-xs">
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-bold text-sm text-sky-800 hover:bg-gray-100">
                  {item.technology}
                </p>
                <a href={item.link} className="font-semibold text-slate-800 text-base hover:text-black">
                  <span className="absolute inset-0" aria-hidden="true" />
                  meet this project <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
