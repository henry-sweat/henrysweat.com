"use client";

import { useState } from "react";
import { BookshelfCard } from "@/components/ui/bookshelf-card";
import { Section } from "@/components/ui/section";

interface BookshelfItem {
  title: string;
  author: string;
  url: string;
  type: string;
  tags: string[];
  isFavorite: boolean;
}

export function FilteredBookshelf({ items }: { items: BookshelfItem[] }) {
  const types = Array.from(new Set(items.map((i) => i.type))).sort();
  const [activeType, setActiveType] = useState<string | null>(null);

  const filtered = (
    activeType ? items.filter((i) => i.type === activeType) : items
  ).sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite));

  const labelMap: Record<string, string> = {
    blogPost: "blog posts",
    book: "books",
  };

  return (
    <>
      <p className="text-muted-foreground">
        some of my favorites, in no particular order
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveType(null)}
          className={`rounded border px-2 py-1 text-xs transition-colors ${
            activeType === null
              ? "border-blue-400 text-blue-400"
              : "border-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          all
        </button>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`rounded border px-2 py-1 text-xs transition-colors ${
              activeType === type
                ? "border-blue-400 text-blue-400"
                : "border-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {labelMap[type] || type}
          </button>
        ))}
      </div>
      <Section>
        {filtered.map((item) => (
          <BookshelfCard
            title={item.title}
            author={item.author}
            url={item.url}
            type={item.type}
            tags={item.tags}
            key={`key-${item.url}`}
          />
        ))}
      </Section>
    </>
  );
}
