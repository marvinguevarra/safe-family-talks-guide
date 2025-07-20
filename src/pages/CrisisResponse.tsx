
import { ArrowLeft, AlertTriangle, Phone, Clock, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const CrisisResponse = () => {
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
            <div className="text-4xl">🚨</div>
            <div>
              <h1 className="text-3xl font-bold">Crisis Response</h1>
              <p className="text-foreground/70 font-medium">Immediate help when you need it most</p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-destructive/20 p-6 rounded-lg border-l-4 border-destructive">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-destructive">
                <AlertTriangle size={20} />
                Emergency Situations
              </h2>
              <p className="mb-4 text-lg">
                <strong>If you or someone you know is in immediate danger, call 911 right away.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/50 p-4 rounded">
                  <h3 className="font-semibold mb-2">When to Call 911:</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Physical violence or threats</li>
                    <li>Medical emergency</li>
                    <li>Child is in immediate danger</li>
                    <li>Someone is threatening suicide</li>
                  </ul>
                </div>
                <div className="bg-white/50 p-4 rounded">
                  <h3 className="font-semibold mb-2">What to Tell 911:</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Your exact location</li>
                    <li>What's happening</li>
                    <li>If weapons are involved</li>
                    <li>If medical help is needed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                Crisis Hotlines - Available 24/7
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">National Domestic Violence Hotline</h3>
                  <p className="text-2xl font-bold mb-2">1-800-799-7233</p>
                  <p className="text-sm text-foreground/70 font-medium">Free, confidential support 24/7. Available in multiple languages.</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-secondary">National Suicide Prevention Lifeline</h3>
                  <p className="text-2xl font-bold mb-2">988</p>
                  <p className="text-sm text-foreground/70 font-medium">Crisis counseling and suicide prevention. Available 24/7 in English and Spanish.</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-sage">Crisis Text Line</h3>
                  <p className="text-2xl font-bold mb-2">Text HOME to 741741</p>
                  <p className="text-sm text-foreground/70 font-medium">Free crisis support via text message. Available 24/7.</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-purple">National Child Abuse Hotline</h3>
                  <p className="text-2xl font-bold mb-2">1-800-4-A-CHILD (1-800-422-4453)</p>
                  <p className="text-sm text-foreground/70 font-medium">Professional crisis counselors available 24/7. Over 170 languages supported.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart size={20} className="text-orange" />
                Mental Health Support
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-orange/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange mb-3">Warning Signs to Watch For</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Sudden changes in behavior</li>
                    <li>Withdrawal from family/friends</li>
                    <li>Loss of interest in activities</li>
                    <li>Extreme mood swings</li>
                    <li>Talking about death or suicide</li>
                    <li>Giving away possessions</li>
                    <li>Increased use of alcohol/drugs</li>
                  </ul>
                </div>

                <div className="border border-orange/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange mb-3">How to Help Someone in Crisis</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Listen without judgment</li>
                    <li>Take their feelings seriously</li>
                    <li>Stay with them if possible</li>
                    <li>Remove any means of self-harm</li>
                    <li>Call for professional help</li>
                    <li>Follow up regularly</li>
                    <li>Take care of yourself too</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                Immigration-Related Crisis Support
              </h2>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Immediate Legal Help</h3>
                    <div className="space-y-2">
                      <div className="bg-white/50 p-3 rounded">
                        <strong>ACLU Immigrants' Rights</strong><br/>
                        <span className="text-lg font-bold">1-212-549-2500</span>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <strong>Legal Aid Hotline</strong><br/>
                        <span className="text-lg font-bold">1-800-354-0365</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Family Separation Crisis</h3>
                    <div className="space-y-2">
                      <div className="bg-white/50 p-3 rounded">
                        <strong>ICE Detainee Locator</strong><br/>
                        <span className="text-lg font-bold">1-888-351-4024</span>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <strong>Kids in Need of Defense</strong><br/>
                        <span className="text-lg font-bold">1-202-824-8680</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-sage" />
                Creating Your Crisis Plan
              </h2>
              
              <div className="bg-sage/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Steps to Take Now:</h3>
                <ol className="space-y-3 text-sm list-decimal list-inside">
                  <li>
                    <strong>Save these numbers in your phone</strong> - Program crisis hotlines under easy-to-remember names
                  </li>
                  <li>
                    <strong>Identify trusted contacts</strong> - Choose 2-3 people who can help in an emergency
                  </li>
                  <li>
                    <strong>Create a safety code word</strong> - A word family members can use to signal danger
                  </li>
                  <li>
                    <strong>Know your safe places</strong> - Identify locations where you can go for help
                  </li>
                  <li>
                    <strong>Keep important documents ready</strong> - In a grab bag or with trusted friends
                  </li>
                  <li>
                    <strong>Practice the plan with your family</strong> - Regular discussions help everyone remember
                  </li>
                </ol>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Get Additional Support</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/safety-planning" className="btn-primary text-center">
                  Safety Planning
                </Link>
                <Link to="/get-legal-help" className="btn-secondary text-center">
                  Legal Resources
                </Link>
                <Link to="/detention-rights" className="btn-sage text-center">
                  Know Your Rights
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisResponse;
