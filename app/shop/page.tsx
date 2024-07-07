import { Product } from "@/components/product";
import { PRODUCTS } from "@/lib/constant";
import { fetchProducts } from "@/lib/fetch";
import dynamic from "next/dynamic";

export default async function ShopPage() {
  const products = await fetchProducts();

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
