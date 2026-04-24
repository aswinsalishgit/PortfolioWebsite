"use client";

import { useEffect, createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.05,
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(lenisInstance);

    const update = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    lenisInstance.on("scroll", ScrollTrigger.update);

    const handleResize = () => {
      lenisInstance.resize();
    };
    window.addEventListener("resize", handleResize);

    // Initial refresh with a slight delay for Next.js layout settlement
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      lenisInstance.resize();
    }, 100);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(update);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      setLenis(null);
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
