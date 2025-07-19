import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const Teens = () => {
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
            <div className="text-4xl">🎓</div>
            <div>
              <h1 className="text-3xl font-bold">Talking to Teenagers</h1>
              <p className="text-muted-foreground">Ages 12+</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-secondary" />
                Honest Conversations
              </h2>
              <div className="space-y-4">
                <p>Teenagers can handle the truth and often want to help. Include them in appropriate ways while protecting their mental health.</p>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Being Direct:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Explain immigration enforcement and detention honestly</li>
                    <li>• Discuss the legal process and realistic timelines</li>
                    <li>• Share what you know about your family member's situation</li>
                    <li>• Acknowledge the stress and uncertainty you're all feeling</li>
                  </ul>
                </div>

                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">How They Can Help:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Help care for younger siblings with age-appropriate explanations</li>
                    <li>• Assist with practical tasks and household responsibilities</li>
                    <li>• Research resources and connect with support organizations</li>
                    <li>• Advocate in their school or community when appropriate</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Supporting Their Needs</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Mental Health</h3>
                  <p className="text-sm text-muted-foreground">
                    Teens may experience anxiety, depression, or PTSD. Connect them with school counselors 
                    or mental health professionals who understand immigration trauma.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold mb-2">School & Future Plans</h3>
                  <p className="text-sm text-muted-foreground">
                    Help them understand how family status might affect college applications, financial aid, 
                    or work authorization. Connect with guidance counselors early.
                  </p>
                </div>
                
                <div className="border-l-4 border-sage pl-4">
                  <h3 className="font-semibold mb-2">Peer Relationships</h3>
                  <p className="text-sm text-muted-foreground">
                    Discuss how much to share with friends. Some teens prefer privacy while others 
                    find support in trusted friendships.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Family Responsibilities</h3>
                  <p className="text-sm text-muted-foreground">
                    While teens can take on more responsibility, ensure they don't become 
                    "parentified" or sacrifice their own development.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Important Rights & Information</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Know Your Rights at School</h3>
                <ul className="space-y-2 text-sm">
                  <li>• You have the right to attend public school regardless of immigration status</li>
                  <li>• Schools cannot ask about your immigration status</li>
                  <li>• You can access counseling and support services</li>
                  <li>• Your information should be kept confidential</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teens;