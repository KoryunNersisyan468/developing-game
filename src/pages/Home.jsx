import StartBtn from "@/components/StartBtn";
import { useTranslation } from "react-i18next";
import homeBg from "/HomeBg.png";

export default function Home() {
  const { t } = useTranslation("messages");

  return (
    <div className="md:h-[calc(100vh-78px)] h-[calc(100vh-108px)] relative w-full flex flex-col justify-around items-center">
      <img
        className="w-full object-cover md:min-h-[calc(100vh-78px)] xl:h-[calc(100vh-78px)] min-h-[calc(100vh-108px)] absolute -z-60"
        src={homeBg}
        alt="HomeBg"
      />
      <div className="absolute top-1/6 xl:gap-24 lg:gap[88px] sm:gap-20 gap-14 left-1/10 flex transition-all duration-200 text-gray-900 dark:text-white flex-col justify-between items-start">
        <h1 className="xl:text-8xl home_title font-bold text-4xl lg:text-7xl sm:text-6xl sm:w-xs w-2xs">
          {t("home_title")}
        </h1>
        <p className="md:text-3xl lg:text-4xl text-xl md:w-lg w-xs">
          {t("home_description")}
        </p>
        <StartBtn
          px="px-4 lg:px-16 md:px-[70px] xl:px-20"
          py="py-3 lg:py-7 md:py-8 xl:py-9"
        />
      </div>
    </div>
  );
}
