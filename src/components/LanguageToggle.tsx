import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={t.switchLanguageLabel}
    >
      <Globe size={20} />
      <span className="font-semibold">
        {language === "en" ? "Español" : "English"}
      </span>
    </button>
  );
};