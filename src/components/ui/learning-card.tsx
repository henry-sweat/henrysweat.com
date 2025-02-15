import { Card, CardHeader, CardContent, CardDate, CardTitle } from "./card";
import { Badge } from "./badge";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface IBlogCardProps {
  title: string;
  date: string;
  tags: string[];
  link: string;
}

export function LearningCard({ title, date, tags, link }: IBlogCardProps) {
  return (
    <Link href={`/learning/${link}`}>
      <Card className="flex flex-col overflow-hidden border border-muted p-3 transition-colors hover:bg-accent">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-lg  leading-tight tracking-tight">
              {title}
            </CardTitle>
            <CardDate className="">{formatDate(date)}</CardDate>
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
