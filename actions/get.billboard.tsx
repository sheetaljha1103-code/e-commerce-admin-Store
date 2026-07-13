import { Billboard } from "@/public/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (
  id: string
): Promise<Billboard> => {
  console.log("ID =", id);

  const fetchUrl = `${URL}/${id}`;

  console.log("FETCH URL =", fetchUrl);

  const res = await fetch(fetchUrl);

  console.log("STATUS =", res.status);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch billboard: ${res.status}`
    );
  }

  return res.json();
};

export default getBillboard;