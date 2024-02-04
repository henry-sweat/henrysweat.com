import { Section } from "@/components/ui/section";
import PageTitle from "@/components/ui/page-title";

export default function NotFound() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-2 print:p-12 md:px-16 md:py-4">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Section>
          <PageTitle title={"404: Not Found"} />
        </Section>
      </section>
    </main>
  );
}
