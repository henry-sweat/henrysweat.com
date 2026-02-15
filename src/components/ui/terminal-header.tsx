"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "blog", href: "/blog" },
  { name: "bookshelf", href: "/bookshelf" },
];

function Prompt({ cwd = "~" }: { cwd?: string }) {
  return (
    <>
      <span className="text-blue-400">henry</span>
      <span className="text-gray-600">@</span>
      <span className="text-gray-500">mac-mini</span>
      <span className="text-gray-600">:{cwd}</span>
      <span className="text-gray-500">&nbsp;$&nbsp;&nbsp;</span>
    </>
  );
}

export default function TerminalHeader({ cwd = "~" }: { cwd?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full font-mono text-sm">
      <div className="flex h-6 w-full items-center justify-between">
        <Link href="/" className="flex items-center hover:underline">
          <Prompt cwd={cwd} />
        </Link>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-500 hover:text-foreground sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? "[ x ]" : "[ ≡ ]"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-2 flex flex-col gap-2 sm:hidden">
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
      )}
    </div>
  );
}
