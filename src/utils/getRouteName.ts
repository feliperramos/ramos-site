import { useLocale, useTranslations } from "next-intl";

export const getRouteName = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("header");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  return [
    {
      link: `${locale}/resume`,
      value: t("menu.resume"),
    },
    {
      link: `${locale}/blog`,
      value: t("menu.blog"),
    },
    {
      link: `${locale}/projects`,
      value: t("menu.projects"),
    },
    {
      link: `${locale}/contact`,
      value: t("menu.contactMe"),
    },
    {
      link: `${locale}/about-me`,
      value: t("menu.aboutMe"),
    },
  ];
};
