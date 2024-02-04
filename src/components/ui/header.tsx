"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./socials";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="container relative mx-auto overflow-hidden pb-4 pl-4 pr-4 pt-6 print:p-12 md:pb-4 md:pl-16 md:pr-16 md:pt-16">
      <div className="mx-auto w-full max-w-2xl bg-white print:space-y-6">
        <div className="flex items-center justify-between gap-x-2">
          <nav className="flex flex space-x-4">
            <Link
              href={"/"}
              className={`${
                pathname === "/" ? "" : ""
              } max-w-md text-pretty text-lg text-muted-foreground hover:underline`}
            >
              home
            </Link>
            <Link
              href={"/blog"}
              className={`${
                pathname === "/blog" ? "" : ""
              } max-w-md text-pretty text-lg text-muted-foreground hover:underline`}
            >
              blog
            </Link>
            <Link
              href={"/bookshelf"}
              className={`${
                pathname === "/bookshelf" ? "" : ""
              } max-w-md text-pretty text-lg text-muted-foreground hover:underline`}
            >
              bookshelf
            </Link>
          </nav>
          <div className="xs:flex hidden items-center justify-between">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
}
