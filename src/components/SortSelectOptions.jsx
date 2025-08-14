import ResultsOptions from "./ResultsOptions";

export default function SortSelectOptions({ sortedResults, t }) {
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
  return (
    <ul className="gap-5 max-h-[700px] overflow-auto flex custom-scrollbar flex-col">
          {sortedResults.map((item, index) => {
            const percentage = Math.round(
              (item.score / item.totalQuestions) * 100
            );
            return (
              <ResultsOptions
                t={t}
                key={index}
                item={item}
                percentage={percentage}
                getResultColor={getResultColor}
                getResultText={getResultText}
              />
            );
          })}
        </ul>
  );
};
