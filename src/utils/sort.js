export const sort = (data, sortType) => {
  data.sort((a, b) => {
    if (sortType === "characterAZ") {
      return a.character > b.character ? 1 : -1;
    } else if (sortType === "characterZA") {
      return b.character > a.character ? 1 : -1;
    } else if (sortType === "quoteAZ") {
      return a.quote > b.quote ? 1 : -1;
    } else if (sortType === "quoteAZ") {
      return b.quote > a.quote ? 1 : -1;
    }
  });

  return data;
};
