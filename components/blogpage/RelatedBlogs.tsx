"use client";

import Link from "next/link";

interface RelatedBlog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  category?: {
    name: string;
    slug: string;
  };
}

interface RelatedBlogsProps {
  blogs: RelatedBlog[];
}

export default function RelatedBlogs({
  blogs,
}: RelatedBlogsProps) {
  if (!blogs.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Continue Reading
        </p>

        <h2 className="text-3xl font-bold text-slate-900">
          Related Articles
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog.category?.slug}/${blog.slug}`}
            className="group"
          >
            <article className="overflow-hidden border border-slate-200 bg-white">
              {blog.featuredImage && (
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              <div className="p-5">
                <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}