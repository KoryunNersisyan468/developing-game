import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import NoResults from "../components/NoResults";
import SortSelect from "../components/SortSelect";
import SortSelectOptions from "../components/SortSelectOptions";

export default function Results() {
  const { t } = useTranslation("messages");
  const [quizResults, setQuizResults] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    setQuizResults(storedResults);
  }, []);

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
        <SortSelect
          t={t}
          sortOption={sortOption}
          setSortOption={setSortOption}
          handleClearResults={handleClearResults}
        />
        <SortSelectOptions t={t} sortedResults={sortedResults} />
      </div>
    </div>
  ) : (
    <NoResults t={t} />
  );
}
