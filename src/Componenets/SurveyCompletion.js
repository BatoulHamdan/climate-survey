import React from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const SurveyCompletion = ({ t, userCode }) => {
  // Share button functionality
  const handleShare = async () => {
    const message = `${t("thankYou")} 🎉\n${t("uniqueIDNote")}: ${userCode}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Climate Survey Complete!",
          text: message,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(message);
        alert(t("copiedToClipboard") || "Copied to clipboard!");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <>
      <Confetti />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="thank-you text-center mt-12 px-6 py-8 bg-white shadow-xl rounded-2xl max-w-xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-green-600 mb-4">{t("thankYou")}</h3>

        <p className="text-lg text-gray-700">{t("finishNote")}</p>

        <p className="text-lg text-gray-700 font-semibold mt-4">{t("uniqueIDNote")}</p>

        <div className="text-4xl font-extrabold text-indigo-600 my-4 tracking-widest">
          {userCode}
        </div>

        <p className="text-md text-gray-600 mt-4">{t("followInstagramNote")}</p>
        <a
          href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline block mt-1"
        >
          @your_instagram_handle
        </a>

        <p className="text-md text-gray-600 mt-4">{t("followUpNote")}</p>

        <button
          onClick={handleShare}
          className="start-button"
        >
          {t("shareButton") || "Share"}
        </button>

      </motion.div>
    </>
  );
};

export default SurveyCompletion;
