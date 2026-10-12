import BlogCard, {
  BlogCardData,
} from "@/components/blogpage/blogCard";

interface TrendingBlogsProps {
  blogs: BlogCardData[];
}

export default function TrendingBlogs({
  blogs,
}: TrendingBlogsProps) {
  if (!blogs.length) return null;

  return (
    <section className="bg-white py-16 md:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* HEADER */}
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#34A853]">
            Trending Now
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16213a] md:text-4xl">
            What People Are Reading
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Explore the topics currently getting attention across
            search, advertising and AI-driven marketing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.slice(0, 4).map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}