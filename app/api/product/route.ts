import data from "@/data/product.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // For this example, we'll use the first user profile
    // You might want to implement a way to select a specific user
    const products = data.products;
    console.log(products);
    return NextResponse.json({ products });
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
