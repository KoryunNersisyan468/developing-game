import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Nav from "./Nav";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LanguageSelector";
import logo from "/logo.svg";

export default function Header() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setSelectedLanguage(lng);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="flex flex-col h-auto md:h-[78px] relative w-full md:flex-row dark:text-gray-300 text-black text-xl bg-purple-600 transition-all duration-200 dark:bg-indigo-800 justify-between items-center p-4">
      <div className="flex items-center md:mb-0 md:justify-center justify-around md:w-1/4 w-full">
        <div className="text-xl mr-5 gap-2 flex justify-center items-center font-bold">
          <Link to="/">
            <img src={logo} className="w-[60px]" />
          </Link>
        </div>
        <div>
          {!isMenuOpen ? (
            <FaBars
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden"
              size={30}
            />
          ) : (
            <IoMdClose
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden"
              size={30}
            />
          )}
        </div>
      </div>

      <div className="flex justify-around md:flex-row flex-col items-center w-full">
        <Nav isMenuOpen={isMenuOpen} />
        <div className="flex gap-4 flex-col md:flex-row items-start md:items-center mt-4 md:mt-0">
          <LanguageSelector
            isMenuOpen={isMenuOpen}
            selectedLanguage={selectedLanguage}
            changeLanguage={changeLanguage}
            theme={theme}
          />

          <DarkModeToggle
            isMenuOpen={isMenuOpen}
            theme={theme}
            changeTheme={changeTheme}
          />
        </div>
      </div>
    </header>
  );
}
