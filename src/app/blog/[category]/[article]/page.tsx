"use server";

import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "../../utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { article } = await params;
  const post = getBlogPostBySlug(article);
  if (!post) {
    notFound();
  }
  return (
    <section>
      <h1>{post?.metadata.title}</h1>
      <p>{post?.metadata.publishedAt}</p>
      <p>{post?.metadata.summary}</p>
      <hr />
      <MDXRemote source={post?.content} />
    </section>
  );
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    category: post.metadata.categorySlug,
    article: post.slug,
  }));
}
