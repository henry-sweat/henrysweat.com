"use client";

import { useEffect, useState, useRef } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  as?: React.ElementType;
}

export function ScrambleText({
  text,
  className,
  duration = 1500,
  as: Component = "span",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);

  useEffect(() => {
    const totalFrames = duration / 30;
    frameRef.current = 0;

    const interval = setInterval(() => {
      const progress = frameRef.current / totalFrames;
      const resolved = Math.floor(progress * text.length);

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      if (frameRef.current >= totalFrames) {
        setDisplay(text);
        clearInterval(interval);
      }
      frameRef.current++;
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <Component className={className}>{display}</Component>;
}
