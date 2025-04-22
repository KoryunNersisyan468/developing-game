import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import GameIntro from "../components/GameIntro";
import GameOverScreen from "../components/GameOverScreen";

export default function Game() {
  const { t, i18n } = useTranslation();

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
      {!isGameStarted && <GameIntro t={t} handleStartGame={handleStartGame} />}
      {isGameStarted && (
        <div className="w-full min-h-[calc(100vh-142px)] sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 transition-all duration-200 mx-auto text-black dark:text-gray-200 bg-purple-300 dark:bg-indigo-700">
          <div className="p-4 text-lg text-right dark:text-white text-black font-bold">
            {formatTime(timeLeft)}
          </div>
          <div className="mt-3 lg:text-lg text-sm sm:text-base pb-4 max-h-[calc(100vh-300px)] min-h-40 custom-scrollbar overflow-y-auto">
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
            <GameOverScreen
              timeLeft={timeLeft}
              correctAnswers={correctAnswers}
              quizQuestions={quizQuestions}
              formatTime={formatTime}
              t={t}
            />
          )}
        </div>
      )}
    </div>
  );
}
