import { NextResponse } from 'next/server';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import userProfiles from '@/data/user_profiles.json';

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

{
  "products": [
    {
      "name": "Product Name",
      "price": 00.00,
      "category": "Category",
      "link": "https://example.com/product"
      "image": "https://example.com/image.jpg"
      "sold" : "Number of Items sold as integer"
      "discount" : "0%"
      "rating" : "0.0"
    },
    // ... more products
  ]
}
  
Provide 16 product recommendations that best fit the user's profile and preferences. Ensure all fields are filled for each product.
`;

export async function GET() {
  try {
    // For this example, we'll use the first user profile
    // You might want to implement a way to select a specific user
    const user = userProfiles[0];

    const filledPrompt = promptTemplate
      .replace('{age}', user.age)
      .replace('{gender}', user.gender)
      .replace('{location}', user.location)
      .replace('{purchase_history}', user.purchaseHistory.join(', '))
      .replace('{price_range}', user.priceRange)
      .replace('{categories}', user.categories.join(', '));

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