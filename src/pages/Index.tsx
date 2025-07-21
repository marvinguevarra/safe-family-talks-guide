import { NavigationCard, NavigationLink } from "@/components/NavigationCard";
import { Disclaimer } from "@/components/Disclaimer";
import { Heart, Users, AlertTriangle, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    /* Main Content */
    <main className="container mx-auto px-4 pb-12">
        <Disclaimer />

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Talking to Children */}
          <NavigationCard
            title={t.talkingToChildren.title}
            description={t.talkingToChildren.description}
            emoji="👨‍👩‍👧‍👦"
            bgGradient="bg-gradient-warm"
          >
            <NavigationLink to="/young-children" ageGroup={t.talkingToChildren.ageRanges.littleOnes}>
              {t.talkingToChildren.littleOnes}
            </NavigationLink>
            <NavigationLink to="/elementary" ageGroup={t.talkingToChildren.ageRanges.elementary}>
              {t.talkingToChildren.elementaryAge}
            </NavigationLink>
            <NavigationLink to="/teens" ageGroup={t.talkingToChildren.ageRanges.teens}>
              {t.talkingToChildren.teenagers}
            </NavigationLink>
          </NavigationCard>

          {/* Talking to Family */}
          <NavigationCard
            title={t.talkingToFamily.title}
            description={t.talkingToFamily.description}
            emoji="💬"
            bgGradient="bg-gradient-sunset"
          >
            <NavigationLink to="/talk-to-parents">
              {t.talkingToFamily.parentsGrandparents}
            </NavigationLink>
            <NavigationLink to="/talk-to-siblings">
              {t.talkingToFamily.brothersSisters}
            </NavigationLink>
            <NavigationLink to="/talk-to-extended-family">
              {t.talkingToFamily.extendedFamily}
            </NavigationLink>
          </NavigationCard>

          {/* Someone Was Detained */}
          <NavigationCard
            title={t.someoneDetained.title}
            description={t.someoneDetained.description}
            emoji="🆘"
            bgGradient="bg-card"
          >
            <NavigationLink to="/find-detained">
              <AlertTriangle size={16} className="inline mr-2" />
              {t.someoneDetained.findThem}
            </NavigationLink>
            <NavigationLink to="/get-legal-help">
              {t.someoneDetained.getLegalHelp}
            </NavigationLink>
            <NavigationLink to="/detention-rights">
              {t.someoneDetained.knowYourRights}
            </NavigationLink>
          </NavigationCard>

          {/* Family Preparedness */}
          <NavigationCard
            title={t.familyPreparedness.title}
            description={t.familyPreparedness.description}
            emoji="🛡️"
            bgGradient="bg-sage"
          >
            <NavigationLink to="/safety-planning">
              <Shield size={16} className="inline mr-2" />
              {t.familyPreparedness.makeSafetyPlan}
            </NavigationLink>
            <NavigationLink to="/know-your-rights">
              {t.familyPreparedness.knowYourRights}
            </NavigationLink>
            <NavigationLink to="/educators">
              {t.familyPreparedness.talkToTeachers}
            </NavigationLink>
            <NavigationLink to="/allies">
              {t.familyPreparedness.findCommunitySupport}
            </NavigationLink>
          </NavigationCard>
        </div>

        {/* Additional Resources */}
        <div className="content-card text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <Users size={24} />
            {t.youAreNotAlone}
          </h2>
          <p className="text-lg leading-relaxed">
            {t.supportMessage}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.print()}
              className="btn-sage no-print"
            >
              {t.printGuide}
            </button>
            <button className="btn-primary">
              {t.shareResources}
            </button>
          </div>
        </div>

        {/* Installation Prompt */}
        <div className="content-card bg-gradient-warm text-center text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">{t.useOffline}</h3>
          <p className="mb-4 text-white/90 font-medium">
            {t.installMessage}
          </p>
          <button 
            className="bg-white text-black px-6 py-3 rounded-[20px] font-semibold hover:bg-white/90 transition-all duration-200"
            onClick={() => {
              // PWA install prompt will be handled by service worker
              alert(t.installInstructions);
            }}
          >
            {t.installApp}
          </button>
        </div>
      </main>
  );
};

export default Index;
