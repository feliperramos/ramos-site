export const getFormattedDate = (date: string | null) => {
  const dateTyping = new Date(date);

  const day = dateTyping.getDate().toString().padStart(2, "0");
  const month = (dateTyping.getMonth() + 1).toString().padStart(2, "0");
  const year = dateTyping.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
