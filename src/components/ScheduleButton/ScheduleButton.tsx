"use client"
import { WhatsApp } from "@material-ui/icons";

interface ScheduleButton {
  action: string;
  message?: string;
  language?: string;
}

export default function ScheduleButton({ action, message, language }: ScheduleButton) {
  const encodeMessage = encodeURI(message!)
  const redirect = () => window.location.href = `https://wa.me/${action}?text=${encodeMessage}`;

  return (
    <button
      type="button"
      className="text-white lg:text-xl bg-sky-700 hover:bg-sky-600 focus:ring-4 focus:ring-sky-400 font-semibold rounded-xl text-lg py-4 min-w-full font-questrial"
      onClick={redirect}
    >
      <WhatsApp className="text-white h-12 w-12 float-left mx-4" aria-hidden="true" />
      {language === "pt-BR" ?
        (<span className="-ml-4">Entre em Contato</span>) :
        (<span className="-ml-4">Contact</span>)}
    </button>
  );
}
