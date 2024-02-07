import { notFound } from "next/navigation";
import { getBlogPost } from "../blog";
import { formatDate } from "@/lib/utils";
import { CustomMDX } from "@/components/mdx";

interface IParams {
  params: {
    slug: string;
  };
}

export default function Page({ params }: IParams) {
  let post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-2 md:mb-12 md:px-16 md:py-4">
      <section className="mx-auto w-full max-w-2xl space-y-6 bg-white">
        <div className="flex-col">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">
            {post.metadata.title}
          </h2>
          <p className="max-w-md items-center text-pretty py-1 font-mono text-xs text-muted-foreground">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>

        <article className="prose-md prose dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: IParams) {
  let post = getBlogPost(params.slug);
  return {
    title: post?.metadata.title,
    description: "a blog post by henry sweat",
  };
}
