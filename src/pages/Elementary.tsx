import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const Elementary = () => {
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
            <div className="text-4xl">🎒</div>
            <div>
              <h1 className="text-3xl font-bold">Talking to Elementary Age Children</h1>
              <p className="text-foreground/70 font-medium">Ages 8-11</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-secondary" />
                Age-Appropriate Honesty
              </h2>
              <div className="space-y-4">
                <p>Children this age can understand more complex explanations while still needing reassurance and stability.</p>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Key Messages:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• "Immigration officers took [family member] because of laws about who can stay in our country."</li>
                    <li>• "This doesn't mean they did something bad - it's about paperwork and rules."</li>
                    <li>• "We have lawyers and people helping us figure this out."</li>
                    <li>• "Your job is to keep being a kid - going to school, playing, learning."</li>
                  </ul>
                </div>

                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Supporting Them:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Encourage them to talk to trusted adults like teachers or counselors</li>
                    <li>• Help them understand their feelings are normal and important</li>
                    <li>• Keep school routines consistent when possible</li>
                    <li>• Prepare them for possible questions from friends</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Common Concerns</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">At School</h3>
                  <p className="text-sm">
                    "If kids ask questions, you can say 'My family is dealing with some grown-up legal stuff' and change the subject."
                  </p>
                </div>
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Feelings</h3>
                  <p className="text-sm">
                    "It's normal to feel scared, angry, or confused. These are big feelings about a big situation."
                  </p>
                </div>
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Future Plans</h3>
                  <p className="text-sm">
                    "We're working with lawyers and have plans to keep our family together and safe."
                  </p>
                </div>
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Their Role</h3>
                  <p className="text-sm">
                    "Your most important job is to focus on school and being a kid. Adults will handle the legal stuff."
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