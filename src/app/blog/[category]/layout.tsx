import { getBlogPosts } from "../utils";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const categories = posts.map((post) => post.metadata.categorySlug);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories.map((category) => ({
    category,
  }));
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
