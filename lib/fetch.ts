import { IProducts } from "./types";

export const fetchProducts = async () => {
  // @ts-ignore
  const response = await fetch(process.env.VERCEL_URL + "/api/chat", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.error || "An error occurred while fetching the data."
    );
  }

  const data = (await response.json()) as IProducts;
  return data;
};
