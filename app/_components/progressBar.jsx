"use client";

import { useEffect, useState, useRef } from "react";

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const VIEWBOX_SIZE = 100;

export default function CircularProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = CIRCUMFERENCE;
    }

    const handleScroll = () => {
      const { innerHeight, scrollY } = window;

      const { scrollHeight } = document.documentElement;

      const height = scrollHeight - innerHeight;

      let percentage = (scrollY / height) * 100;
      percentage = Math.min(100, Math.max(0, percentage));

      setScrollProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const strokeDashoffset = CIRCUMFERENCE * (1 - scrollProgress / 100);

  return (
    <div
      className="progress-bar"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {/* Scroll to Top Arrow Icon (Unchanged) */}
      <svg viewBox="0 0 24 24" stroke="currentColor" className="arrow">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>

      {/* Circular Progress SVG */}
      <svg viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}>
        {/* Background Circle */}
        <circle
          className="progress-bar-background"
          cx="50"
          cy="50"
          r={RADIUS}
        />

        {/* Fill Circle - Dynamically styled using state and refs */}
        <circle
          ref={circleRef} // Attach ref to target this element
          className="progress-bar-fill"
          cx="50"
          cy="50"
          r={RADIUS}
          // Apply the calculated circumference and offset directly
          // This must be set in the style/props, not via external JS
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: strokeDashoffset,
            // Ensure transition for smooth progress change
            transition: "stroke-dashoffset 0.3s ease-out",
          }}
        />
      </svg>
    </div>
  );
}
