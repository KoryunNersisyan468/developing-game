// Nav.jsx
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

  

export default function Nav({ isMenuOpen }) {
  const { t } = useTranslation();
  const location = useLocation();

const menuList = [
    { text: t("about"), href: "/about" },
    { text: t("contact"), href: "/contact" },
    { text: t("blogs"), href: "/blogs" },
    { text: t("results"), href: "/results" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`w-1/2 ${isMenuOpen ? "visible" : "hidden"} md:inline`}
    >
      <ul className="flex flex-col md:flex-row text-center gap-2 items-center justify-around">
        {menuList.map((item, idx) => 
           {
          const isActive = location.pathname === item.href; 
          return (
            <li key={idx}>
              <Link
                to={item.href}
                aria-current={isActive ? "page" : undefined} 
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

        
      
