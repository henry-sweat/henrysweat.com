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
        </Section>
        <Section>
          {bookshelfItems.map((item) => (
            <BookshelfCard
              title={item.title}
              author={item.author}
              url={item.url}
              tags={item.tags}
              key={`key-${item.url}`}
            />
          ))}
        </Section>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "HS | Bookshelf",
};
