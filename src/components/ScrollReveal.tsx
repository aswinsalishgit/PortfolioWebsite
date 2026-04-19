"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(container.current, {
        y: 100,
        skewY: 5,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
