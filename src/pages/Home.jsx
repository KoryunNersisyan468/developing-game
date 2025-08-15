import StartBtn from "@/components/StartBtn";
import { useTranslation } from "react-i18next";
import homeBg from "/HomeBg.webp";

export default function Home() {
  const { t } = useTranslation("messages");

  return (
    <div className="md:h-[calc(100vh-78px)] h-[calc(100vh-124px)] relative w-full flex flex-col justify-around items-center">
      <img
        className="w-full object-fill md:object-cover  md:h-[calc(100vh-78px)] h-[calc(100vh-124px)] absolute -z-60"
        src={homeBg}
        srcSet="/developing-game/HomeBg-412.webp 412w, /developing-game/HomeBg.webp 842w"
        sizes="(max-width: 600px) 412px, 842px"
        alt="HomeBg"
        fetchPriority="high"
        width="842"
        height="600"
      />
      <div className="absolute top-1/6 xl:gap-24 lg:gap-20 sm:gap-16 gap-12 left-1/10 flex transition-all duration-200 text-gray-900 dark:text-white flex-col justify-between items-start">
        <h1 className="xl:text-7xl home_title font-bold text-3xl lg:text-6xl sm:text-3xl md:text-4xl sm:w-xs w-2xs">
          {t("home_title")}
        </h1>
        <p className="md:text-xl lg:text-3xl text-lg lg:w-lg md:w-sm w-3xs">
          {t("home_description")}
        </p>
        <StartBtn
          px="px-3 lg:px-[68px] md:px-16 xl:px-[72px]"
          py="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10"
        />
      </div>
    </div>
  );
}
