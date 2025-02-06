"use client"; // Required for Next.js App Router
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="h-screen flex items-center justify-center bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to My GSAP Next.js Site</h1>
    </section>
  );
}
