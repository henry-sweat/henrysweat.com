import { getAllBlogPosts } from "@/app/blog/blog";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/ui/blog-card";
import TerminalHeader from "@/components/ui/terminal-header";
import { Metadata } from "next";

export default function Page() {
  const blogPosts = getAllBlogPosts();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-start p-8 font-mono text-sm">
      <TerminalHeader cwd="~/blog" />
      <section className="mt-8 w-full space-y-8">
        <Section>
          {blogPosts.map((blogPost) => (
            <BlogCard
              title={blogPost.metadata.title}
              date={blogPost.metadata.publishedAt}
              tags={blogPost.metadata.tags}
              link={blogPost.slug}
              key={`key-${blogPost.slug}`}
            />
          ))}
        </Section>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "HS | Blog",
};
