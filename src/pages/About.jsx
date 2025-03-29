import UserCard from "@/components/UserCard";
import AnanimImg from "/AnanimImage.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation("messages");
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const language = i18n.language;
    localStorage.removeItem(`users_${language}`);

    fetch(`${import.meta.env.BASE_URL}locales/${language}/users.json`)
      .then((response) => response.json())
      .then((data) => {
        setUsersData(data);
        localStorage.setItem(`users_${language}`, JSON.stringify(data));
      })
      .catch((error) =>
        console.error("Ошибка при загрузке пользователей:", error)
      );
  }, [i18n.language]);

  return (
    <div className="w-full flex justify-center dark:text-black text-zinc-900 bg-stone-200 transition-all duration-200 dark:bg-stone-300 gap-6 flex-col items-center">
      <div className="flex md:w-2/3 w-5/6 justify-around items-center flex-col">
        <h1 className="md:text-8xl text-6xl text-center bg-gradient-to-r dark:from-indigo-700 dark:to-fuchsia-300 from-fuchsia-700 to-indigo-300 bg-clip-text text-transparent mt-4 font-bold">
          {t("about_h")}
        </h1>
        <p className="md:text-3xl text-2xl border-0 flex flex-col gap-3 justify-between items-start  dark:border-blue-300 border-purple-300 rounded-2xl box-border p-5 mt-6 w-full">
          <span>{t("about_description_1")}</span>
          <span>{t("about_description_2")}</span>
          <span>{t("about_description_3")}</span>
          <span>{t("about_description_4")}</span>
          <span>{t("about_description_5")}</span>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
        {usersData.map((item, index) => (
          <UserCard
            key={index}
            src={item.image || AnanimImg}
            description={item.description}
            nameFL={item.nameFL}
            instagram={item.instagram}
            facebook={item.facebook}
            tiktok={item.tiktok}
            behance={item.behance}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
}
