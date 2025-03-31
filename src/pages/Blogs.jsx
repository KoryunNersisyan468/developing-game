import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Blogs() {
  const { t, i18n } = useTranslation("");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const language = i18n.language;

    fetch(`${import.meta.env.BASE_URL}locales/${language}/blogs.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => console.error("Ошибка при загрузке:", error));
  }, [i18n.language]);

  return (
    <div className="w-full md:min-h-[calc(100vh-78px)] min-h-[calc(100vh-108px)] p-6 transition-all duration-200 bg-purple-300 dark:bg-indigo-900 text-black dark:text-white">
      <h1 className="md:text-7xl p-2 text-5xl text-center bg-gradient-to-r dark:from-indigo-700 dark:to-fuchsia-300 from-fuchsia-700 to-indigo-300 bg-clip-text text-transparent mb-7 font-bold">
        {t("blogs")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`} className="block">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
              <img
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
        ))}
      </div>
    </div>
  );
}
