import { useTranslation } from "react-i18next";

export default function AboutInfo() {
  const { t } = useTranslation("messages");
  return (
    <div className="flex md:w-2/3 w-5/6 justify-around items-center flex-col">
      <h1 className="md:text-8xl text-6xl text-center bg-gradient-to-r dark:from-indigo-700 dark:to-fuchsia-300 from-fuchsia-700 to-indigo-300 bg-clip-text text-transparent mt-4 font-bold">
        {t("about_h")}
      </h1>
      <p className="md:text-3xl text-2xl border-0 flex flex-col gap-3 justify-between items-start dark:border-blue-300 border-purple-300 rounded-2xl box-border p-5 mt-6 w-full">
        <span>{t("about_description_1")}</span>
        <span>{t("about_description_2")}</span>
        <span>{t("about_description_3")}</span>
        <span>{t("about_description_4")}</span>
        <span>{t("about_description_5")}</span>
      </p>
    </div>
  );
}
