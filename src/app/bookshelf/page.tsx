import { Section } from "@/components/ui/section";
import { BookshelfCard } from "@/components/ui/bookshelf-card";
import { getAllBookshelfItems } from "./bookshelf";
import TerminalHeader from "@/components/ui/terminal-header";
import { Metadata } from "next";

export default function Page() {
  const bookshelfItems = getAllBookshelfItems();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-start p-8 font-mono text-sm">
      <TerminalHeader cwd="~/bookshelf" />
      <section className="mt-8 w-full space-y-8">
        <Section>
          {bookshelfItems.map((item) =>
            item.favorite ? (
              <BookshelfCard
                title={item.title}
                author={item.author}
                url={item.url}
                tags={item.tags}
                key={`key-${item.url}`}
              />
            ) : null,
          )}
        </Section>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "HS | Bookshelf",
};
