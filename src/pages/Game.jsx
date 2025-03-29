import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function Game() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerId, setTimerId] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const shuffleQuestions = (data) => {
    return data
      .sort(() => 0.5 - Math.random())
      .slice(0, 20)
      .map((q) => ({
        ...q,
        options: q.options.sort(() => 0.5 - Math.random()).slice(0, 4),
      }));
  };

  const loadQuestions = async (language) => {
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}locales/${language}/questions.json`
      );
      const data = await response.json();
      const shuffledQuestions = shuffleQuestions(data);
      setQuizQuestions(shuffledQuestions);
    } catch (error) {
      console.error("Ошибка при загрузке вопросов:", error);
    }
  };

  useEffect(() => {
    if (!isGameStarted) {
      loadQuestions(i18n.language);
    }
  }, [i18n.language, isGameStarted]);

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerId(timer);
      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

  const handleSelect = (qIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: answer }));
  };

  const handleSubmit = () => {
    clearInterval(timerId);
    setShowResults(true);

    let correctAnswersCount = 0;

    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correctAnswersCount++;
      }
    });

    setCorrectAnswers(correctAnswersCount);

    const totalQuestions = quizQuestions.length;
    const results = quizQuestions.map((q, index) => ({
      question: t(q.question),
      selected: selectedAnswers[index] || "",
      correct: q.correct,
      isCorrect: selectedAnswers[index] === q.correct,
    }));

    const timestamp = new Date().toLocaleString();
    const storedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    storedResults.push({
      results,
      index: storedResults.length,
      score: correctAnswersCount,
      totalQuestions,
      timestamp,
      timeSpent: 600 - timeLeft,
    });
    localStorage.setItem("quizResults", JSON.stringify(storedResults));
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="bg-purple-200 dark:bg-indigo-400 transition-all duration-200 p-8 w-full">
      {!isGameStarted && (
        <div className="p-2 w-full transition-all duration-200 flex justify-center items-center min-h-[calc(100vh-142px)] mx-auto text-black dark:text-gray-200 ">
          <div className="w-3/4 gap-12 flex-col flex justify-center items-center">
            <div className="md:text-xl text-lg">
              <div className="">
                <p className="md:text-7xl text-5xl font-bold float-left mr-2 leading-none">
                  {t("game_description_1")[0]}
                </p>
                <p className="align-text-top">
                  {t("game_description_1").slice(1)}
                </p>
              </div>

              <br />
              <div>
                <p className="md:text-5xl text-3xl font-bold float-left mr-2 leading-none">
                  {t("game_description_2").slice(0, 2)}
                </p>
                <p className="align-text-top">
                  {t("game_description_2").slice(
                    2,
                    t("game_description_2").length
                  )}
                </p>
              </div>
              <br />
              <div className="">
                <p className="md:text-7xl text-5xl font-bold float-left mr-2 leading-none">
                  {t("game_description_3")[0]}
                </p>
                <p className="align-text-top">
                  {t("game_description_3").slice(1)}
                </p>
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
      )}
      {isGameStarted && (
        <div className="w-full min-h-[calc(100vh-142px)] sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 transition-all duration-200 mx-auto text-black dark:text-gray-200 bg-purple-300 dark:bg-indigo-700">
          <div className="p-4 text-lg text-right dark:text-white text-black font-bold">
            {formatTime(timeLeft)}
          </div>
          <div className="mt-3 lg:text-lg text-sm sm:text-base pb-4 max-h-[calc(100vh-300px)] custom-scrollbar overflow-y-auto">
            {quizQuestions.map((q, qIndex) => (
              <div key={qIndex} className="mb-4 p-4">
                <h3 className="font-bold mb-2">{t(q.question)}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((option, optIndex) => {
                    let bgColor = "bg-gray-200";
                    if (showResults) {
                      if (option === q.correct) bgColor = "bg-green-400";
                      else if (option === selectedAnswers[qIndex])
                        bgColor = "bg-red-400";
                    } else if (selectedAnswers[qIndex] === option) {
                      bgColor = "bg-blue-400";
                    }
                    return (
                      <button
                        key={optIndex}
                        className={`${bgColor} text-xs sm:text-sm lg:text-base text-black p-2 rounded`}
                        onClick={() => handleSelect(qIndex, option)}
                        disabled={showResults}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="w-full flex justify-around items-center">
              <button
                className="mt-4 bg-amber-500 py-3 text-lg px-8 rounded-2xl"
                onClick={handleSubmit}
                disabled={showResults}
              >
                {t("submit")}
              </button>
            </div>
          </div>

          {showResults && (
            <div className="mt-2 p-2 text-lg text-center">
              <p>{t("game_over")}</p>
              <p>
                {t("time_spent")}: {formatTime(600 - timeLeft)}
              </p>
              <p>
                {t("score")}: {correctAnswers} / {quizQuestions.length}
              </p>
              <div>
                <button
                  className="m-2 p-2 bg-cyan-500 text-white rounded"
                  onClick={() => navigate("/results")}
                >
                  {t("see_results")}
                </button>
              </div>
              <button
                className="m-2 p-2 bg-blue-500 text-white rounded"
                onClick={() => window.location.reload()}
              >
                {t("play_again")}
              </button>
              <button
                className="m-2 p-2 bg-gray-500 text-white rounded"
                onClick={() => navigate("/home")}
              >
                {t("home")}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
