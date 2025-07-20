
import { ArrowLeft, Scale, Phone, MapPin, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const GetLegalHelp = () => {
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
            <div className="text-4xl">⚖️</div>
            <div>
              <h1 className="text-3xl font-bold">Get Legal Help</h1>
              <p className="text-foreground/70 font-medium">Finding and working with immigration attorneys</p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-secondary">
                <AlertCircle size={20} />
                Why You Need a Lawyer
              </h2>
              <div className="space-y-3 text-sm">
                <p>• Immigration law is extremely complex and changes frequently</p>
                <p>• Detained individuals with lawyers are 10x more likely to succeed in their cases</p>
                <p>• Lawyers can often get people released on bond while cases are pending</p>
                <p>• Self-representation in immigration court has very low success rates</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                Free Legal Help Hotlines
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">National Immigration Law Center</h3>
                  <p className="text-xl font-bold text-primary">1-213-639-3900</p>
                  <p className="text-sm text-foreground/70 font-medium">Free consultations and referrals nationwide</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">American Immigration Lawyers Association</h3>
                  <p className="text-xl font-bold text-secondary">aila.org/lawyer-referral</p>
                  <p className="text-sm text-foreground/70 font-medium">Find qualified immigration attorneys by location</p>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Legal Aid Organizations</h3>
                  <p className="text-xl font-bold text-sage">1-800-354-0365</p>
                  <p className="text-sm text-foreground/70 font-medium">Free legal services for low-income families</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Scale size={20} className="text-purple" />
                Questions to Ask a Lawyer
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">About Their Experience</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>How long have you practiced immigration law?</li>
                    <li>How many detention cases have you handled?</li>
                    <li>What is your success rate for similar cases?</li>
                    <li>Are you familiar with this detention facility?</li>
                  </ul>
                </div>

                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">About Your Case</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>What are the possible outcomes for this case?</li>
                    <li>How long will the process take?</li>
                    <li>What are the total costs involved?</li>
                    <li>Can you get bond/release from detention?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-sage" />
                What to Bring to Your Lawyer
              </h2>
              
              <div className="bg-sage/10 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Personal Documents</h3>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Birth certificate</li>
                      <li>Marriage certificate</li>
                      <li>Children's birth certificates</li>
                      <li>Passport or ID from home country</li>
                      <li>Any previous immigration documents</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Case Information</h3>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Notice to Appear (if received)</li>
                      <li>Detention facility information</li>
                      <li>Arrest details and timeline</li>
                      <li>Any criminal history records</li>
                      <li>Employment and tax records</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Warning Signs of Bad Lawyers</h2>
              <div className="space-y-2 text-sm">
                <p>🚩 Guarantees a specific outcome</p>
                <p>🚩 Asks for large payments upfront without explanation</p>
                <p>🚩 Is not licensed to practice immigration law</p>
                <p>🚩 Pressures you to sign documents immediately</p>
                <p>🚩 Won't explain their strategy or answer questions</p>
                <p>🚩 Has no office address or professional credentials</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetLegalHelp;
