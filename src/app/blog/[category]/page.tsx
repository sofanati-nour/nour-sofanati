import { getBlogPostsByCategorySlug } from "../utils";
import BlogTile from "@/components/BlogTile";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = getBlogPostsByCategorySlug(category);
  return (
    <div>
      <h1>{category}</h1>
      {posts.map((post) => (
        <BlogTile key={post.slug} post={post.metadata} />
      ))}
    </div>
  );
}
