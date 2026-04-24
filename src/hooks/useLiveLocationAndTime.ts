"use client";

import { useState, useEffect } from "react";

export function useLiveLocationAndTime(defaultLocation: string = "19.0760° N, 72.8777° E") {
  const [timeStr, setTimeStr] = useState<string>("");
  const [locationStr, setLocationStr] = useState<string>(defaultLocation);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initial time set
    const updateTime = () => {
      setTimeStr(new Date().toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Fetch location once
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
          const data = await response.json();
          if (data.latitude && data.longitude) {
            const lat = Math.abs(data.latitude).toFixed(4) + "° " + (data.latitude >= 0 ? "N" : "S");
            const lon = Math.abs(data.longitude).toFixed(4) + "° " + (data.longitude >= 0 ? "E" : "W");
            setLocationStr(`${lat}, ${lon}`);
          }
        }
      } catch (error) {
        console.error("Failed to fetch live location:", error);
      }
    };
    fetchLocation();

    return () => clearInterval(intervalId);
  }, []);

  return { timeStr, locationStr, mounted };
}
