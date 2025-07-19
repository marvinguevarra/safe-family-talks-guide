import { useState } from "react";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <Globe size={20} />
      <span className="font-semibold">
        {language === "en" ? "Español" : "English"}
      </span>
    </button>
  );
};