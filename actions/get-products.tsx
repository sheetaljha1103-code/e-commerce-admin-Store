import { Product } from "@/public/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (
  query: Query
): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("FETCH URL:", url);

  try {
    const res = await fetch(url);

    console.log("STATUS:", res.status);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }
};

export default getProducts;