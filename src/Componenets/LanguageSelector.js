import React from "react";

const LanguageSelector = ({ language, handleLanguageChange }) => {
  return (
    <div className="language-selector-container mb-4 text-right">
      <select
        id="language-select"
        className="language-select px-2 py-1 border rounded"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="ar">العربية</option>
        <option value="fa">فارسی</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
