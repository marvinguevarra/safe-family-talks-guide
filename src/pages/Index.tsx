import { QuickExit } from "@/components/QuickExit";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { NavigationCard, NavigationLink } from "@/components/NavigationCard";
import { Disclaimer } from "@/components/Disclaimer";
import { Heart, Users, AlertTriangle, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-gentle">
      {/* Critical Safety Features */}
      <QuickExit />
      <AccessibilityPanel />

      {/* Header */}
      <header className="container mx-auto px-4 pt-8 pb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Heart className="text-secondary" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-warm bg-clip-text text-transparent animate-gentle-bounce">
              Together We Talk
            </h1>
          </div>
          <LanguageToggle />
        </div>
        
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          A safe space for families to navigate difficult conversations with love, 
          understanding, and practical guidance.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <Disclaimer />

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Talking to Children */}
          <NavigationCard
            title="Talking to Children"
            description="Age-appropriate ways to discuss difficult family situations"
            emoji="👨‍👩‍👧‍👦"
            bgGradient="bg-gradient-warm"
          >
            <NavigationLink to="/young-children" ageGroup="Ages 4-7">
              Little Ones
            </NavigationLink>
            <NavigationLink to="/elementary" ageGroup="Ages 8-11">
              Elementary Age
            </NavigationLink>
            <NavigationLink to="/teens" ageGroup="Ages 12+">
              Teenagers
            </NavigationLink>
          </NavigationCard>

          {/* Talking to Family */}
          <NavigationCard
            title="Talking to Family"
            description="Having honest conversations with family members"
            emoji="💬"
            bgGradient="bg-gradient-sunset"
          >
            <NavigationLink to="/talk-to-parents">
              Parents & Grandparents
            </NavigationLink>
            <NavigationLink to="/talk-to-siblings">
              Brothers & Sisters
            </NavigationLink>
            <NavigationLink to="/talk-to-extended-family">
              Extended Family
            </NavigationLink>
          </NavigationCard>

          {/* Someone Was Detained */}
          <NavigationCard
            title="Someone Was Detained"
            description="Immediate steps when a family member is detained"
            emoji="🆘"
            bgGradient="bg-card"
          >
            <NavigationLink to="/find-detained">
              <AlertTriangle size={16} className="inline mr-2" />
              Find Them
            </NavigationLink>
            <NavigationLink to="/get-legal-help">
              Get Legal Help
            </NavigationLink>
            <NavigationLink to="/detention-rights">
              Know Your Rights
            </NavigationLink>
          </NavigationCard>

          {/* Family Preparedness */}
          <NavigationCard
            title="Family Preparedness"
            description="Planning ahead to keep your family safe and informed"
            emoji="🛡️"
            bgGradient="bg-sage/20"
          >
            <NavigationLink to="/safety-planning">
              <Shield size={16} className="inline mr-2" />
              Make a Safety Plan
            </NavigationLink>
            <NavigationLink to="/know-your-rights">
              Know Your Rights
            </NavigationLink>
            <NavigationLink to="/educators">
              Talk to Teachers
            </NavigationLink>
            <NavigationLink to="/allies">
              Find Community Support
            </NavigationLink>
          </NavigationCard>
        </div>

        {/* Additional Resources */}
        <div className="content-card text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <Users size={24} />
            You Are Not Alone
          </h2>
          <p className="text-lg leading-relaxed">
            This resource was created with love by families who understand what you're going through. 
            Every conversation matters, every family deserves support, and together we can help 
            each other through difficult times.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.print()}
              className="btn-sage no-print"
            >
              📄 Print This Guide
            </button>
            <button className="btn-primary">
              💝 Share Resources
            </button>
          </div>
        </div>

        {/* Installation Prompt */}
        <div className="content-card bg-gradient-warm text-center">
          <h3 className="text-xl font-semibold mb-3">📱 Use Offline</h3>
          <p className="mb-4">
            Install this app on your phone for private, offline access anytime.
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              // PWA install prompt will be handled by service worker
              alert("To install: tap your browser menu and select 'Add to Home Screen'");
            }}
          >
            Install App
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
