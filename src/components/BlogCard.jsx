import { Link } from "react-router";

export default function BlogCard({blog}) {
    return (
      <Link to={`/blogs/${blog.id}`} className="block">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
          <LazyImage
            src={
              blog.images?.[0]
                ? blog.images[0]
                : `${import.meta.env.BASE_URL}/HomeBg.png`
            }
            alt={blog.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{blog.date}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
              {blog.description}
            </p>
          </div>
        </div>
      </Link>
    );
};
