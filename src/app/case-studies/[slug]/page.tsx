export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Case Study</h1>
      <p className="mt-4 text-text-secondary">Slug: {slug}</p>
    </main>
  );
}
