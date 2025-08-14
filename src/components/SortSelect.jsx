import StartBtn from "./StartBtn";

export default function SortSelect({
  sortOption,
  setSortOption,
  t,
  handleClearResults,
}) {
    
  return (
    <div className="mb-4 w-full flex md:justify-between justify-center items-center">
      <div className="flex w-full md:justify-between justify-center md:flex-row flex-col items-center md:gap-11 gap-6">
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
            className="dark:text-white text-gray-300 transition-all text-3xl duration-200 bg-gradient-to-br from-purple-800 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none dark:focus:ring-blue-800 focus:ring-purple-700 font-medium rounded-lg  text-center me-2 px-4 py-2"
          >
            {t("clear")}
          </button>

          <StartBtn px="px-4" py="py-2" />
        </div>
      </div>
    </div>
  );
}
