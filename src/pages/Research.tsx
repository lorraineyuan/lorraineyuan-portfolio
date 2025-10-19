import paper1 from "@/assets/paper1.jpg";
import paper2 from "@/assets/paper2.jpg";
import paper3 from "@/assets/paper3.jpg";
import paper4 from "@/assets/paper4.jpg";

export default function Research() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Working Papers</h1>

        <div className="space-y-16">
          {/* Paper 1 */}
          <div className="flex gap-8 items-start">
            <img 
              src={paper1} 
              alt="Privacy-preserving Data-driven Inventory Management" 
              className="w-72 h-56 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Privacy-preserving Data-driven Inventory Management
              </h2>
              <p className="text-muted-foreground mb-3 italic">
                with Elena Belavina
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Major Revision at Management Science</span>
              </p>
              <div className="mb-4">
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-medium">
                  Job Market Paper
                </span>
                <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm ml-2">
                  Accepted to NYC Privacy Day at Google
                </span>
              </div>
              <a 
                href="https://ssrn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sidebar-accent hover:underline"
              >
                [SSRN]
              </a>
            </div>
          </div>

          {/* Paper 2 */}
          <div className="flex gap-8 items-start">
            <img 
              src={paper2} 
              alt="Mechanism Design for Generative AI Copilot" 
              className="w-72 h-56 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Mechanism Design for Generative AI Copilot in a Sequential Production Process
              </h2>
              <p className="text-muted-foreground mb-3 italic">
                with Karan Girotra and Elena Belavina
              </p>
              <p className="text-lg text-foreground">
                Working Paper
              </p>
            </div>
          </div>

          {/* Paper 3 */}
          <div className="flex gap-8 items-start">
            <img 
              src={paper3} 
              alt="Data-driven Decisions in Supply Chains" 
              className="w-72 h-56 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Data-driven Decisions in Supply Chains: Contracts, Algorithms, and Efficiency
              </h2>
              <p className="text-muted-foreground mb-3 italic">
                with Xiaoyue Yan, Karan Girotra and Elena Belavina
              </p>
              <p className="text-lg text-foreground">
                Working Paper
              </p>
            </div>
          </div>

          {/* Paper 4 */}
          <div className="flex gap-8 items-start">
            <img 
              src={paper4} 
              alt="Privacy-preserving Collaborative Learning" 
              className="w-72 h-56 object-cover rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Privacy-preserving Collaborative Learning
              </h2>
              <p className="text-muted-foreground mb-3 italic">
                with Karan Girotra and Elena Belavina
              </p>
              <p className="text-lg text-foreground">
                Work In Progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
