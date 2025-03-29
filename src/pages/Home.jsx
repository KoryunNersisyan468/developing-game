import StartBtn from "@/components/StartBtn";
import { useTranslation } from "react-i18next";
import homeBg from "/HomeBg.png";

export default function Home() {
  const { t } = useTranslation("messages");

  return (
    <div className="md:h-[calc(100vh-78px)] h-[calc(100vh-108px)] relative w-full flex flex-col justify-around items-center">
      <img
        className="w-full object-cover md:h-[calc(100vh-78px)] h-[calc(100vh-108px)] absolute -z-60"
        src={homeBg}
        alt="HomeBg"
      />
      <div className="absolute top-1/6 xl:gap-24 lg:gap[88px] gap-20 left-1/10 flex transition-all duration-200 text-gray-900 dark:text-white flex-col justify-between items-start">
        <h1 className="xl:text-8xl  home_title font-bold text-5xl lg:text-7xl sm:text-6xl sm:w-xl w-xs">
          {t("home_title")}
        </h1>
        <p className="md:text-3xl lg:text-4xl text-2xl md:w-lg sm:w-xl w-xs">
          {t("home_description")}
        </p>
        <StartBtn />
      </div>
    </div>
  );
}
