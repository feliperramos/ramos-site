"use client";
import { FormEvent, useState } from "react";

import { FooterSection, HeaderSection } from "@/components";

interface ContactFormProps {
  fullName: string;
  email: string;
  subject: string;
  contactType: string;
  message: string;
}


export default function ContactMe() {
  const [formData, setFormData] = useState<ContactFormProps>({
    fullName: "",
    email: "",
    subject: "",
    contactType: "Business",
    message: "",
  });
  const [validation, setValidation] = useState<Boolean | string>("");

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/sendmail', { method: "POST", body: JSON.stringify(formData) });

    if (response.ok)
      return setValidation(response.ok);
    return setValidation(false);
  }

  return (
    <div className="font-mono bg-slate-900 ">
      <HeaderSection />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Me</h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="fullName"
              className="shadow-sm bg-white/5 border-0.5 border-white/10 text-gray-300 text-sm rounded-md focus:ring-sky-600 focus:border-primary-500 block w-full p-2.5 placeholder:text-gray-600"
              placeholder="John Doe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="shadow-sm bg-white/5 border-0.5 border-white/10 text-gray-300 text-sm rounded-md focus:ring-sky-600 focus:border-primary-500 block w-full p-2.5 placeholder:text-gray-600"
              placeholder="email@example.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <input
              required
              type="text"
              name="subject"
              id="subject"
              autoComplete="off"
              className="shadow-sm bg-white/5 border-0.5 border-white/10 text-gray-300 text-sm rounded-md focus:ring-sky-600 focus:border-primary-500 block w-full p-2.5 placeholder:text-gray-600"
              placeholder="Subject"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contactType" className="block mb-2 text-sm font-medium text-gray-300">Type of Contact</label>
            <select
              id="contactType"
              name="contactType"
              className="shadow-sm bg-white/5 text-gray-300 text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:border-white/10 dark:placeholder-gray-300 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            >
              <option className="text-gray-600 bg-white/5" value="Business">Business</option>
              <option className="text-gray-600 bg-white/5" value="Freelancer">Freelancer</option>
              <option className="text-gray-600 bg-white/5" value="Personal">Personal</option>
              <option className="text-gray-600 bg-white/5" value="Hobby">Hobby</option>
              <option className="text-gray-600 bg-white/5" value="Take a Time">Take a time</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-300 bg-white/5 rounded-md shadow-sm border-0.5 border-white/10 focus:ring-sky-600 focus:border-sky-600 dark:placeholder-gray-400 dark:text-gray-300"
              placeholder="Leaver a message..."
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="flex-none rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus:visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Send message
          </button>

          {validation === true &&
            (
              <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Email sent Successfully</span> I will contact soon.
                </div>
              </div>
            )}
          {validation === false &&
            (
              <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Error to send Email</span> Change a few things up and try submitting again.
                </div>
              </div>
            )}
        </form>
      </div>
      <FooterSection />
    </div>
  )
}
