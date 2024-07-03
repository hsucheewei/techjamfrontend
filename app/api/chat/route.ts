import { NextRequest, NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai-edge';

const config = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = 'edge';

// Mock function to fetch products (replace with actual API call later)
async function fetchProducts(query: string) {
  // For testing, return mock data
  return [
    { name: "Laptop", price: 999 },
    { name: "Smartphone", price: 699 },
    { name: "Headphones", price: 199 },
  ];
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].content;

    console.log('User message:', userMessage);

    // Fetch relevant products based on user query
    const products = await fetchProducts(userMessage);

    console.log('Fetched products:', products);

    // Format the product list
    const formattedProducts = products.map((product: any, index: number) => ({
      id: index + 1,
      name: product.name,
      price: product.price,
    }));

    // Generate AI response
    const aiResponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        ...messages,
        { role: 'system', content: `Please provide a brief recommendation based on these products: ${JSON.stringify(formattedProducts)}` },
      ],
    });

    const aiResponseData = await aiResponse.json();
    console.log('AI response:', aiResponseData);

    const aiMessage = aiResponseData.choices[0].message?.content || "I'm sorry, I couldn't generate a recommendation.";

    // Prepare the response
    const responseData = {
      products: formattedProducts,
      aiMessage: aiMessage,
    };

    return NextResponse.json(responseData);
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred' }, { status: 500 });
  }
}