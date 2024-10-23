"use client";

import { useState, useEffect } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Plans from "./_components/Plans";
import Contact from "./_components/Contact";
import Testimonials from "./_components/Testimonials";
import Conclusion from "./_components/Conclusion";
import Impact from "./_components/Impact";
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Impact />
      <Plans />
      <Testimonials />
      <Contact />
      <Conclusion />
    </div>
  );
}
