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

  const handleValueChange = (value: string) => {
    console.log("Language dropdown: changing language to", value);
    setLanguage(value as "en" | "es");
  };

  return (
    <Select value={language} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px] border-2 border-sage bg-background hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <SelectValue placeholder={t.selectLanguage} />
        </div>
      </SelectTrigger>
      <SelectContent 
        className="bg-background border-sage min-w-[180px]" 
        position="item-aligned"
        sideOffset={5}
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