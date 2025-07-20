
import { ArrowLeft, Search, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const FindDetained = () => {
  return (
    <div className="min-h-screen bg-gradient-gentle">
      <QuickExit />
      <AccessibilityPanel />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="content-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🔍</div>
            <div>
              <h1 className="text-3xl font-bold">Find Someone Who Was Detained</h1>
              <p className="text-foreground/70 font-medium">Immediate steps to locate a detained family member</p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-destructive">
                <Clock size={20} />
                First 24 Hours Are Critical
              </h2>
              <p className="mb-4">
                Time is essential when someone is detained. Follow these steps immediately:
              </p>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Don't panic - detained individuals have rights</li>
                <li>Gather their full legal name and date of birth</li>
                <li>Contact an immigration attorney immediately</li>
                <li>Use official locator tools to find where they are</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Search size={20} className="text-primary" />
                How to Find Them
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">ICE Online Detainee Locator</h3>
                  <p className="text-sm mb-3">
                    The official government tool to search for detained individuals.
                  </p>
                  <div className="bg-sage/10 p-3 rounded text-sm">
                    <strong>Website:</strong> locator.ice.gov<br/>
                    <strong>Need:</strong> Full legal name, date of birth, country of birth
                  </div>
                </div>

                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">Call ICE Directly</h3>
                  <p className="text-sm mb-3">
                    Speak to someone immediately about the detention.
                  </p>
                  <div className="bg-sage/10 p-3 rounded text-sm">
                    <strong>Phone:</strong> 1-888-351-4024<br/>
                    <strong>Hours:</strong> 24/7<br/>
                    <strong>Languages:</strong> English and Spanish
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} className="text-secondary" />
                Important Phone Numbers
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">ICE Detention & Removal</h3>
                  <p className="text-2xl font-bold text-primary">1-888-351-4024</p>
                  <p className="text-sm text-foreground/70 font-medium">24/7 hotline to locate detained individuals</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Legal Aid Hotline</h3>
                  <p className="text-2xl font-bold text-secondary">1-800-354-0365</p>
                  <p className="text-sm text-foreground/70 font-medium">Free legal assistance referrals</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">ACLU Immigrants' Rights</h3>
                  <p className="text-2xl font-bold text-sage">1-212-549-2500</p>
                  <p className="text-sm text-foreground/70 font-medium">Know your rights information</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-purple" />
                What Information to Gather
              </h2>
              
              <div className="bg-purple/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Before You Call:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">About the Person:</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Full legal name (as on documents)</li>
                      <li>Date of birth</li>
                      <li>Country of birth</li>
                      <li>Alien registration number (if known)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">About the Detention:</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Date and time of arrest</li>
                      <li>Location where arrested</li>
                      <li>Which agency made the arrest</li>
                      <li>Any case or booking numbers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/get-legal-help" className="btn-primary text-center">
                  Get Legal Help
                </Link>
                <Link to="/detention-rights" className="btn-secondary text-center">
                  Know Your Rights
                </Link>
                <Link to="/safety-planning" className="btn-sage text-center">
                  Make Safety Plan
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDetained;
