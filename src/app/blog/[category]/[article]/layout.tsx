import { getBlogPosts } from "../../utils";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg max-w-prose">
      <article className="prose prose-invert max-w-none">{children}</article>
    </div>
  );
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    category: post.metadata.categorySlug,
    article: post.slug,
  }));
}
