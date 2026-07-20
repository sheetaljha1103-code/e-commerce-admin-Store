import { Billboard } from "@/public/types";

const storeId = process.env.NEXT_PUBLIC_STORE_ID;

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`;

const getBillboard = async (
  id: string
): Promise<Billboard> => {

  // console.log("=================================");
  // console.log("GET BILLBOARD START");
  // console.log("API_URL =", process.env.NEXT_PUBLIC_API_URL);
  // console.log("STORE_ID =", storeId);
  // console.log("BASE URL =", URL);
  // console.log("BILLBOARD ID =", id);

  const fetchUrl = `${URL}/${id}`;

  // console.log("FETCH URL =", fetchUrl);

  const res = await fetch(fetchUrl, {
    cache: "no-store",
  });

  // console.log("STATUS =", res.status);

  const text = await res.text();

  // console.log("RESPONSE =", text);

  if (!res.ok) {
    // console.log("FAILED URL =", fetchUrl);

    throw new Error(
      `Failed to fetch billboard: ${res.status}`
    );
  }

  return JSON.parse(text);
};

export default getBillboard;