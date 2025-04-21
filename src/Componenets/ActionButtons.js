import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ActionButtons = ({ handleBack, handleNext, step, selectedQuestions, selectedAnswer, t }) => {
  const isBackDisabled = step === 0;
  const isNextDisabled = !selectedAnswer;
  const isLastStep = step === selectedQuestions.length - 1;

  return (
    <div className="button-group">
      <button
        onClick={handleBack}
        disabled={isBackDisabled}
        className={`action-button ${isBackDisabled ? "disabled" : "enabled"}`}
      >
        <FaArrowLeft className="icon" /> {t("back")}
      </button>

      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`action-button ${isNextDisabled ? "disabled" : "enabled"}`}
      >
        {isLastStep ? t("submit") : t("next")} <FaArrowRight className="icon" />
      </button>
    </div>
  );
};

export default ActionButtons;
