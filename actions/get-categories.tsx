import { Category } from "@/public/types";

const storeId = process.env.NEXT_PUBLIC_STORE_ID;

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

const getCategories = async (): Promise<Category[]> => {
  // console.log("=================================");
  // console.log("GET CATEGORIES START");
  // console.log("API_URL =", process.env.NEXT_PUBLIC_API_URL);
  // console.log("STORE_ID =", storeId);
  // console.log("FETCH URL =", URL);

  const res = await fetch(URL, {
    cache: "no-store",
  });

  // console.log("STATUS =", res.status);

  const text = await res.text();

  // console.log("RAW RESPONSE =", text);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch categories: ${res.status}`
    );
  }

  if (!text || text.trim() === "") {
    throw new Error("Empty response received from categories API");
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    // console.log("JSON PARSE ERROR =", error);
    // console.log("INVALID RESPONSE =", text);
    throw error;
  }
};

export default getCategories;