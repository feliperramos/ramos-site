interface PriceProps {
  lang: string;
  price: number | string;
}

export const getFormmattedPrice = ({ lang, price }: PriceProps) => {
  if (typeof price === "string") return price;

  let currency = lang === "pt-BR" ? "BRL" : "USD";

  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: currency,
  }).format(price);
};
