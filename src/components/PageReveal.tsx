"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePageTransition } from "./PageTransitionContext";

export default function PageReveal({ 
  children, 
  className = "",
  delay = 0,
  mode = "shutter"
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  mode?: "shutter" | "fade";
}) {
  const container = useRef<HTMLDivElement>(null);
  const shutterRef = useRef<HTMLDivElement>(null);
  const { previousIndex, currentIndex } = usePageTransition();

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: delay });

      if (mode === "fade") {
        gsap.set(container.current, { opacity: 0, y: 10 });
        gsap.set(shutterRef.current, { display: "none" });

        tl.to(container.current, {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: "power3.out"
        });
        return;
      }

      // Determine animation direction
      const isFromHome = previousIndex === -1;
      const isMovingRight = !isFromHome && currentIndex > previousIndex;
      const isMovingLeft = !isFromHome && currentIndex < previousIndex;

      // Initial state config
      let startX = 0;
      let startY = 0;
      let skewX = 0;
      let skewY = 0;
      let clipPathStart = "inset(100% 0% 0% 0%)"; // Default vertical
      let shutterScaleX = 1;
      let shutterScaleY = 0;
      let shutterOriginStart = "top";
      let shutterOriginEnd = "bottom";

      if (isFromHome) {
        startY = 100;
        skewY = 3;
        clipPathStart = "inset(100% 0% 0% 0%)";
        shutterScaleX = 1;
        shutterScaleY = 0;
        shutterOriginStart = "top";
        shutterOriginEnd = "bottom";
      } else if (isMovingRight) {
        startX = 100;
        skewX = 5;
        clipPathStart = "inset(0% 0% 0% 100%)";
        shutterScaleX = 0;
        shutterScaleY = 1;
        shutterOriginStart = "right";
        shutterOriginEnd = "left";
      } else if (isMovingLeft) {
        startX = -100;
        skewX = -5;
        clipPathStart = "inset(0% 100% 0% 0%)";
        shutterScaleX = 0;
        shutterScaleY = 1;
        shutterOriginStart = "left";
        shutterOriginEnd = "right";
      }

      // Initial state: Content hidden
      gsap.set(container.current, {
        opacity: 0,
        x: startX,
        y: startY,
        skewX: skewX,
        skewY: skewY,
        clipPath: clipPathStart,
      });

      // Initial state: Shutter
      gsap.set(shutterRef.current, {
        scaleX: shutterScaleX,
        scaleY: shutterScaleY,
        transformOrigin: shutterOriginStart,
        display: "block"
      });

      // 1. Shutter flash
      if (isFromHome) {
        tl.to(shutterRef.current, {
          scaleY: 1,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(shutterRef.current, {
          scaleY: 0,
          transformOrigin: shutterOriginEnd,
          duration: 0.5,
          ease: "power4.inOut",
        });
      } else {
        tl.to(shutterRef.current, {
          scaleX: 1,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(shutterRef.current, {
          scaleX: 0,
          transformOrigin: shutterOriginEnd,
          duration: 0.5,
          ease: "power4.inOut",
        });
      }

      // 2. Content Reveal
      tl.to(container.current, {
        opacity: 1,
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "expo.out",
      }, "-=0.4");

      // 3. Brutalist "Glitch"
      tl.to(container.current, {
        filter: "brightness(1.8) contrast(1.5)",
        duration: 0.05,
        repeat: 3,
        yoyo: true,
        ease: "none",
      }, "-=0.8");
    },
    { scope: container, dependencies: [currentIndex] }
  );

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={shutterRef} 
        className="absolute inset-0 bg-accent z-[60] pointer-events-none" 
      />
      <div ref={container} className={className}>
        {children}
      </div>
    </div>
  );
}

