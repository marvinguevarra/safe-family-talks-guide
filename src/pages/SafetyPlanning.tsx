
import { Shield, AlertTriangle, Phone, FileText, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SafetyPlanning = () => {
  return (
    <div className="container mx-auto px-4 py-8">

        <div className="content-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🛡️</div>
            <div>
              <h1 className="text-3xl font-bold">Family Safety Planning</h1>
              <p className="text-foreground/70 font-medium">Prepare your family for unexpected situations</p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-destructive">
                <AlertTriangle size={20} />
                Why Safety Planning Matters
              </h2>
              <p className="mb-4">
                Every family should have a safety plan in case of emergencies, including potential immigration enforcement actions. Having a plan helps reduce fear and ensures everyone knows what to do.
              </p>
              <div className="bg-white/50 p-4 rounded text-sm">
                <strong>Remember:</strong> You have rights regardless of your immigration status. This plan helps protect those rights and keeps your family together.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                Essential Documents
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">Documents to Keep Ready</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Birth certificates for all children</li>
                    <li>Social Security cards</li>
                    <li>School enrollment records</li>
                    <li>Medical records and prescriptions</li>
                    <li>Immigration documents (if any)</li>
                    <li>Bank account information</li>
                    <li>Emergency contact list</li>
                  </ul>
                </div>

                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Where to Keep Them</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Make copies of everything</li>
                    <li>Keep originals in a safe place</li>
                    <li>Give copies to trusted family/friends</li>
                    <li>Consider a safety deposit box</li>
                    <li>Keep some copies with your children</li>
                    <li>Store digital copies securely</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-sage" />
                Emergency Contacts & Support Network
              </h2>
              
              <div className="bg-sage/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Create Your Support Network:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Primary Caregivers:</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Trusted family members nearby</li>
                      <li>Close friends who can help</li>
                      <li>Neighbors you trust</li>
                      <li>Community leaders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Professional Support:</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Immigration attorney</li>
                      <li>Family doctor</li>
                      <li>School counselors</li>
                      <li>Social workers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Home size={20} className="text-purple" />
                What to Teach Your Children
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Age-Appropriate Information</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Young Children (3-7)</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Who to call if parents don't come home</li>
                        <li>Full names and phone numbers</li>
                        <li>Home address</li>
                        <li>Basic safety rules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary mb-2">Elementary (8-12)</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Emergency contact information</li>
                        <li>Where important documents are</li>
                        <li>Basic rights information</li>
                        <li>How to stay calm</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sage mb-2">Teens (13+)</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Legal rights and responsibilities</li>
                        <li>How to contact attorneys</li>
                        <li>Care plans for younger siblings</li>
                        <li>Financial information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} className="text-orange" />
                Emergency Action Steps
              </h2>
              
              <div className="bg-orange/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">If Immigration Enforcement Comes to Your Home:</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li><strong>Stay calm</strong> - Don't run or resist</li>
                  <li><strong>Ask for identification</strong> - Request to see warrants</li>
                  <li><strong>Don't open the door</strong> - Unless they have a judicial warrant</li>
                  <li><strong>Remain silent</strong> - You have the right not to answer questions</li>
                  <li><strong>Don't sign anything</strong> - Without speaking to an attorney first</li>
                  <li><strong>Contact your attorney</strong> - Or call the legal hotline</li>
                  <li><strong>Activate your safety plan</strong> - Contact your support network</li>
                </ol>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/detention-rights" className="btn-primary text-center">
                  Know Your Rights
                </Link>
                <Link to="/get-legal-help" className="btn-secondary text-center">
                  Get Legal Help
                </Link>
                <Link to="/find-detained" className="btn-sage text-center">
                  Find Someone Detained
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  export default SafetyPlanning;
