import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import ClimateAvatar from "./Componenets/ClimateAvatar.js";
import translations from "./translations.js";
import LanguageSelector from "./Componenets/LanguageSelector.js";
import ProgressBar from "./Componenets/ProgressBar.js";
import Question from "./Componenets/Question.js";
import ActionButtons from "./Componenets/ActionButtons.js";
import SurveyCompletion from "./Componenets/SurveyCompletion.js";
import { BsPersonWalking } from "react-icons/bs";

function SurveyGame() {
  const [language, setLanguage] = useState("en");
  const [questionsList, setQuestionsList] = useState([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [lastInterest, setLastInterest] = useState(null);
  const [otherQuestionsAdded, setOtherQuestionsAdded] = useState(false);
  const [userCode, setUserCode] = useState(""); 
  const [consentGiven, setConsentGiven] = useState(false);

  // Dynamically import language-specific questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const personalModule = await import(`./Questions/Personal.js`);
        const personalQs = personalModule.default || [];

        setQuestionsList(personalQs);
        setStep(0);
        setAnswers([]);
        setSelectedAnswer("");
        setSurveyCompleted(false);
      } catch (err) {
        console.error(`Error loading questions for ${language}:`, err);
        setQuestionsList([]);
      }
    };
    loadQuestions();
  }, [language]);  

  // const playSound = (sound) => {
  //   const audio = new Audio(sound);
  //   audio.play();
  // };

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    // playSound("/sounds/answer-select.wav");
  };

  const handleStart = async () => {
    try {
      const res = await fetch("https://climate-survey-backend.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
  
      const data = await res.json();
      if (data._id) {
        sessionStorage.setItem("userId", data._id);
        setUserCode(""); 
        console.log("User ID saved in session:", data._id);
        setHasStarted(true);
      } else {
        console.error("Invalid user data:", data);
      }
    } catch (err) {
      console.error("Failed to register user:", err);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      const previousStep = step - 1;
      const previousQuestion = questionsList[previousStep];
      const previousAnswer = answers[previousStep];
  
      setStep(previousStep);
  
      if (previousQuestion?.multiple) {
        setSelectedAnswer(previousAnswer ? previousAnswer.split(" ") : []);
      } else {
        setSelectedAnswer(previousAnswer || "");
      }
  
      setAnswers(answers.slice(0, -1));
      // playSound("/sounds/back.mp3");
    }
  };  

  const handleNext = async () => {
    if (!selectedAnswer || (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)) return;
  
    const updatedAnswers = [...answers];
    const currentQuestion = questionsList[step];
    let newQuestionsList = [...questionsList];
  
    try {
      // --- Handle "Job Status"
      if (currentQuestion?.question?.en === "Job Status") {
        if (selectedAnswer === "Unemployed") {
          newQuestionsList = newQuestionsList.filter(q => q?.id !== 7 && q?.id !== 8);
        } else if (selectedAnswer === "Employed") {
          const personalModule = await import("./Questions/Personal.js");
          const jobRole = personalModule?.default?.find(q => q?.id === 7);
          const jobLevel = personalModule?.default?.find(q => q?.id === 8);
  
          const jobStatusIndex = newQuestionsList.findIndex(q => q?.question?.en === "Job Status");
  
          if (jobStatusIndex !== -1) {
            const existingIds = newQuestionsList.map(q => q.id);
  
            if (jobRole && !existingIds.includes(7)) {
              newQuestionsList.splice(jobStatusIndex + 1, 0, jobRole);
            }
            if (jobLevel && !existingIds.includes(8)) {
              newQuestionsList.splice(jobStatusIndex + 2, 0, jobLevel);
            }
          }
        }
      }
  
      // --- Handle "Topic(s) of interest"
      if (currentQuestion?.question?.en === "Topic(s) of interest") {
        const existingTexts = newQuestionsList.map(q => q?.question?.en);
  
        // Remove previous interests if any
        if (lastInterest?.length) {
          for (const interest of lastInterest) {
            try {
              const prevModule = await import(`./Questions/${interest}.js`);
              const prevQuestions = prevModule.default || [];
              newQuestionsList = newQuestionsList.filter(q => 
                !prevQuestions.some(pq => pq?.question?.en === q?.question?.en)
              );
            } catch (err) {
              console.warn(`Failed to remove questions from previous interest: ${interest}`, err);
            }
          }
        }
  
        const newInterests = Array.isArray(selectedAnswer) ? selectedAnswer : [selectedAnswer];
        const interestQuestionsToInsert = [];
  
        for (const interest of newInterests) {
          if (interest !== "Politics" && interest !== "Culture") {
            try {
              const interestModule = await import(`./Questions/${interest}.js`);
              const interestQuestions = interestModule.default || [];
              interestQuestions.forEach(q => {
                if (q?.question?.en && !existingTexts.includes(q.question.en)) {
                  interestQuestionsToInsert.push(q);
                }
              });
            } catch (err) {
              console.warn(`No questions found for interest: ${interest}`, err);
            }
          }
        }
  
        // Insert interest questions after Personal (id 8)
        const insertAfterIndex = newQuestionsList.findIndex(q => q?.id === 8);
        const insertIndex = insertAfterIndex !== -1 ? insertAfterIndex + 1 : newQuestionsList.length;
  
        if (!otherQuestionsAdded) {
          try {
            const [climate, additional, conspiracies, big5] = await Promise.all([
              import("./Questions/Climate.js"),
              import("./Questions/Additional.js"),
              import("./Questions/Conspiracies.js"),
              import("./Questions/Big5.js"),
            ]);
  
            const extraQuestions = [
              ...(climate.default || []),
              ...(additional.default || []),
              ...(conspiracies.default || []),
              ...(big5.default || []),
            ];
  
            extraQuestions.forEach(q => {
              if (q?.question?.en && !existingTexts.includes(q.question.en)) {
                interestQuestionsToInsert.push(q);
              }
            });
  
            setOtherQuestionsAdded(true);
          } catch (err) {
            console.warn("Failed to load extra question sets", err);
          }
        }
  
        if (interestQuestionsToInsert.length > 0) {
          newQuestionsList.splice(insertIndex, 0, ...interestQuestionsToInsert);
        }
  
        setLastInterest(newInterests);
      }
  
      // Save the current answer
    if (currentQuestion?.multiple && Array.isArray(selectedAnswer)) {
      updatedAnswers[step] = selectedAnswer.join(" ");
    } else {
      updatedAnswers[step] = selectedAnswer;
    }
  
    setAnswers(updatedAnswers);
    setQuestionsList(newQuestionsList);
  
    // Final step
    if (step >= newQuestionsList.length - 1) {
      setSurveyCompleted(true);
      const userId = sessionStorage.getItem("userId");
  
      const structuredAnswers = Array.from({ length: 93 }, (_, id) => {
        const index = newQuestionsList.findIndex(q => q?.id === id);
        return {
          questionId: id.toString(),
          answer: index !== -1 && updatedAnswers[index] ? updatedAnswers[index] : "N/A",
        };
      });
  
      try {
        const response = await fetch("https://climate-survey-backend.onrender.com/api/surveys", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            answers: structuredAnswers,
          }),
        });
  
        const result = await response.json();
        sessionStorage.setItem("userCode", result.userCode);
        setUserCode(result.userCode);
      } catch (error) {
        console.error("Error submitting survey:", error);
      }
    } else {
      const nextQuestionId = newQuestionsList[step + 1]?.id;
      const newStep = newQuestionsList.findIndex(q => q?.id === nextQuestionId);
  
      setStep(newStep);
      const nextQuestion = newQuestionsList[newStep];
      setSelectedAnswer(updatedAnswers[newStep] || (nextQuestion?.multiple ? [] : ""));
    }
    } catch (err) {
        console.error("Error in handleNext:", err);
    }
  };  

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };

  const progressPercent =
    questionsList.length > 1 ? (step / (questionsList.length - 1)) * 100 : 0;

  useEffect(() => {
    document.documentElement.style.setProperty("--walker-left", `${progressPercent}%`);
  }, [progressPercent]);

  const t = (key, fallback = "default") =>
    translations[key]?.[language] || translations[key]?.[fallback] || key;

  // Function to find the closest milestone
  const getMilestoneMessage = (progress) => {
    const roundedProgress = Math.round(progress);
    if (translations.milestones[roundedProgress]) {
      return translations.milestones[roundedProgress];
    }
    const closestMilestone = Object.keys(translations.milestones)
      .map(Number)
      .filter((m) => m <= roundedProgress)
      .sort((a, b) => b - a)[0];
    return translations.milestones[closestMilestone] || {};    
  };

  // Fetch milestone message based on current progress
  const milestone = getMilestoneMessage(progressPercent);

  return (
    <div className="container mx-auto p-4 relative">
      {surveyCompleted && <Confetti />}
  
      <h2 className="text-2xl font-bold text-center mb-6">
        🎉 {t("title")} 🎉
      </h2>
  
      {!hasStarted && (
        <div className="text-center mt-10">
          <LanguageSelector language={language} handleLanguageChange={handleLanguageChange} />

          <h3>{t("welcomeMessage")}</h3>
          <p className="text-xl font-medium mb-6">
            {t("surveyIntro")}
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <input
              type="checkbox"
              id="consent"
              checked={consentGiven}
              onChange={() => setConsentGiven(!consentGiven)}
              className="mr-2"
            />
            <label htmlFor="consent" className="text-sm">
              {t("consentStatement")}
            </label>
          </div>

          <button
            onClick={handleStart}
            disabled={!consentGiven}
            className={`start-button ${!consentGiven ? "disabled" : "enabled"}`}
          >
            {t("startButton")}
          </button>
        </div>
      )}
  
      {hasStarted && !surveyCompleted && (
        <>
          <div className="flex items-center space-x-4 mb-4">
            <ProgressBar progressPercent={progressPercent} />
            <ClimateAvatar progress={progressPercent} />
          </div>
  
          <div className="mt-4">
            <Question
              question={questionsList[step]}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswerSelection}
              step={step}
              total={questionsList.length}
              t={t}
              language={language}
            />
  
            <ActionButtons
              handleBack={handleBack}
              handleNext={handleNext}
              step={step}
              selectedQuestions={questionsList}
              selectedAnswer={selectedAnswer}
              t={t}
            />
  
            <AnimatePresence>
              {milestone && (
                <motion.p
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="milestone text-lg text-blue-600 font-semibold mt-4"
                >
                  {translations.milestones[Math.round(progressPercent)]?.[language]
                    || translations.milestones[Math.round(progressPercent)]?.default
                    || milestone?.[language]
                    || milestone?.default
                  }
                </motion.p>
              )}
            </AnimatePresence>
          </div>
  
          <div className="progress-container relative mt-6 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="progress-bar bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="walker-wrapper absolute top-1/2 transform -translate-y-1/2"
              style={{ left: `calc(${progressPercent}% - 1rem)` }}
            >
              <div className="walker text-2xl">
                <BsPersonWalking />
              </div>
            </div>
          </div>
        </>
      )}
  
      {surveyCompleted && <SurveyCompletion t={t} userCode={userCode} />}
    </div>
  );  
}

export default SurveyGame;