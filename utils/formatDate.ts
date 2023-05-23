const formatDate = (memoryDate: string, type: "numeric" | "long") => {
  const date = new Date(memoryDate);
  const formatedDate = date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: type,
    year: "numeric",
    timeZone: "UTC"
  });

  return formatedDate;
};

export default formatDate;
