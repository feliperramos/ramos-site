import { useLocale, useTranslations } from "next-intl";

export const getRouteName = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("header");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  return [
    {
      link: `/resume`,
      value: t("menu.resume"),
      visible: true,
    },
    {
      link: `/blog`,
      value: t("menu.blog"),
      visible: false,
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
