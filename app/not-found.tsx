import { Container, CtaLinks } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    title: "Page Not Found | Malik Group",
    description:
      "That page is not on sanjeevmalik.com. Search homes, request a home value, or return to the Malik Group home page.",
    path: "/404",
    absolute: true,
  }),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl text-navy">That page is not on this site</h1>
      <p className="mt-4 max-w-xl text-lg text-slate">
        The address may have changed. You can search homes, ask for a home value, or go back to the Malik Group home page.
      </p>
      <CtaLinks className="mt-8" />
    </Container>
  );
}
