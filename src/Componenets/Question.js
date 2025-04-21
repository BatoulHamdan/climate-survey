import { motion } from 'framer-motion';

function Question({ question, selectedAnswer, onAnswer, step, total, t, language }) {
  if (!question) return null;

  return (
    <div className="question-container">
      {/* Render question in selected language */}
      <p className="question text-xl font-medium mb-4">{question.question[language]}</p>

      <div className="options space-y-3">
        {question.options.map((option, index) => (
          <motion.label
            key={index}
            className="option-label block p-2 bg-gray-100 rounded-lg cursor-pointer"
            initial={{ scale: 1 }}
            animate={{
              scale: selectedAnswer === option.value ? 1.1 : 1,
              opacity: selectedAnswer === option.value ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <input
              type="radio"
              name="question"
              value={option.value}
              checked={selectedAnswer === option.value}
              onChange={() => onAnswer(option.value)} // Use `option.value` here
              className="mr-2"
            />
            {/* Render option label in selected language */}
            {option.label[language]}
          </motion.label>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-1">
        {t("question")} {step + 1} {t("of")} {total}
      </p>
    </div>
  );
}

export default Question;
