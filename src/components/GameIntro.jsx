export default function GameIntro({ handleStartGame, t }) {
  return (
    <div className="p-2 w-full transition-all duration-200 flex justify-center items-center min-h-[calc(100vh-142px)] mx-auto text-black dark:text-gray-200 ">
      <div className="md:w-3/4 sm:w-4/5 w-full gap-12 flex-col flex justify-center items-center">
        <div className="md:text-xl text-lg">
          <div className="">
            <p className="md:text-7xl text-5xl font-bold float-left mr-2 leading-none">
              {t("game_description_1")[0]}
            </p>
            <p className="align-text-top">{t("game_description_1").slice(1)}</p>
          </div>
          <br />
          <div>
            <p className="md:text-5xl text-3xl font-bold float-left mr-2 leading-none">
              {t("game_description_2").slice(0, 2)}
            </p>
            <p className="align-text-top">
              {t("game_description_2").slice(2, t("game_description_2").length)}
            </p>
          </div>
          <br />
          <div className="">
            <p className="md:text-7xl text-5xl font-bold float-left mr-2 leading-none">
              {t("game_description_3")[0]}
            </p>
            <p className="align-text-top">{t("game_description_3").slice(1)}</p>
          </div>
          <br />
          <p className="font-bold md:text-3xl text-xl text-center">
            {t("game_description_4")}
          </p>
        </div>
        <button
          onClick={handleStartGame}
          type="button"
          className="dark:text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br text-3xl focus:ring-4 focus:outline-none focus:ring-green-300 text-gray-800 dark:focus:ring-green-800 font-medium rounded-lg px-12 py-4 text-center me-4 mb-4"
        >
          {t("start")}
        </button>
      </div>
    </div>
  );
}
