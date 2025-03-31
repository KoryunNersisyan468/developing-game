import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function StartBtn({ px = "px-20", py = "py-8" }) {
  const { t } = useTranslation();
  return (
    <Link to="/game">
      <button
        type="button"
        className={`dark:text-white text-gray-900 transition-all text-3xl duration-200 bg-gradient-to-br from-purple-800 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none dark:focus:ring-blue-800 focus:ring-purple-800 font-medium rounded-lg ${px} ${py} text-center`}
      >
        {t("play")}
      </button>
    </Link>
  );
}
