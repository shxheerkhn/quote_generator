"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const topics = [
  "inspiration",
  "life",
  "success",
  "motivation",
  "happiness"
];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("");

  // Fetch a random quote on load
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/quotes?topic=inspiration")
      .then(res => {
        if (res.data.quotes.length > 0) {
          setQuoteOfTheDay(res.data.quotes[Math.floor(Math.random() * res.data.quotes.length)]);
        }
      });
  }, []);

  const fetchQuotes = async () => {
    setLoading(true);
    setError("");
    setQuotes([]);
    try {
      const res = await axios.get("http://127.0.0.1:8000/quotes", {
        params: { topic },
      });
      setQuotes(res.data.quotes);
      if (res.data.quotes.length === 0) {
        setError("No quotes found for this topic.");
      }
    } catch (err) {
      setError("Failed to fetch quotes.");
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-purple-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-purple-700">Quote Generator</h1>
        <p className="text-lg text-gray-600">Get inspired by random quotes on your favorite topics!</p>
      </header>

      <section className="mb-8 w-full max-w-md">
        <Card className="p-6 bg-white/80 shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Quote of the Day</h2>
          <p className="italic text-gray-800">{quoteOfTheDay}</p>
        </Card>
      </section>

      <section className="w-full max-w-md mb-8">
        <div className="flex gap-2 mb-4">
          <select
            className="border rounded px-3 py-2 text-base"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          >
            <option value="">Select a topic</option>
            {topics.map(t => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
          <Input
            placeholder="Or type a topic"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            className="flex-1"
          />
          <Button onClick={fetchQuotes} disabled={loading || !topic}>
            {loading ? (
              <span className="animate-spin mr-2">⏳</span>
            ) : "Get Quotes"}
          </Button>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex flex-col gap-4">
          {quotes.map((quote, idx) => (
            <Card key={idx} className="p-4 bg-white/90">{quote}</Card>
          ))}
        </div>
      </section>

      <footer className="mt-auto text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Quote Generator. Powered by FastAPI & Next.js.
      </footer>
      <div style={{position: 'fixed', bottom: 12, right: 16, color: '#888', fontSize: '0.95rem', opacity: 0.8, zIndex: 50}}>
        Developed by starix
      </div>
    </main>
  );
}