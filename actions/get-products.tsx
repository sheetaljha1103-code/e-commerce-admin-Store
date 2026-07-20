import { Product } from "@/public/types";
import qs from "query-string";

const storeId = process.env.NEXT_PUBLIC_STORE_ID;

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (
  query: Query
): Promise<Product[]> => {

  // console.log("API_URL =", process.env.NEXT_PUBLIC_API_URL);
  // console.log("STORE_ID =", process.env.NEXT_PUBLIC_STORE_ID);
  // console.log("BASE_URL =", URL);

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  // console.log("FETCH URL =", url);

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    // console.log("STATUS =", res.status);

    const text = await res.text();

    // console.log("RESPONSE =", text);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return JSON.parse(text);

  } catch (error) {
    // console.log("FETCH ERROR =", error);
    throw error;
  }
};

export default getProducts;