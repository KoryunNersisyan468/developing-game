import React from "react";
import { useNavigate } from "react-router";

function GameOverScreen({
  t,
  timeLeft,
  correctAnswers,
  quizQuestions,
  formatTime,
}) {
  const navigate = useNavigate();

  return (
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
  );
}

export default GameOverScreen;
