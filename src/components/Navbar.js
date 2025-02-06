"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(menuRef.current, { x: "100%" });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(menuRef.current, {
        x: isOpen ? "0%" : "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-5 bg-black text-white flex justify-between">
        <h1 className="text-lg">GSAP Navbar</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-lg">
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>
      <div ref={menuRef} className="fixed top-0 right-0 h-full w-64 bg-black text-white p-5">
        <ul className="space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
