import { Color } from "@/public/types";

const storeId = process.env.NEXT_PUBLIC_STORE_ID;

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`;

const getColors = async (): Promise<Color[]> => {
  // console.log("COLORS URL =", URL);

  const res = await fetch(URL, {
    cache: "no-store",
  });

  // console.log("COLORS STATUS =", res.status);

  const text = await res.text();

  // console.log("COLORS RESPONSE =", text);

  if (!res.ok) {
    throw new Error(`Failed to fetch colors: ${res.status}`);
  }

  return JSON.parse(text);
};

export default getColors;