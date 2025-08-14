import UserCard from "@/components/UserCard";
import AnanimImg from "/AnanimImage.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutInfo from "../components/AboutInfo";

export default function About() {
  const { i18n } = useTranslation("messages");
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const language = i18n.language;
    fetch(`${import.meta.env.BASE_URL}locales/${language}/users.json`)
      .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) =>
        console.error("Ошибка при загрузке пользователей:", error)
      );
  }, [i18n.language]);

  return (
    <div className="w-full flex justify-center dark:text-black text-zinc-900 bg-stone-200 transition-all duration-200 dark:bg-stone-300 gap-6 flex-col items-center">
      <AboutInfo />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
        {usersData.map((item, index) => (
          <UserCard
            key={index}
            src={
              item.image
                ? `${import.meta.env.BASE_URL}${item.image}`
                : AnanimImg
            }
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
