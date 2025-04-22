export default function BlogInfo({blog}) {
    return (
      <div className="w-full mt-3 flex-col xl:flex-row justify-between items-start flex gap-6">
        <div className="xl:w-2/5 w-full">
          <LazyImage
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
    );
};
