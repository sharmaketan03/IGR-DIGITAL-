


import BlogCard, {
  BlogCardData,
} from "@/components/blogpage/blogCard";

interface BlogGridProps {
  blogs: BlogCardData[];
  emptyMessage?: string;
}

export default function BlogGrid({
  blogs,
  emptyMessage = "No blogs found.",
}: BlogGridProps) {
  if (!blogs.length) {
    return (
      <div className="border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h3 className="text-xl font-bold text-[#16213a]">
          No blogs found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}