import data from "@/data/bookshelf.json";

interface IBookshelfItem {
  title: string;
  author: string;
  url: string;
  dateAdded: string;
  type: string;
  tags: string[];
  isVisible: boolean;
  isFavorite: boolean;
}

export function getAllBookshelfItems(): IBookshelfItem[] {
  return data.items;
}
