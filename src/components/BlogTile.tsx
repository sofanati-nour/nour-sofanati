import { PostMetadata } from "@/app/blog/utils";
import Link from "next/link";

export default function BlogTile({ post }: { post: PostMetadata }) {
  return (
    <article className={`rounded-lg overflow-hidden col-span-1 shadow-lg`}>
      <img
        src={"https://via.placeholder.com/1600x900"}
        alt={post.title}
        className="w-full aspect-video bg-red"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-500">{post.category}</span>
          <span className="text-sm text-gray-500">{post.publishedAt}</span>
        </div>
        <h2 className="text-xl font-bold mb-4">{post.title}</h2>
        <p className={`mb-4 text-gray-600`}>{post.summary}</p>
        <Link
          href={`/blog/${post.categorySlug}/${post.slug}`}
          className="text-blue-500 hover:underline"
        >
          اقرأ المزيد ←
        </Link>
      </div>
    </article>
  );
}
