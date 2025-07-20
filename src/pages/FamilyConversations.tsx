
import { ArrowLeft, MessageCircle, Heart, Book, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { QuickExit } from "@/components/QuickExit";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

const FamilyConversations = () => {
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
            <div className="text-4xl">💬</div>
            <div>
              <h1 className="text-3xl font-bold">Family Conversations</h1>
              <p className="text-muted-foreground">Start important discussions with confidence</p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart size={20} className="text-primary" />
                Why These Conversations Matter
              </h2>
              <p className="mb-4">
                Open, honest conversations with your children build trust, reduce anxiety, and help them feel secure. 
                When children understand what's happening in age-appropriate ways, they're better prepared to handle challenges.
              </p>
              <div className="bg-white/50 p-4 rounded">
                <strong>Remember:</strong> Your children look to you for guidance and reassurance. Being honest while age-appropriate helps them feel safe and loved.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageCircle size={20} className="text-secondary" />
                General Conversation Tips
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Before You Start</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Choose a quiet, comfortable time</li>
                    <li>Turn off distractions (TV, phones)</li>
                    <li>Stay calm and reassuring</li>
                    <li>Be prepared for questions</li>
                    <li>Have tissues and comfort items ready</li>
                  </ul>
                </div>

                <div className="border border-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">During the Conversation</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Use simple, clear language</li>
                    <li>Let them ask questions</li>
                    <li>Validate their feelings</li>
                    <li>Be honest but age-appropriate</li>
                    <li>Offer lots of hugs and comfort</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Book size={20} className="text-sage" />
                Conversation Starters by Topic
              </h2>
              
              <div className="space-y-6">
                <div className="bg-sage/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-sage">Talking About Immigration</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Young Children (3-7)</h4>
                      <div className="text-sm space-y-2">
                        <p><strong>Starter:</strong> "Some people in our family came from another country to live here..."</p>
                        <p><strong>Key points:</strong> Simple facts, focus on love and family staying together</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Elementary (8-12)</h4>
                      <div className="text-sm space-y-2">
                        <p><strong>Starter:</strong> "You might hear about immigration laws on the news..."</p>
                        <p><strong>Key points:</strong> Basic facts about laws, reassurance about safety plans</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Teens (13+)</h4>
                      <div className="text-sm space-y-2">
                        <p><strong>Starter:</strong> "I want to talk to you about our family's immigration status..."</p>
                        <p><strong>Key points:</strong> Honest discussion, rights, responsibilities, future planning</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-purple">Discussing Family Separation Fears</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">What to Say:</h4>
                      <ul className="space-y-1 text-sm list-disc list-inside">
                        <li>"We have a plan to keep our family safe"</li>
                        <li>"Many people are working to help families like ours"</li>
                        <li>"It's normal to feel worried sometimes"</li>
                        <li>"You can always talk to me about your feelings"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">What NOT to Say:</h4>
                      <ul className="space-y-1 text-sm list-disc list-inside">
                        <li>"Don't worry about it" (dismisses their feelings)</li>
                        <li>"Everything will be fine" (might not be true)</li>
                        <li>"You're too young to understand" (excludes them)</li>
                        <li>Scary details they can't handle</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-orange">Explaining Rights and Safety</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Age-Appropriate Messages:</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>Young:</strong> "Police and other adults should treat everyone kindly. If someone is not kind, tell a trusted adult."
                        </div>
                        <div>
                          <strong>Elementary:</strong> "Everyone has rights, even children. You have the right to be safe and to have someone help you."
                        </div>
                        <div>
                          <strong>Teens:</strong> "You have specific rights even if police or immigration officers stop you. Let's go over what to do."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-primary" />
                Handling Different Reactions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">If Your Child Gets Upset</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Stay calm and offer comfort</li>
                    <li>Acknowledge their feelings as valid</li>
                    <li>Provide physical comfort (hugs, holding)</li>
                    <li>Reassure them of your love</li>
                    <li>Give them time to process</li>
                    <li>Follow up later</li>
                  </ul>
                </div>

                <div className="border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">If Your Child Seems Uninterested</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Don't force the conversation</li>
                    <li>Keep the door open for later</li>
                    <li>Try a different approach or time</li>
                    <li>Use books or stories as conversation starters</li>
                    <li>Let them know they can ask questions anytime</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Sample Scripts</h2>
              
              <div className="space-y-4">
                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Starting a Safety Plan Conversation</h3>
                  <div className="text-sm bg-muted/50 p-3 rounded italic">
                    "I want to talk to you about something important. Just like we have fire drills at school and home, 
                    our family needs to have a plan in case something unexpected happens. This doesn't mean something 
                    bad will happen, but it's good to be prepared. What questions do you have about this?"
                  </div>
                </div>

                <div className="bg-card border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Addressing Immigration Fears</h3>
                  <div className="text-sm bg-muted/50 p-3 rounded italic">
                    "I know you might have heard things on the news or from friends about immigration. 
                    I want you to know that our family has people who care about us and help us. 
                    If you ever feel scared or confused about something you hear, please come talk to me. 
                    We're in this together."
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Continue the Conversation</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/young-children" className="btn-primary text-center">
                  Young Children Guide
                </Link>
                <Link to="/elementary" className="btn-secondary text-center">
                  Elementary Guide
                </Link>
                <Link to="/teens" className="btn-sage text-center">
                  Teen Guide
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyConversations;
