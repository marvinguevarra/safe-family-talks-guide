import { ArrowLeft, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { useLanguage } from "@/contexts/LanguageContext";

const Elementary = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-gentle">
      <QuickExit />
      <AccessibilityPanel />
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/10">
        <div className="container mx-auto px-4 pt-8 pb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Heart className="text-secondary" size={32} />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-warm bg-clip-text text-transparent animate-gentle-bounce">
                {t.appTitle}
              </h1>
            </div>
            <LanguageDropdown />
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sage hover:text-sage/80 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            {t.backToHome}
          </Link>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">

        <div className="content-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🎒</div>
            <div>
              <h1 className="text-3xl font-bold">{t.elementary.title}</h1>
              <p className="text-foreground/70 font-medium">{t.elementary.ageRange}</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-secondary" />
                {t.elementary.ageAppropriateHonesty}
              </h2>
              <div className="space-y-4">
                <p>Children this age can understand more complex explanations while still needing reassurance and stability.</p>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t.elementary.keyMessages}</h3>
                  <ul className="space-y-2 text-sm">
                    {t.elementary.keyMessagesList.map((message, index) => (
                      <li key={index}>• "{message}"</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t.elementary.supportingThem}</h3>
                  <ul className="space-y-2 text-sm">
                    {t.elementary.supportingThemList.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">{t.elementary.commonConcerns}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-sage/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-sage mb-2">{t.elementary.atSchool}</h3>
                  <p className="text-sm">
                    "{t.elementary.atSchoolText}"
                  </p>
                </div>
                <div className="border border-sage/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-sage mb-2">{t.elementary.feelings}</h3>
                  <p className="text-sm">
                    "{t.elementary.feelingsText}"
                  </p>
                </div>
                <div className="border border-sage/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-sage mb-2">{t.elementary.futurePlans}</h3>
                  <p className="text-sm">
                    "{t.elementary.futurePlansText}"
                  </p>
                </div>
                <div className="border border-sage/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-sage mb-2">{t.elementary.theirRole}</h3>
                  <p className="text-sm">
                    "{t.elementary.theirRoleText}"
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elementary;