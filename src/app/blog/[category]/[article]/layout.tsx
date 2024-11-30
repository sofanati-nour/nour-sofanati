import { getBlogPostBySlug, getBlogPosts } from "../../utils";

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string; article: string }>;
}) {
  const { article } = await params;
  const post = getBlogPostBySlug(article);
  return (
    <section className="bg-gray-800 p-6 rounded-lg max-w-prose">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post?.metadata.title,
            datePublished: post?.metadata.publishedAt,
            dateModified: post?.metadata.publishedAt,
            description: post?.metadata.summary,
            keywords: post?.metadata.tags,
            url: `${process.env.SITE_URL ?? "https://nour-sofanati.com"}/blog/${post?.metadata.categorySlug}/${post?.slug}`,
            author: {
              "@type": "Person",
              name: "نور صوفاناتي",
              givenName: "نور",
              familyName: "صوفاناتي",
              birthDate: "1998-07-13",
              birthPlace: {
                "@type": "Place",
                name: "Damascus",
              },
              alternateName: "Nour Sofanati",
              gender: "male",
              hasOccupation: [
                {
                  "@type": "Role",
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Software Developer",
                  },
                  startDate: "2022-03",
                },
                {
                  "@type": "Role",
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Full-Stack Developer",
                  },
                  startDate: "2024-11-11",
                },
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Audimee",
                  url: "https://audimee.com",
                },
                {
                  "@type": "Organization",
                  name: "SimpleBackups",
                  url: "https://simplebackups.com",
                },
              ],
            },
          }),
        }}
      />

      <article className="prose prose-invert max-w-none">{children}</article>
    </section>
  );
}
//metadata

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { article } = await params;
  const post = getBlogPostBySlug(article);
  return {
    title: post?.metadata.title,
    description: post?.metadata.summary,
    url: `https://nour-sofanati.com/blog/${post?.metadata.categorySlug}/${post?.slug}`,
    locale: "ar-EG",
    type: "article",
    alternates: {
      canonical: `${process.env.SITE_URL ?? "https://nour-sofanati.com"}/blog/${post?.metadata.categorySlug}/${post?.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    category: post.metadata.categorySlug,
    article: post.slug,
  }));
}
