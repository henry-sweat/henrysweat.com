import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/blog-card";
import { getBlogPosts } from "@/lib/blog";
import PageTitle from "@/components/ui/page-title";

export const metadata: Metadata = {
  title: "HS | Blog",
};

export default function Blog() {
  const blogPosts = getBlogPosts();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-2 print:p-12 md:px-16 md:py-4">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Section>
          <PageTitle title={"my blog"} />
        </Section>
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
