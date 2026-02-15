"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LS_COMMAND = "ls";
const SYSINFO_COMMAND = "sysinfo";

const SYSINFO_OUTPUT =
  "Hello! 👋\n\nI'm a senior full-stack engineer at Capital One working on Empath, a card-servicing platform used by tens of thousands of customer service agents that service millions of customers worldwide. Previously, I audited hedge funds at EY.";

const NAV_ITEMS = [
  { name: "blog", href: "/blog" },
  { name: "bookshelf", href: "/bookshelf" },
];

function Prompt() {
  return (
    <>
      <span className="text-blue-400">henry</span>
      <span className="text-gray-600">@</span>
      <span className="text-gray-500">mac-mini</span>
      <span className="text-gray-600">:~</span>
      <span className="text-gray-500">&nbsp;$&nbsp;&nbsp;</span>
    </>
  );
}

function Cursor() {
  return (
    <span className="inline-block h-4 w-2 animate-blink self-center bg-foreground" />
  );
}

export default function Page() {
  const [phase, setPhase] = useState<
    | "idle"
    | "ls-typing"
    | "ls-result"
    | "sysinfo-typing"
    | "sysinfo-output"
    | "done"
    | "finished"
  >("idle");
  const [typedChars, setTypedChars] = useState(0);
  const [sysinfoText, setSysinfoText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Phase 0: Blink cursor for a moment
  useEffect(() => {
    if (phase !== "idle") return;
    const timeout = setTimeout(() => setPhase("ls-typing"), 2000);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Phase 1: Type "ls"
  useEffect(() => {
    if (phase !== "ls-typing") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedChars(i);
      if (i >= LS_COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTypedChars(0);
          setPhase("ls-result");
        }, 400);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [phase]);

  // Phase 2: Show nav, pause, then start typing sysinfo
  useEffect(() => {
    if (phase !== "ls-result") return;
    const timeout = setTimeout(() => setPhase("sysinfo-typing"), 800);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Phase 3: Type system_profiler command
  useEffect(() => {
    if (phase !== "sysinfo-typing") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedChars(i);
      if (i >= SYSINFO_COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTypedChars(0);
          setPhase("sysinfo-output");
        }, 400);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [phase]);

  // Phase 4: Type sysinfo output character by character
  useEffect(() => {
    if (phase !== "sysinfo-output") return;
    const fullText = SYSINFO_OUTPUT;
    let i = 0;
    let timeout: NodeJS.Timeout;

    function typeNext() {
      i++;
      setSysinfoText(fullText.slice(0, i));
      if (i >= fullText.length) {
        setPhase("done");
        return;
      }
      const char = fullText[i - 1];
      let delay = 18;
      if (char === "\n") delay = 400;
      else if (fullText.slice(Math.max(0, i - 2), i) === "👋") delay = 600;
      else if (char === ".") delay = 400;
      else if (char === ",") delay = 200;
      timeout = setTimeout(typeNext, delay);
    }

    timeout = setTimeout(typeNext, 18);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Phase 5: Blink cursor then hide it
  useEffect(() => {
    if (phase !== "done") return;
    const timeout = setTimeout(() => setPhase("finished"), 3000);
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <main className="mx-auto flex h-screen w-full max-w-3xl flex-col items-start p-8 font-mono text-sm">
      {/* Header: prompt + nav */}
      <div className="flex h-6 w-full items-center justify-between">
        <div className="flex items-center">
          <Prompt />
          {phase === "idle" && <Cursor />}
          {phase === "ls-typing" && (
            <>
              <span className="text-foreground">
                {LS_COMMAND.slice(0, typedChars)}
              </span>
              <Cursor />
            </>
          )}
          {phase === "sysinfo-typing" && (
            <>
              <span className="text-foreground">
                {SYSINFO_COMMAND.slice(0, typedChars)}
              </span>
              <Cursor />
            </>
          )}
        </div>
        {phase !== "idle" && phase !== "ls-typing" && (
          <>
            <div className="hidden gap-6 sm:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-blue-400 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-foreground sm:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? "[ x ]" : "[ ≡ ]"}
            </button>
          </>
        )}
      </div>

      {/* Mobile dropdown */}
      {menuOpen && phase !== "idle" && phase !== "ls-typing" && (
        <div className="mt-2 flex flex-col gap-2 sm:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-blue-400 hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Sysinfo output */}
      {sysinfoText && (
        <p className="mt-8 w-full whitespace-pre-wrap leading-6 text-foreground">
          {sysinfoText}
          <span
            className={`inline-block h-3.5 w-2 translate-y-0.5 bg-foreground ${
              phase === "sysinfo-output" || phase === "done"
                ? "animate-blink"
                : "opacity-0"
            }`}
          />
        </p>
      )}
    </main>
  );
}
