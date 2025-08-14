import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Nav({ isMenuOpen }) {
  const { t } = useTranslation();

  const menuList = [
    { text: t("about"), href: "/about" },
    { text: t("contact"), href: "/contact" },
    { text: t("blogs"), href: "/blogs" },
    { text: t("results"), href: "/results" },
  ];

  return (
    <nav className={`w-1/2 ${isMenuOpen ? "visible" : "hidden"} md:inline`}>
      <ul className="flex flex-col items-center justify-around md:flex-row gap-2">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
