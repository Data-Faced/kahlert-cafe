"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden text-[#0F6397] text-2xl"
        aria-label="Open menu"
      >
        ☰
      </button>

      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end px-5 py-4 border-b">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-2xl text-stone-500 hover:text-stone-800"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col px-5 py-6 gap-1 text-lg">
            <Link href="/" onClick={() => setOpen(false)} className="py-3 border-b border-stone-100 hover:text-[#0F6397]">
              Home
            </Link>
            <Link href="/catering" onClick={() => setOpen(false)} className="py-3 border-b border-stone-100 hover:text-[#0F6397]">
              Catering
            </Link>
            <Link href="/menu" onClick={() => setOpen(false)} className="py-3 border-b border-stone-100 hover:text-[#0F6397]">
              Menu
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-3 border-b border-stone-100 hover:text-[#0F6397]">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-3 border-b border-stone-100 hover:text-[#0F6397]">
              Contact
            </Link>
          </nav>
          <div className="mt-auto p-5">
            <a
              href="https://order.toasttab.com/online/kalhert-cafe-53-loveton-circle"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#0F6397] hover:bg-[#0d5580] text-white py-3 font-semibold"
            >
              ORDER ONLINE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
