import { useLocale } from "next-intl";
import { ServicesData } from "@/mock";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import { ScheduleButton } from "@/components/ScheduleButton";
import { getFormmattedPrice } from "@/utils/getFormattedPrice";
import { PHONE_NUMBER } from "@/constants";
import { ProjectsSection } from "@/components";
import { fetchProjects } from "@/contentful/projects";
import { draftMode } from "next/headers";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Services() {
  const locale = useLocale();
  const services = ServicesData;

  const projects = await fetchProjects({ preview: draftMode().isEnabled, locale: locale });

  return (
    <div className="font-mono bg-slate-800">
      <HeaderSection />
      <section className="font-sans mx-auto py-8 lg:py-16 max-w-screen-xl px-4 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Planos Website Profissional</h2>
          <p>Planos de criação de website, blog ou landingpage para que você possa mostrar aos seus clientes seus serviços, produtos ou negócio.</p>
        </div>

        {/* Card */}
        <div className="space-y-8 lg:grid sm:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {services[locale].map((item, index) => (
            <div key={index} className="grid  p-6 shadow mx-auto max-w-lg text-center text-white bg-sky-900 rounded-lg border border-slate-800 xl:p-8">
              <div className="items-baseline">
                <h3 className="mb-4 text-2xl font-extrabold">{item.title}</h3>
                <p className="font-light text-gray-300 sm:text-lg text-center">{item.description}</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl font-extrabold">{getFormmattedPrice({ lang: locale, price: item.price })}</span>
                </div>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left flex flex-col items-start content-start">
                {item.features.map((feat, index) => (
                  <li key={index} className="space-x-3">
                    <div className="flex mb-1">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span className="ml-2">{feat.title}</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-xs text-justify">{feat.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-end content-end">
                <ScheduleButton message={item.whatsappMessage} action={PHONE_NUMBER} language={locale} />
              </div>
            </div>
          ))}
        </div>

        <p className="my-8 font-light text-gray-300 sm:text-lg text-center">* Pagamentos no PIX, Boleto ou Cartão em até 12x com juros da transação.</p>
        <p className="my-8 font-light text-gray-300 sm:text-lg text-center">* Hospedagem e Domínio não estão inclusos nos planos, mas fique tranquilo! Nós cuidamos de tudo para você!</p>
      </section >
      <ProjectsSection projects={projects} />
      <FooterSection />
    </div >
  );
}
