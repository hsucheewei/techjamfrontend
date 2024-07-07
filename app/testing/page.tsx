"use client";
import React, { useEffect, useState } from "react";

const TestingPage: React.FC = () => {
  const [responseText, setResponseText] = useState<string | null>(null);
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

        const data = await response.json();
        setResponseText(data.text);
      } catch (error: any) {
        console.error("Error:", error.message);
        setResponseText(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black-100">
      <div className="w-full max-w-4xl p-6 bg-black rounded shadow">
        <h1 className="mb-4 text-2xl font-bold">Shopping Assistant</h1>
        {isLoading ? <p>Loading...</p> : <p>{responseText}</p>}
      </div>
    </div>
  );
};

export default TestingPage;
