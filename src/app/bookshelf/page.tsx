import { getAllBookshelfItems } from "./bookshelf";
import { FilteredBookshelf } from "@/components/ui/filtered-bookshelf";
import TerminalHeader from "@/components/ui/terminal-header";
import { Metadata } from "next";

export default function Page() {
  const bookshelfItems = getAllBookshelfItems().filter((i) => i.isVisible);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-start p-8 font-mono text-sm">
      <TerminalHeader cwd="~/bookshelf" />
      <section className="mt-8 w-full space-y-8">
        <FilteredBookshelf items={bookshelfItems} />
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "HS | Bookshelf",
};
