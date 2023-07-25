import { FooterSection, HeaderSection } from "@/components"

export default function ContactMe() {
  return (
    <div className="font-mono">
      <HeaderSection />
      <form>
        <div className="mx-auto bg-slate-900 py-20 sm:py-24">
          <div className="flex flex-col items-center px-4 sm:px:0">
            <h2 className="text-base font-semibold leading-7">Contact Me</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="mx-auto mt-12">
              <label htmlFor="email" className="text-sm font-medium leading-6">
                Email
              </label>
              <div className="mt-6 flex rounded-md shadow-sm ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block flex-1 border-0 bg-white/5 px-3 py-2 text-gray-200 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="mx-auto mt-12">
              <label htmlFor="subject" className="text-sm font-medium leading-6">
                Subject
              </label>
              <div className="mt-6 flex rounded-md shadow-sm ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block flex-1 border-0 bg-white/5 px-3 py-2 text-gray-200 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <FooterSection />
    </div>
  )
}
