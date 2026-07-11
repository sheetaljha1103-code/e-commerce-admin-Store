import { Category } from "@/public/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  //console.log("URL =", URL);

  const res = await fetch(URL);

  console.log("STATUS =", res.status);

  if (!res.ok) {
    const text = await res.text();
    console.log("RESPONSE =", text);

    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  return res.json();
};

export default getCategories;