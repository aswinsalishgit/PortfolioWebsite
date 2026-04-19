"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full border-t-brutal bg-background pt-20 pb-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-header mb-8 leading-none">
            Let's build <br /> <span className="text-accent">something raw.</span>
          </h2>
          <p className="font-mono text-sm max-w-sm text-foreground/60 mb-8">
            Specializing in high-performance digital experiences where engineering meets extreme minimalism.
          </p>
          <a 
            href="mailto:hello@aswinsalish.me" 
            className="inline-block border-brutal px-8 py-4 font-header tracking-widest hover:bg-white hover:text-black transition-all"
          >
            START PROJECT
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase text-foreground/40">Navigation</span>
            <ul className="flex flex-col gap-2">
              {["Work", "Archive", "Journal", "Info"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-header text-sm tracking-tighter hover:text-accent uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase text-foreground/40">Socials</span>
            <ul className="flex flex-col gap-2">
              {["Instagram", "Twitter / X", "LinkedIn", "Github"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-header text-sm tracking-tighter hover:text-accent uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t-brutal pt-8 gap-4">
        <div className="font-mono text-[10px] uppercase text-foreground/40">
          DESIGNED & DEVELOPED BY ASWIN SALISH &copy; {currentYear}
        </div>
        <div className="font-huge opacity-[0.03] absolute bottom-0 right-0 pointer-events-none select-none">
          MOTORS
        </div>
        <div className="flex gap-8 font-mono text-[10px] uppercase">
          <span>Local Time: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
          <span>40.7128&deg; N, 74.0060&deg; W</span>
        </div>
      </div>
    </footer>
  );
}
