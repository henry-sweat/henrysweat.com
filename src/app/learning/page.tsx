import { getAllBlogPosts } from "@/app/learning/learning";
import { Section } from "@/components/ui/section";
import { LearningCard } from "@/components/ui/learning-card";
import PageTitle from "@/components/ui/page-title";
import { Metadata } from "next";

export default function Page() {
  const blogPosts = getAllBlogPosts();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-2 md:mb-12 md:px-16 md:py-4">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Section>
          <PageTitle title={"my learning"} />
        </Section>
        <Section>
          {blogPosts.map((blogPost) => (
            <LearningCard
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
  title: "HS | Learning",
};
