export const url =
  "https://private-anon-cd7c9bed64-goquotes.apiary-proxy.com/api/v1/random?count=1";

export const getQuoteData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
