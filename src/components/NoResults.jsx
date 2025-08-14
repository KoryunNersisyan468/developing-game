import StartBtn from "./StartBtn";

export default function NoResults({ t }) {
  return (
    <div className="w-full md:min-h-[calc(100vh-78px)] text-center min-h-[calc(100vh-108px)] dark:text-gray-300 text-gray-700 gap-12 text-4xl md:text-6xl bg-purple-300 transition-all duration-200 dark:bg-indigo-500 justify-center flex flex-col items-center">
      <p>{t("no_results")}</p>
      <StartBtn />
    </div>
  );
}
