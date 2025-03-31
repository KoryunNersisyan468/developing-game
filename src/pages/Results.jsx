import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StartBtn from "../components/StartBtn";

export default function Results() {
  const { t } = useTranslation("messages");
  const [quizResults, setQuizResults] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    setQuizResults(storedResults);
  }, []);

  const getResultColor = (percentage) => {
    if (percentage >= 0 && percentage < 50)
      return "text-red-500 dark:text-red-800";
    if (percentage >= 50 && percentage < 80)
      return "text-blue-600 dark:text-blue-800";
    if (percentage >= 80 && percentage <= 100) {
      return "text-green-700 dark:text-green-800";
    }
  };

  const getResultText = (percentage) => {
    if (percentage >= 80 && percentage <= 100) return t("results_text_grate");
    if (percentage >= 50 && percentage < 80) return t("results_text_normal");
    return t("results_text_1");
  };

  const sortedResults = [...quizResults].sort((a, b) => {
    if (sortOption === "scoreDesc") return b.score - a.score;
    if (sortOption === "scoreAsc") return a.score - b.score;
    if (sortOption === "timeDesc") return b.timeSpent - a.timeSpent;
    if (sortOption === "timeAsc") return a.timeSpent - b.timeSpent;
    return 0;
  });

  const handleClearResults = () => {
    localStorage.removeItem("quizResults");
    setQuizResults([]);
  };

  return quizResults.length > 0 ? (
    <div className="w-full md:h-[calc(100vh-78px)] min-h-[calc(100vh-108px)] dark:text-gray-300 text-black text-xl bg-purple-300 transition-all duration-200 dark:bg-indigo-500 justify-center flex items-center">
      <div className="dark:bg-indigo-700 bg-purple-800 w-full lg:w-5/6 xl:1/2 p-6">
        <div className="mb-4 w-full flex md:justify-between justify-center items-center">
          <div className="flex w-full md:justify-between justify-cenetr md:flex-row flex-col items-center md:gap-11 gap-6">
            <div className="flex gap-2 justify-center flex-col md:flex-row items-center">
              <label className="text-gray-200  mr-2">{t("sort_by")}</label>
              <select
                className="p-2 border text-black rounded bg-amber-50"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">{t("result_default")}</option>
                <option value="scoreDesc">{t("result_highest_score")}</option>
                <option value="scoreAsc">{t("result_lowest_score")}</option>
                <option value="timeDesc">{t("result_most_time_spent")}</option>
                <option value="timeAsc">{t("result_least_time_spent")}</option>
              </select>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleClearResults}
                type="button"
                className="dark:text-white text-gray-900 transition-all text-3xl duration-200 bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none dark:focus:ring-blue-700 focus:ring-purple-700 font-medium rounded-lg  text-center me-2 mb-2 px-4 py-2"
              >
                {t("clear")}
              </button>

              <StartBtn px="px-4" py="py-2" />
            </div>
          </div>
        </div>
        <ul className="gap-5 max-h-[700px] overflow-auto flex custom-scrollbar flex-col">
          {sortedResults.map((item, index) => {
            const percentage = Math.round(
              (item.score / item.totalQuestions) * 100
            );
            return (
              <li
                key={index}
                className={`w-full p-3 flex md:flex-row flex-col justify-between items-start dark:bg-indigo-100 bg-purple-100 ${getResultColor(
                  percentage
                )}`}
              >
                <div className="bg-gray-300 text-center rounded-full w-7 h-7">
                  {item.index + 1}
                </div>
                <div>{item.timestamp}</div>
                <div>
                  <span>
                    {Math.floor(item.timeSpent / 60)} {t("minute")}{" "}
                  </span>
                  <span>
                    {item.timeSpent - 60 * Math.floor(item.timeSpent / 60)}{" "}
                    {t("seconds")}
                  </span>
                </div>
                <div>
                  {item.score} / {item.totalQuestions}
                </div>
                <div>{percentage}%</div>
                <div>{getResultText(percentage)}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : (
    <div className="w-full md:min-h-[calc(100vh-78px)] text-center min-h-[calc(100vh-108px)] dark:text-gray-300 text-gray-700 gap-12 text-4xl md:text-6xl bg-purple-300 transition-all duration-200 dark:bg-indigo-500 justify-center flex flex-col items-center">
      <p>{t("no_results")}</p>
      <StartBtn />
    </div>
  );
}
