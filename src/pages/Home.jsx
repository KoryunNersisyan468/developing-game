import StartBtn from "@/components/StartBtn";
import { useTranslation } from "react-i18next";
import homeBg from "@/assets/HomeBg.png";

export default function Home() {
  const { t } = useTranslation("messages");

  return (
    <div className="h-[calc(100vh-78px)] relative w-full flex flex-col justify-around items-center">
      <img
        className="w-full object-cover h-[calc(100vh-78px)] absolute -z-60"
        src={homeBg}
        alt="HomeBg"
      />
      <div className="absolute top-1/6 gap-24 left-1/10 flex transition-all duration-200 text-gray-900 dark:text-white flex-col justify-between items-start">
        <h1 className="sm:text-8xl home_title font-bold text-6xl w-96 sm:w-2xl">
          {t("home_title")}
        </h1>
        <p className="sm:text-4xl text-3xl w-96 sm:w-lg">
          {t("home_description")}
        </p>
        <StartBtn />
      </div>
    </div>
  );
}
