
import { Shield, Phone, FileText, Users } from "lucide-react";

const DetentionRights = () => {
  return (
    <div className="container mx-auto px-4 py-8">

        <div className="content-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🛡️</div>
            <div>
              <h1 className="text-3xl font-bold">Your Rights in Detention</h1>
              <p className="text-foreground/70 font-medium">Important legal protections everyone should know</p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <Shield size={20} />
                Fundamental Rights
              </h2>
              <div className="space-y-3">
                <p className="font-medium">Every person in immigration detention has these rights:</p>
                <ul className="space-y-2 text-sm list-disc list-inside ml-4">
                  <li>The right to remain silent</li>
                  <li>The right to speak with a lawyer</li>
                  <li>The right to an interpreter</li>
                  <li>The right to make phone calls</li>
                  <li>The right to medical care</li>
                  <li>The right to safe conditions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} className="text-secondary" />
                Communication Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Phone Calls</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to make reasonable phone calls</li>
                    <li>• Should be able to call family and lawyers</li>
                    <li>• Free calls to legal aid organizations</li>
                    <li>• International calls to consulates</li>
                  </ul>
                </div>

                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Visits</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to visits from family</li>
                    <li>• Private meetings with attorneys</li>
                    <li>• Religious counseling visits</li>
                    <li>• Consular visits (if foreign national)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-sage" />
                Legal Process Rights
              </h2>
              
              <div className="space-y-4">
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Right to a Hearing</h3>
                  <p className="text-sm">
                    Most people have the right to appear before an immigration judge to present their case. 
                    This includes the right to present evidence and have witnesses testify.
                  </p>
                </div>

                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Right to an Interpreter</h3>
                  <p className="text-sm">
                    If you don't speak English well, you have the right to a free interpreter 
                    during all proceedings and important communications.
                  </p>
                </div>

                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Right to Legal Representation</h3>
                  <p className="text-sm">
                    You have the right to have a lawyer, but the government doesn't have to pay for one. 
                    You can represent yourself or find free legal help.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-purple" />
                What Family Members Can Do
              </h2>
              
              <div className="bg-purple/10 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Support from Outside</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Put money on phone account for calls</li>
                      <li>Send appropriate personal items</li>
                      <li>Attend court hearings when possible</li>
                      <li>Gather documents for legal case</li>
                      <li>Find and pay for legal representation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Advocacy Actions</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Contact elected representatives</li>
                      <li>Reach out to immigrant rights groups</li>
                      <li>Document any mistreatment</li>
                      <li>Connect with community organizations</li>
                      <li>Share their story (with permission)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-destructive/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-destructive">When Rights Are Violated</h2>
              <p className="mb-4 text-sm">
                If someone's rights are being violated in detention, take action immediately:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Document Everything</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Write down dates, times, and details</li>
                    <li>Get names of staff involved</li>
                    <li>Take photos if possible</li>
                    <li>Keep all paperwork</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Report Violations</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Contact facility management</li>
                    <li>File complaints with ICE</li>
                    <li>Report to civil rights organizations</li>
                    <li>Inform your lawyer immediately</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Important Phone Numbers</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Rights Violations</h3>
                  <p className="text-lg font-bold text-primary">ACLU: 1-212-549-2500</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal Help</h3>
                  <p className="text-lg font-bold text-secondary">Legal Aid: 1-800-354-0365</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  export default DetentionRights;
