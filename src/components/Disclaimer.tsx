import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Disclaimer = () => {
  const { t } = useLanguage();
  
  return (
    <div className="disclaimer">
      <div className="flex items-start gap-3">
        <AlertCircle size={24} className="text-secondary mt-1 flex-shrink-0" />
        <div>
          <p className="text-sm leading-relaxed">
            {t.disclaimerText}
          </p>
        </div>
      </div>
    </div>
  );
};