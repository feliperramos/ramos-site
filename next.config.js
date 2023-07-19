/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
  exportPathMap: function () {
    return {
      "/": { page: "/[locale]/" },
    };
  },
};

module.exports = nextConfig;
