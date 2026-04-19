"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Handle autoplay block
          console.warn("Autoplay blocked. User interaction may be required.");
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return isInView ? (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`object-cover w-full h-full ${className}`}
      muted
      loop
      playsInline
      autoPlay
    />
  ) : (
    <div className={`bg-black w-full h-full ${className}`} />
  );
}
