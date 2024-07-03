'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'error';
  content: string;
}

const TestingPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      setIsLoading(true);
      const newUserMessage: ChatMessage = { role: 'user', content: message };
      setMessages(prev => [...prev, newUserMessage]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [...messages, newUserMessage] }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setProducts(data.products);
        const newAiMessage: ChatMessage = { role: 'assistant', content: data.aiMessage };
        setMessages(prev => [...prev, newAiMessage]);
      } catch (error: any) {
        console.error('Error:', error);
        const errorMessage: ChatMessage = { role: 'error', content: `Error: ${error.message}` };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
        setMessage('');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded shadow">
        <h1 className="mb-4 text-2xl font-bold">Shopping Assistant</h1>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <div className="mb-4 space-y-2 h-96 overflow-y-auto">
              {messages.map((m, index) => (
                <div key={index} className={`p-2 rounded ${
                  m.role === 'user' ? 'bg-blue-100' : 
                  m.role === 'assistant' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <strong>{m.role === 'user' ? 'You' : m.role === 'assistant' ? 'Assistant' : 'Error'}:</strong> {m.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-2 border rounded-l text-black"
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-r disabled:bg-blue-300"
                disabled={isLoading}
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="mb-2 text-xl font-bold">Product Recommendations</h2>
            <div className="space-y-2 h-96 overflow-y-auto">
              {products.map((product) => (
                <div key={product.id} className="p-2 border rounded">
                  <strong>{product.name}</strong> - ${product.price}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingPage;