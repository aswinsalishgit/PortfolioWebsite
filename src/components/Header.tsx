"use client";

import Link from "next/link";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Laboratory", href: "/lab" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-brutal bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center">
            <span className="text-black font-header text-xl font-black">A</span>
          </div>
          <span className="font-header text-xl tracking-tighter uppercase whitespace-nowrap">
            Aswin Salish
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="font-mono text-[10px] uppercase text-foreground/40 hidden sm:block">
            Status: Operational // 2026
          </div>
          <button className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 group">
            <div className="w-8 h-[1px] bg-foreground group-hover:bg-accent transition-colors" />
            <div className="w-6 h-[1px] bg-foreground group-hover:bg-accent transition-colors" />
            <div className="w-4 h-[1px] bg-foreground group-hover:bg-accent transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
