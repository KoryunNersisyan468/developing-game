import { Link, useParams } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import BlogInfo from "../components/BlogInfo";
import { FallbackLoader } from "../components/FallbackLoader";

const Carousel = lazy(() => import("../components/Carousel"));

export default function BlogSingle() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

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
        const selectedBlog = data.find((blog) => blog.id === slug);
        setBlog(selectedBlog);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке:", error);
      });
  }, [i18n.language, slug]);
  if (!blog) return <FallbackLoader />;

  return (
    <div className="w-full box-border min-h-[calc(100vh-108px)] md:min-h-[calc(100vh-78px)] p-3 dark:text-gray-300 text-black bg-purple-300 transition-all duration-200 dark:bg-indigo-500 justify-center items-start flex-col">
      <Link to="/blogs">
        <FaArrowCircleLeft className="text-5xl md:text-6xl" />
      </Link>
      <BlogInfo blog={blog} />
      <div className="w-full mt-5 box-border">
        
        <Suspense
              fallback={
                <FallbackLoader />
              }
            >
          <Carousel blog={blog} />
        </Suspense>
      </div>
    </div>
  );
}
