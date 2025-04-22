export default function ResultsOptions({
  item,
  percentage,
  getResultColor,
  getResultText,
  t
}) {
  return (
    <li
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
          {item.timeSpent - 60 * Math.floor(item.timeSpent / 60)} {t("seconds")}
        </span>
      </div>
      <div>
        {item.score} / {item.totalQuestions}
      </div>
      <div>{percentage}%</div>
      <div>{getResultText(percentage)}</div>
    </li>
  );
}
