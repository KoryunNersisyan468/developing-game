import StartBtn from "@/components/StartBtn";
import { useTranslation } from "react-i18next";
import homeBg from "/HomeBg.png";

export default function Home() {
  const { t } = useTranslation("messages");

  return (
    <div className="md:h-[calc(100vh-78px)] h-[calc(100vh-108px)] relative w-full flex flex-col justify-around items-center">
      <img
        className="w-full object-cover md:min-h-[calc(100vh-78px)] xl:min-h-[calc(100vh-78px)] 2xl:min-h-[calc(100vh-78px)] min-h-[calc(100vh-108px)] absolute -z-60"
        src={homeBg}
        alt="HomeBg"
      />
      <div className="absolute top-1/6 xl:gap-24 lg:gap-20 sm:gap-16 gap-12 left-1/10 flex transition-all duration-200 text-gray-900 dark:text-white flex-col justify-between items-start">
        <h1 className="xl:text-8xl home_title font-bold text-4xl lg:text-7xl sm:text-4xl md:text-5xl sm:w-xs w-2xs">
          {t("home_title")}
        </h1>
        <p className="md:text-2xl lg:text-4xl text-xl lg:w-lg md:w-sm w-3xs">
          {t("home_description")}
        </p>
        <StartBtn
          px="px-3 lg:px-16 md:px-[70px] xl:px-20"
          py="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10"
        />
      </div>
    </div>
  );
}
