import { Section } from "@/components/ui/section";
import PageTitle from "@/components/ui/page-title";
import { BookshelfCard } from "@/components/ui/bookshelf-card";
import { getAllBookshelfItems } from "./bookshelf";
import { Metadata } from "next";

export default function Page() {
  const bookshelfItems = getAllBookshelfItems();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-2 md:mb-12 md:px-16 md:py-4">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Section>
          <PageTitle title={"my bookshelf"} />
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {
              "if my blog came up short, then look no further! here are the best things I have found on the internet, made by people much smarter than me."
            }
          </p>
        </Section>
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
