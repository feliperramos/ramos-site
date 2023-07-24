import { createServerContext } from "react";

export const LanguageContext = createServerContext("language", {
  locale: "pt-BR" || "en-US",
});
