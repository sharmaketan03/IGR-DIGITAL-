import BlogCard, {
  BlogCardData,
} from "@/components/blogpage/blogCard";

interface FeaturedBlogsProps {
  blogs: BlogCardData[];
}

export default function FeaturedBlogs({
  blogs,
}: FeaturedBlogsProps) {

  if (!blogs.length) return null;
  console.log("FEATURED BLOGS:", JSON.stringify(blogs, null, 2));

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#4285F4]">
              Featured
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16213a] md:text-4xl">
              Featured Insights
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Handpicked insights covering SEO, PPC, AI search,
              content and digital growth.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.slice(0, 4).map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              featured
            />
          ))}
        </div>
      </div>
    </section>
  );
}