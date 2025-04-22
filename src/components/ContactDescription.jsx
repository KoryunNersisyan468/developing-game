import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "./ContactInfo";

export default function ContactDescription() {
  const { t } = useTranslation("messages");
  const [showTooltip, setShowTooltip] = useState(false);

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  const isMobile = () => window.innerWidth <= 768;

  const handlePhoneClick = () => {
    if (!isMobile()) {
      copyTextToClipboard("+37491220295");
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 1500);
    }
  };

  return (
    <div className="flex w-full p-4 min-h-[calc(100vh-78px)] dark:bg-indigo-300 bg-purple-200 flex-col text-black dark:text-gray-200 gap-16 justify-center items-center transition-all duration-200">
      <div className="flex w-full mt-9 flex-col text-black dark:text-gray-200 gap-16 justify-center items-center">
        <h1 className="md:text-8xl p-2 text-6xl text-center bg-gradient-to-r dark:from-indigo-800 dark:to-fuchsia-300 from-fuchsia-700 to-indigo-300 bg-clip-text text-transparent mt-4 font-bold">
          {t("contact_h1")}
        </h1>
        <h2 className="text-4xl md:text-6xl">{t("contact_h2")}</h2>
        <h3 className="text-3xl md:text-5xl">{t("contact_h3")}</h3>
        <ContactInfo
          handlePhoneClick={handlePhoneClick}
          isMobile={isMobile}
          showTooltip={showTooltip}
        />
      </div>
    </div>
  );
}
