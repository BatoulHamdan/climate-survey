import { motion } from 'framer-motion';

function Question({ question, selectedAnswer, onAnswer, step, total, t, language }) {
  if (!question) return null;

  const isMultiple = question.multiple;

  return (
    <div className="question-container">
      {/* Render question in selected language */}
      <p className="question text-xl font-medium mb-4">{question.question[language]}</p>

      <div className="options space-y-3">
        {question.options.map((option, index) => {
          const isSelected = isMultiple
            ? selectedAnswer.includes(option.value)
            : selectedAnswer === option.value;

          return (
            <motion.label
              key={index}
              className={`option-label block p-2 rounded-lg cursor-pointer ${
                isSelected ? 'bg-blue-100' : 'bg-gray-100'
              }`}
              initial={{ scale: 1 }}
              animate={{
                scale: isSelected ? 1.1 : 1,
                opacity: isSelected ? 1 : 0.7,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <input
                type={isMultiple ? "checkbox" : "radio"}
                name="question"
                value={option.value}
                checked={isSelected}
                onChange={() => {
                  if (isMultiple) {
                    const updated = selectedAnswer.includes(option.value)
                      ? selectedAnswer.filter(val => val !== option.value)
                      : [...selectedAnswer, option.value];
                    onAnswer(updated);
                  } else {
                    onAnswer(option.value);
                  }
                }}
                className="mr-2"
              />
              {option.label[language]}
            </motion.label>
          );
        })}
      </div>

      <p className="text-sm text-gray-500 mb-1">
        {t("question")} {step + 1} {t("of")} {total}
      </p>
    </div>
  );
}

export default Question;
