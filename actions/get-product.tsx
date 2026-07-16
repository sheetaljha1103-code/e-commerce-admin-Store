import { Product } from "@/public/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (
  id: string
): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-store",
  });
  console.log('product url', `${URL}/${id}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  const data = await res.json();

  console.log("PRODUCT DATA =", JSON.stringify(data, null, 2));

  return data;
};

export default getProduct;