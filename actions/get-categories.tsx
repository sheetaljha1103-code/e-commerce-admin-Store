import { Category } from "@/public/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  console.log("FETCH URL:", URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  return res.json();
};

export default getCategories;