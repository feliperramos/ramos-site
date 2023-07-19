import { useTranslations } from "next-intl";

export const getRouteName = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("header");

  return [
    {
      link: "/resume",
      value: t("menu.resume"),
    },
    {
      link: "/blog",
      value: t("menu.blog"),
    },
    {
      link: "/projects",
      value: t("menu.projects"),
    },
    {
      link: "/contact",
      value: t("menu.contactMe"),
    },
    {
      link: "/about-me",
      value: t("menu.aboutMe"),
    },
  ];
};
