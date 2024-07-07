import { IProducts } from "./types";

export const fetchProducts = async () => {
  const response = await fetch("/api/chat", {
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
