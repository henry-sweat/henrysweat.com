import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "../blog";
import { formatDate } from "@/lib/utils";
import { CustomMDX } from "@/components/mdx";
import TerminalHeader from "@/components/ui/terminal-header";
import { Metadata } from "next";

interface IProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: IProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-start p-8 font-mono text-sm">
      <TerminalHeader cwd="~/blog" />
      <section className="mt-8 w-full space-y-6">
        <div className="flex-col">
          <h2 className="text-lg text-foreground">{post.metadata.title}</h2>
          <p className="text-xs text-gray-500">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>

        <article className="prose-md prose prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  let post = getBlogPost(params.slug);
  return {
    title: post?.metadata.title,
    description: "a blog post by henry sweat",
  };
}
