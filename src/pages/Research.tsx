import paper1 from "@/assets/paper1.jpg";
import paper2 from "@/assets/paper2.jpg";
import paper3 from "@/assets/paper3.jpg";
import paper4 from "@/assets/paper4.jpg";
import { ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-6xl mx-auto">
        {/* Publications Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-12">Publications</h1>

          <div className="flex gap-8 items-start">
            <img 
              src={paper1} 
              alt="Privacy-preserving Data-driven Inventory Management" 
              className="w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">
                Privacy-preserving Data-driven Inventory Management
              </h2>
              <p className="text-muted-foreground mb-4">
                with Elena Belavina
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded text-sm font-medium">
                  Major Revision at Management Science
                </span>
                <span className="inline-block bg-background border-2 border-primary text-foreground px-4 py-1.5 rounded text-sm font-medium">
                  Job Market Paper
                </span>
                <span className="inline-block bg-background border border-border text-foreground px-4 py-1.5 rounded text-sm">
                  Accepted to NYC Privacy Day at Google
                </span>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Develops privacy-preserving algorithms for inventory management that enhance 
                profitability while maintaining customer privacy through differential privacy mechanisms.
              </p>
              <a 
                href="https://ssrn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-sidebar-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>SSRN</span>
              </a>
            </div>
          </div>
        </section>

        {/* Working Papers Section */}
        <section>
          <h1 className="text-4xl font-bold mb-12">Working Papers</h1>

          <div className="space-y-16">
            {/* Paper 2 */}
            <div className="flex gap-8 items-start">
              <img 
                src={paper2} 
                alt="Mechanism Design for Generative AI Copilot" 
                className="w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">
                  Mechanism Design for Generative AI Copilot in a Sequential Production Process
                </h2>
                <p className="text-muted-foreground mb-4">
                  with Karan Girotra and Elena Belavina
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-background border border-border text-foreground px-4 py-1.5 rounded text-sm">
                    Working Paper
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Applies computational and statistical methods to design Human-AI copilot strategies 
                  for agentic AI within production networks.
                </p>
              </div>
            </div>

            {/* Paper 3 */}
            <div className="flex gap-8 items-start">
              <img 
                src={paper3} 
                alt="Data-driven Decisions in Supply Chains" 
                className="w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">
                  Data-driven Decisions in Supply Chains: Contracts, Algorithms, and Efficiency
                </h2>
                <p className="text-muted-foreground mb-4">
                  with Xiaoyue Yan, Karan Girotra and Elena Belavina
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-background border border-border text-foreground px-4 py-1.5 rounded text-sm">
                    Working Paper
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Explores the intersection of contract design, algorithmic decision-making, and 
                  operational efficiency in modern supply chain networks.
                </p>
              </div>
            </div>

            {/* Paper 4 */}
            <div className="flex gap-8 items-start">
              <img 
                src={paper4} 
                alt="Privacy-preserving Collaborative Learning" 
                className="w-56 h-40 object-cover rounded-lg shadow-md flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">
                  Privacy-preserving Collaborative Learning
                </h2>
                <p className="text-muted-foreground mb-4">
                  with Karan Girotra and Elena Belavina
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-background border border-border text-foreground px-4 py-1.5 rounded text-sm">
                    Work In Progress
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Investigates mechanisms for collaborative learning across organizations while 
                  preserving data privacy and competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
