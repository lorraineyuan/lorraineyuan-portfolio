export default function Research() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Working Papers</h1>

        <div className="space-y-12">
          {/* Paper 1 */}
          <div className="border-l-4 border-sidebar-accent pl-8 py-4">
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

          {/* Paper 2 */}
          <div className="border-l-4 border-primary pl-8 py-4">
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

          {/* Paper 3 */}
          <div className="border-l-4 border-primary pl-8 py-4">
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

          {/* Paper 4 */}
          <div className="border-l-4 border-primary pl-8 py-4">
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
  );
}
