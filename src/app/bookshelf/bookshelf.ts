import data from "@/data/bookshelf.json" assert { type: "json" };

interface IBookshelfItem {
  title: string;
  author: string;
  url: string;
  dateAdded: string;
  type: string;
  tags: string[];
  favorite: boolean;
}

export function getAllBookshelfItems(): IBookshelfItem[] {
  return data.items;
}
