import { useLocale, useTranslations } from "next-intl";

export const getRouteName = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("header");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  return [
    {
      link: "/services",
      value: t("menu.services"),
      visible: false,
    },
    {
      link: `/resume`,
      value: t("menu.resume"),
      visible: true,
    },
    {
      link: `/blog`,
      value: t("menu.blog"),
      visible: true,
    },
    {
      link: `/projects`,
      value: t("menu.projects"),
      visible: false,
    },
    {
      link: `/contact-me`,
      value: t("menu.contactMe"),
      visible: true,
    },
    {
      link: `/about-me`,
      value: t("menu.aboutMe"),
      visible: false,
    },
  ];
};
