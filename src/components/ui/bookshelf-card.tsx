import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./card";
import { Badge } from "./badge";
import Link from "next/link";

interface IBookshelfCardProps {
  title: string;
  author: string;
  url: string;
  tags: string[];
}

export function BookshelfCard({
  title,
  author,
  tags,
  url,
}: IBookshelfCardProps) {
  return (
    <Link href={`${url}`}>
      <Card className="flex flex-col overflow-hidden border border-muted p-3 transition-colors hover:bg-accent">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-lg leading-tight tracking-tight">
              {title}
            </CardTitle>
            <CardDescription>{author}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
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
    </Link>
  );
}
