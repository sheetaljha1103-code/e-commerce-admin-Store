import { Size } from "@/public/types";

const storeId = process.env.NEXT_PUBLIC_STORE_ID;

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  // console.log("SIZES URL =", URL);

  const res = await fetch(URL, {
    cache: "no-store",
  });

  // console.log("SIZES STATUS =", res.status);

  const text = await res.text();

  // console.log("SIZES RESPONSE =", text);

  if (!res.ok) {
    throw new Error(`Failed to fetch sizes: ${res.status}`);
  }

  return JSON.parse(text);
};

export default getSizes;