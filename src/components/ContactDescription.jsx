import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebook, FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";

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
    <div className="flex w-full p-4 min-h-[calc(100vh-78px)] dark:bg-indigo-400 bg-purple-200 flex-col text-black dark:text-gray-200 gap-16 justify-center items-center transition-all duration-200">
      <div className="flex w-full mt-9 flex-col text-black dark:text-gray-200 gap-16 justify-center items-center">
        <h1 className="text-6xl md:text-8xl">{t("contact_h1")}</h1>
        <h2 className="text-5xl md:text-6xl">{t("contact_h2")}</h2>
        <h3 className="text-4xl md:text-5xl">{t("contact_h3")}</h3>

        <div>
          <div className="text-xl md:text-2xl flex flex-col gap-5">
            <a
              className="flex sm:flex-row flex-col gap-3 items-center text-gray-800 dark:text-gray-300"
              href={`https://mail.google.com/mail/?view=cm&to=developingrestlotto@gmail.com&su=${t(
                "gmail_a_su"
              )}&body=${t("gmail_a_body")}`}
              target="_blank"
            >
              <div className="flex gap-2 justify-center items-center">
                <IoIosMail size={24} />
                {t("email")}:{" "}
              </div>
              <span className="text-gray-900 dark:text-gray-200">
                developingrestlotto@gmail.com
              </span>
            </a>

            <a
              className="cursor-pointer sm:flex-row flex-col flex gap-3 items-center text-gray-800 dark:text-gray-300"
              href={isMobile() ? "tel:+37491220295" : "#"}
              onClick={handlePhoneClick}
            >
              <div className="flex gap-2 justify-center items-center">
                <FaPhoneAlt size={24} />
                {t("telephone")}:{" "}
              </div>
              <span className="relative text-gray-900 dark:text-gray-200">
                +374 91 22 02 95
                {showTooltip && (
                  <div className="z-10 absolute -top-11 bg-gray-700 rounded-xl rounded-bl-none w-52 py-2 text-center box-border opacity-90 text-gray-200 -right-52">
                    {t("copy")}
                  </div>
                )}
              </span>
            </a>

            <a
              target="blank"
              className="flex gap-3 md:flex-row justify-center items-center flex-col text-gray-800 dark:text-gray-300"
              href="https://www.google.com/maps/place/High+School+No.1/@40.2697264,44.6235055,19z/data=!4m6!3m5!1s0x406aa1c5af2b1123:0xdf37b03c65a061f1!8m2!3d40.2699661!4d44.6242034!16s%2Fg%2F1tcw6n_5?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
            >
              <span className="flex justify-center items-center gap-2">
                <FaLocationCrosshairs size={24} />
                {t("address")}:
              </span>
              <span className="text-gray-900 dark:text-gray-200">
                {t("address_name")}
              </span>{" "}
            </a>
          </div>

          <div className="flex mt-5 gap-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/abovyani__1dproc/"
            >
              <FaInstagram size={32} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/share/1J2CYksGhc/"
            >
              <FaFacebook size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
