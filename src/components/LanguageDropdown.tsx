import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LanguageDropdown = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "es")}>
      <SelectTrigger className="w-[180px] border-2 border-sage bg-background hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <SelectValue placeholder={t.selectLanguage} />
        </div>
      </SelectTrigger>
      <SelectContent 
        className="bg-background border-sage z-50" 
        position="popper"
        side="bottom"
        align="end"
      >
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="hover:bg-sage/10 focus:bg-sage/10"
          >
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};