import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

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
  if (!blog) return <div className="text-center p-10">Загрузка...</div>;

  return (
    <div className="w-full box-border min-h-[calc(100vh-108px)] md:min-h-[calc(100vh-78px)] p-3 dark:text-gray-300 text-black bg-purple-300 transition-all duration-200 dark:bg-indigo-500 justify-center items-start flex-col">
      <div className="w-full flex-col xl:flex-row justify-between items-start flex gap-6">
        <div className="xl:w-2/5 w-full">
          <img
            className="object-cover max-h-[60vh] w-full"
            src={
              blog.images?.[0]
                ? `${import.meta.env.BASE_URL}${blog.images[0]}`
                : `${import.meta.env.BASE_URL}HomeBg.png`
            }
            alt="BlogImg"
          />
        </div>
        <div className="lg:w-3/5 w-full p-2">
          <div className="flex justify-between flex-col xl:flex-row items-start">
            <h1 className="lg:text-6xl text-4xl font-bold">{blog.title}</h1>
            <span className="mt-4 lg:text-3xl text-2xl">{blog.date}</span>
          </div>
          <div className="lg:text-2xl text-xl mt-7 xl:mt-14">
            {blog.description}
          </div>
        </div>
      </div>

      <div className="w-full mt-5 box-border">
        <Carousel blog={blog} />
      </div>
    </div>
  );
}
