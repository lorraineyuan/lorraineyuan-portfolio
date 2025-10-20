import paper1 from "@/assets/paper1.jpg";
import paper2 from "@/assets/paper2d.jpg";
import paper3 from "@/assets/paper3.jpg";
import paper4 from "@/assets/paper4.jpg";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export default function Research() {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);
  const [isFlashTalkOpen, setIsFlashTalkOpen] = useState(false);

  return (
    <div className="py-16 px-16">
      <div className="max-w-6xl mx-auto">
        {/* Publications Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-12">Papers Under-Review</h1>

          <div>
            <div className="flex gap-8 items-start mb-4">
              <img 
                src={paper1} 
                alt="Privacy-preserving Data-driven Inventory Management" 
                className="w-32 sm:w-40 md:w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">
                  Privacy-preserving Data-driven Inventory Management
                </h2>
                <p className="text-muted-foreground mb-3 text-sm">
                  with Elena Belavina
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-medium">
                    Major Revision at Management Science
                  </span>
                  <span className="inline-block bg-background border-2 border-primary text-foreground px-3 py-1 rounded text-xs font-medium">
                    Job Market Paper
                  </span>
                  <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-xs">
                    Accepted to NYC Privacy Day at Google
                  </span>
                </div>
                <a 
                  href="https://ssrn.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-sidebar-accent transition-colors text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>SSRN</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-3">
              <Collapsible open={isAbstractOpen} onOpenChange={setIsAbstractOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                  <ChevronDown className={`w-5 h-5 transition-transform ${isAbstractOpen ? 'rotate-180' : ''}`} />
                  Abstract
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2">
                  <p className="text-foreground leading-relaxed">
                    The use of customer data (demographics, past purchases, etc.) for inventory management can improve firm profits and customer service levels. Yet, large-scale use of such data in production environments increases the risks of breaching customers' privacy. In this study, we develop differential-privacy based privacy-preserving adaptations for two data-driven newsvendor paradigms: the usual two-step estimate-then-optimize method, and the newer one-step joint estimate-optimize method. We characterize the tradeoff between privacy loss and profits and show that the privacy-preserving one-step joint approach outperforms the privacy-preserving two-step approach. In essence obfuscating customer data is less costly in terms of profits, when we account for how estimations will be used in downstream optimization problems, we can privatize outputs with less noise and more targeted noise injection. We subsequently construct a generic model to explore the broader impact of implementing these privacy-preserving algorithms on both the firm and customers. Our analysis uncovers a win-win scenario for both the firm and customers under the two-step and one-step privacy-preserving paradigms respectively, as long as customers demonstrate any degree of privacy concerns. The feasibility of such an outcome depends on both the choice of paradigm and critical ratio. Calibration based on a real-world dataset reveals that the one-step algorithms showcase a 3 to 4 times stronger privacy protection and up to 30% increase in achieved profit than the two-step counterpart. Even with lower customer privacy sensitivity, the one-step algorithms can boost profits by 12% while maintaining robust privacy protection—an achievement unattainable with the two-step algorithm.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={isFlashTalkOpen} onOpenChange={setIsFlashTalkOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                  <ChevronDown className={`w-5 h-5 transition-transform ${isFlashTalkOpen ? 'rotate-180' : ''}`} />
                  10 Min Flash Talk
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2">
                  <div className="aspect-video w-full max-w-3xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/JJjOuLfzm5s"
                      title="Flash Talk - Privacy-preserving Data-driven Inventory Management"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Working Papers Section */}
        <section>
          <h1 className="text-4xl font-bold mb-12">Working Papers</h1>

          <div className="space-y-16">
            {/* Paper 2 */}
            <div>
              <div className="flex gap-8 items-start mb-4">
                <img 
                  src={paper2} 
                  alt="Mechanism Design for Generative AI Copilot" 
                  className="w-32 sm:w-40 md:w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">
                    Mechanism Design for Generative AI Copilot in a Sequential Production Process
                  </h2>
                  <p className="text-muted-foreground mb-3 text-sm">
                    with Karan Girotra and Elena Belavina
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-xs">
                      Working Paper
                    </span>
                    <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-xs">
                      Draft Upon Request
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Designs human-AI copilot strategies that determine optimal human feedback points in agentic AI workflows to balance attention, fatigue, accuracy, and computational cost.
              </p>
            </div>

            {/* Paper 3 */}
            <div>
              <div className="flex gap-8 items-start mb-4">
                <img 
                  src={paper3} 
                  alt="Data-driven Decisions in Supply Chains" 
                  className="w-32 sm:w-40 md:w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">
                    Data-driven Decisions in Supply Chains: Contracts, Algorithms, and Efficiency
                  </h2>
                  <p className="text-muted-foreground mb-3 text-sm">
                    with Xiaoyue Yan, Karan Girotra and Elena Belavina
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-xs">
                      Working Paper
                    </span>
                    <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-xs">
                      Draft Upon Request
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Explores how data-driven algorithms interact with supply chain contracts to shape efficiency and coordination strategies.
              </p>
            </div>

            {/* Paper 4 */}
            <div>
              <div className="flex gap-8 items-start mb-4">
                <img 
                  src={paper4} 
                  alt="Privacy-preserving Collaborative Learning" 
                  className="w-32 sm:w-40 md:w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">
                    Privacy-preserving Collaborative Learning
                  </h2>
                  <p className="text-muted-foreground mb-3 text-sm">
                    with Karan Girotra and Elena Belavina
                  </p>
                  <div>
                    <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-xs">
                      Work In Progress
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Investigates mechanisms for collaborative learning across organizations while 
                preserving data privacy and competitive advantages.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
