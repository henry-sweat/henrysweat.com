import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./card";
import { Badge } from "./badge";

interface IBookshelfCardProps {
  title: string;
  author: string;
  url: string;
  type: string;
  tags: string[];
}

const typeLabels: Record<string, string> = {
  blogPost: "blog post",
  book: "book",
};

export function BookshelfCard({
  title,
  author,
  type,
  tags,
  url,
}: IBookshelfCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="flex flex-col overflow-hidden border border-muted p-3 transition-colors hover:bg-accent">
        <CardHeader>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg leading-tight tracking-tight">
              {title}
            </CardTitle>
            <CardDescription className="leading-tight tracking-tight">
              {author}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            <Badge className="px-1 py-0 text-[10px]" variant="secondary">
              {typeLabels[type] || type}
            </Badge>
            {tags.map((tag: string) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
