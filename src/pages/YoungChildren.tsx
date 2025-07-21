import { Heart } from "lucide-react";

const YoungChildren = () => {
  return (
    <div className="container mx-auto px-4 py-8">

        <div className="content-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">👶</div>
            <div>
              <h1 className="text-3xl font-bold">Talking to Little Ones</h1>
              <p className="text-foreground/70 font-medium">Ages 4-7</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart size={20} className="text-secondary" />
                Simple Words, Big Love
              </h2>
              <div className="space-y-4">
                <p>Young children need simple, honest explanations that help them feel safe and loved.</p>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What to Say:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• "Sometimes grown-ups have to go away for a while, but they still love you very much."</li>
                    <li>• "This isn't your fault. You didn't do anything wrong."</li>
                    <li>• "We have people who will take care of you and keep you safe."</li>
                    <li>• "It's okay to feel sad or worried. Those feelings are normal."</li>
                  </ul>
                </div>

                <div className="bg-sage/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">How to Help:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Keep routines as normal as possible</li>
                    <li>• Answer questions simply and honestly</li>
                    <li>• Give extra hugs and reassurance</li>
                    <li>• Let them express their feelings through play or drawing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">When They Ask Questions</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium">"Where did Mommy/Daddy go?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    "They had to go somewhere with some people. We're working to bring them home."
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium">"When will they come back?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    "We don't know exactly when, but we're doing everything we can to help them come home soon."
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-medium">"Are they in trouble?"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    "Sometimes grown-ups have to sort things out with other grown-ups. They love you no matter what."
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  export default YoungChildren;