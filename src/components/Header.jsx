import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef(null);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, [i18n]);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [isMenuOpen]);

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
    <header className="flex flex-col md:flex-row h-auto md:h-[78px] w-full justify-between items-center p-6 bg-purple-600 dark:bg-indigo-800 text-white transition-all duration-200">
      <div className="flex items-center justify-between md:w-1/4 ml-5 w-full">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src={logo} alt="Header Logo" className="w-[60px]" />
        </Link>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoMdClose size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      <div
        ref={menuRef}
        tabIndex={-1} 
        className="flex flex-col md:flex-row items-center justify-around w-full"
      >
        <Nav isMenuOpen={isMenuOpen} />
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 items-center">
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
