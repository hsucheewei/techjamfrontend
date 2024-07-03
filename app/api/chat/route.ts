import { NextRequest, NextResponse } from 'next/server';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const openai = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  compatibility: 'strict',
});

export const runtime = 'edge';

const promptTemplate = `
You are an AI shopping assistant. Your task is to recommend products based on the user's profile and purchase history. 

Given the following information:
- Age: {age}
- Gender: {gender}
- Location: {location}
- Purchase History: {purchase_history}
- Price Range: {price_range}
- Product Categories: {categories}

Please provide product recommendations in the following JSON format:

json
{
  "products": [
    {
      "name": "Product Name",
      "price": 00.00,
      "category": "Category",
      "link": "https://example.com/product"
    },
    // ... more products
  ]
}

Provide 5 product recommendations that best fit the user's profile and preferences. Ensure all fields are filled for each product.
`;

export async function POST(req: NextRequest) {
  try {
    const { age, gender, location, purchaseHistory, priceRange, categories } = await req.json();

    console.log('Received request with the following data:', { age, gender, location, purchaseHistory, priceRange, categories });

    const filledPrompt = promptTemplate
      .replace('{age}', age)
      .replace('{gender}', gender)
      .replace('{location}', location)
      .replace('{purchaseHistory}', purchaseHistory)
      .replace('{priceRange}', priceRange)
      .replace('{categories}', categories);

    console.log('Filled prompt:', filledPrompt);

    const { text } = await generateText({
      model: openai('gpt-3.5-turbo'),
      prompt: filledPrompt,
    });

    console.log('Generated text:', text);

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred' }, { status: 500 });
  }
}
