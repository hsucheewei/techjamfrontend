"use client";
import { Product } from "@/components/product";
import { fetchProducts } from "@/lib/fetch";
import { IProducts } from "@/lib/types";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState<IProducts>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
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

        const res = await response.json();
        const data = res.products as IProducts;
        setProducts(data);
      } catch (error: any) {
        console.error("Error:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const firstColumn = products.filter((_, index) => index % 2 === 0);
  const secondColumn = products.filter((_, index) => index % 2 === 1);

  return (
    <main>
      <div className="flex gap-5 px-5">
        <div className="flex flex-col gap-5">
          {firstColumn.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {secondColumn.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
