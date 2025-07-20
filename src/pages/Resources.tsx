
import { ArrowLeft, Phone, Globe, FileText, Users, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const Resources = () => {
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
            <div className="text-4xl">📚</div>
            <div>
              <h1 className="text-3xl font-bold">Resources & Support</h1>
              <p className="text-foreground/70 font-medium">Comprehensive support for immigrant families</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} className="text-destructive" />
                Emergency & Crisis Support
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-destructive">Emergency Services</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Emergency:</strong> 911</div>
                    <div><strong>Suicide Prevention:</strong> 988</div>
                    <div><strong>Crisis Text Line:</strong> Text HOME to 741741</div>
                    <div><strong>Domestic Violence:</strong> 1-800-799-7233</div>
                  </div>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-destructive">Child Protection</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Child Abuse Hotline:</strong> 1-800-4-A-CHILD</div>
                    <div><strong>Kids in Need of Defense:</strong> 1-202-824-8680</div>
                    <div><strong>National Runaway Safeline:</strong> 1-800-RUNAWAY</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                Immigration Legal Support
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Know Your Rights</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>ACLU Immigrants' Rights:</strong> 1-212-549-2500</div>
                    <div><strong>National Immigration Law Center:</strong> nilc.org</div>
                    <div><strong>United We Dream:</strong> unitedwedream.org</div>
                  </div>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Legal Aid</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Legal Aid Hotline:</strong> 1-800-354-0365</div>
                    <div><strong>Catholic Legal Immigration Network:</strong> cliniclegal.org</div>
                    <div><strong>Immigration Advocates Network:</strong> immigrationadvocates.org</div>
                  </div>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">Find Detained</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>ICE Detainee Locator:</strong> 1-888-351-4024</div>
                    <div><strong>Website:</strong> locator.ice.gov</div>
                    <div><strong>FOIA Requests:</strong> ice.gov/foia</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart size={20} className="text-secondary" />
                Mental Health & Wellbeing
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Counseling Services</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li><strong>Psychology Today:</strong> Find therapists who speak your language</li>
                    <li><strong>BetterHelp:</strong> Online counseling with multilingual options</li>
                    <li><strong>NAMI (National Alliance on Mental Illness):</strong> 1-800-950-NAMI</li>
                    <li><strong>Substance Abuse Helpline:</strong> 1-800-662-4357</li>
                  </ul>
                </div>

                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Support Groups</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li><strong>Families Belong Together:</strong> familiesbelongtogether.org</li>
                    <li><strong>National Immigrant Forum:</strong> immigrationforum.org</li>
                    <li><strong>Local churches and community centers</strong></li>
                    <li><strong>School counselors and social workers</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-sage" />
                Family & Community Support
              </h2>
              
              <div className="bg-sage/10 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold mb-3">Food & Basic Needs</h3>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Local food banks</li>
                      <li>211 (dial for local resources)</li>
                      <li>Salvation Army</li>
                      <li>Catholic Charities</li>
                      <li>Local churches</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Educational Support</h3>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>School counselors</li>
                      <li>ESL classes</li>
                      <li>After-school programs</li>
                      <li>Library resources</li>
                      <li>College prep programs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Community Organizations</h3>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Local immigrant coalitions</li>
                      <li>Cultural centers</li>
                      <li>Neighborhood associations</li>
                      <li>Religious communities</li>
                      <li>Volunteer organizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-purple" />
                Important Documents & Forms
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-purple">Legal Documents</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Immigration Forms:</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>USCIS.gov - Official immigration forms</li>
                        <li>Form I-94 (Arrival/Departure record)</li>
                        <li>Form G-28 (Attorney representation)</li>
                        <li>Form EOIR-42B (Cancellation of removal)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Essential Records:</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Birth certificates</li>
                        <li>Marriage certificates</li>
                        <li>School enrollment records</li>
                        <li>Medical records</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-purple">Safety Planning Templates</h3>
                  <div className="text-sm">
                    <p className="mb-2">Print and fill out these important planning documents:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Emergency contact information sheet</li>
                      <li>Children's care plan authorization</li>
                      <li>Important document location list</li>
                      <li>Rights reminder cards (keep in wallet)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe size={20} className="text-orange" />
                Language & Cultural Resources
              </h2>
              
              <div className="bg-orange/10 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Translation Services</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li><strong>Google Translate:</strong> Free basic translation</li>
                      <li><strong>Language Line:</strong> Professional interpretation</li>
                      <li><strong>Local libraries:</strong> Often have multilingual staff</li>
                      <li><strong>Community centers:</strong> Volunteer translators</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Cultural Support</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Cultural community centers</li>
                      <li>Religious organizations from your background</li>
                      <li>Ethnic restaurants and markets (for connections)</li>
                      <li>International student organizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Quick Access to Key Pages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/crisis-response" className="btn-destructive text-center">
                  Crisis Response
                </Link>
                <Link to="/safety-planning" className="btn-primary text-center">
                  Safety Planning
                </Link>
                <Link to="/get-legal-help" className="btn-secondary text-center">
                  Legal Help
                </Link>
                <Link to="/family-conversations" className="btn-sage text-center">
                  Family Conversations
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
