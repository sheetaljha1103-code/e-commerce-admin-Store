import { Product } from "@/public/types";

const getProduct = async (
  id: string
): Promise<Product> => {

  const storeId = process.env.NEXT_PUBLIC_STORE_ID;
  
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


  const fetchUrl = `${URL}/${id}`;


  // console.log("PRODUCT URL =", fetchUrl);


  const res = await fetch(fetchUrl, {
    cache: "no-store",
  });


  // console.log("PRODUCT STATUS =", res.status);


  const responseText = await res.text();

  // console.log("PRODUCT RESPONSE =", responseText);


  if (!res.ok) {
    throw new Error(
      `Failed to fetch product: ${res.status}`
    );
  }


  return JSON.parse(responseText);

};


export default getProduct;