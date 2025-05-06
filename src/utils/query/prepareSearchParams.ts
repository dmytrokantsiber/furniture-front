export const prepareSearchParams = (searchParams: URLSearchParams): string => {
  if (!searchParams.get("page")) {
    searchParams.append("page", "1");
  }
  if (!searchParams.get("sort")) {
    searchParams.append("sort", "default");
  }
  searchParams.sort();
  let result = "";
  searchParams.forEach((param, key) => {
    const wordsArray = param.split(",").map((word) => word.trim());
    const sortedArray = wordsArray.sort();
    const sortedString = sortedArray.join(",");
    result += `${key}=${sortedString}&`;
  });

  return result;
};
