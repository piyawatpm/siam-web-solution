"use client";

import { useState, useEffect } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
    </div>
  );
}
