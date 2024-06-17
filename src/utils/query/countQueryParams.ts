export const countQueryParams = (searchParams: URLSearchParams): number => {
  const paramNames = Array.from(searchParams.keys());
  let count = paramNames.length;

  if (paramNames.includes("page")) {
    count--;
  }

  return count;
};
