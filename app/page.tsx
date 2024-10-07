"use client";

import { useState, useEffect } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header isAnimating={isAnimating} />
      <Hero isAnimating={isAnimating} />
    </div>
  );
}
