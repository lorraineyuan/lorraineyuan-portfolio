import headshot from "@/assets/headshot.png";
import paper1 from "@/assets/paper1-new.jpg";
import paper2 from "@/assets/paper2-new.jpg";
import paper3 from "@/assets/paper3-new.png";
import paper4 from "@/assets/paper4-ev.png";
import project1 from "@/assets/project1-privacy-collab.jpg";
import project2 from "@/assets/project2-transfer-learning.jpg";
import project3 from "@/assets/project3-token-allocation.jpg";
import project4 from "@/assets/project4-ev-charging.jpg";
import { ExternalLink, ChevronDown, Mail, MapPin, FileText, Linkedin } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Index() {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);
  const [isPaper2AbstractOpen, setIsPaper2AbstractOpen] = useState(false);
  const [isPaper3AbstractOpen, setIsPaper3AbstractOpen] = useState(false);
  const [isPaper4AbstractOpen, setIsPaper4AbstractOpen] = useState(false);
  const [isFlashTalkOpen, setIsFlashTalkOpen] = useState(false);

  return (
    <Layout>
      {/* Home Section */}
      <section id="home" className="flex items-center justify-center px-4 sm:px-8 md:px-16 py-8 md:py-12">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-8">
            <div className="w-44 sm:w-52 md:w-60 flex-shrink-0">
              <img src={headshot} alt="Huaibing Yuan" className="w-full rounded-lg shadow-lg grayscale" />
            </div>
            <div className="flex-1 flex flex-col text-center md:text-left">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  <div>Huaibing</div>
                  <div>Yuan</div>

                </h1>
                <p className="text-base text-gray-400 -mt-2">She/Her/Hers</p>
              </div>
              <div className="mt-6">
                <h2 className="text-base sm:text-lg text-muted-foreground mb-4">
                  PhD Candidate in Operations, Technology, and Information Management
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Johnson College of Business
                  <br />
                  Cornell Tech, Cornell University
                </p>
              </div>
            </div>
          </div>

          {/* Contacts row */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 text-sm text-foreground/80 border-t border-foreground/15 pt-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-foreground/60 flex-shrink-0" />
              <a href="mailto:hy557@cornell.edu" className="hover:text-foreground transition-colors break-all">
                hy557@cornell.edu
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-foreground/60 flex-shrink-0" />
              <a
                href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-foreground/60 flex-shrink-0" />
              <span>Cornell Tech, 2 West Loop Road, New York, NY 10044</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">About Me</h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-foreground mb-12 md:mb-16">
            <p>
              I am Huaibing Yuan, a final year PhD candidate in the{" "}
              <a
                href="https://www.johnson.cornell.edu/programs/phd-program/operations-technology-information-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline"
              >
                Operations, Technology, and Information Management (OTIM)
              </a>{" "}
              division of SC Johnson College of Business at{" "}
              <a
                href="https://tech.cornell.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline"
              >
                Cornell Tech
              </a>
              , where I am very fortunate to be advised by{" "}
              <a
                href="https://tech.cornell.edu/people/karan-girotra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline"
              >
                Prof. Karan Girotra
              </a>{" "}
              and{" "}
              <a
                href="https://sha.cornell.edu/faculty-research/faculty/eb733/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline"
              >
                Prof. Elena Belavina
              </a>
              . I was also a doctoral fellow at the{" "}
              <a
                href="https://www.dli.tech.cornell.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:underline"
              >
                Digital Life Initiative
              </a>
              .
            </p>
            <p>
              I obtained a B.S. in Mathematics and a B.A. in Economics from Renmin University of China. I also hold a
              M.Eng. in Operations Research from Cornell Tech.
            </p>
            <p>
              My research interests center on <strong>responsible AI adoption</strong>, with a particular emphasis on{" "}
              <strong>privacy in data-driven decision making</strong> and the broader impact of{" "}
              <strong>AI adoption at scale</strong>.
            </p>
            <p>
              I develop privacy-preserving data-driven algorithms and explore their impact for adoption at scale in
              inventory management to enhance profitability maintaining customer privacy. More recently, my work applies
              computational and statistical methods to design Human-AI copilot strategies for agentic AI within
              production networks.
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Research Interests</h2>
            <div className="space-y-4 text-base sm:text-lg">
              <div>
                <h3 className="font-semibold mb-2">Topics</h3>
                <p className="text-foreground">
                  Privacy-Aware Analytics, AI with Human-in-the-Loop, Supply Chain Management, Sustainable Transportation
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Methodologies</h3>
                <p className="text-foreground">
                  Data-Driven Optimization, Economic and Statistical Modelling, Empirical OM, Causal Inference
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Recent News</h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground">
              <p>
                I presented my recent work on "Privacy-Preserving Data-Driven Inventory Management" at INFORMS
                Annual Meeting, Atlanta, GA.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  INFORMS Workshop on Data Science — <em>October 25, 1:00 PM - 2:00 PM, Bldg B Lvl 3 B305</em>
                </li>
                <li>
                  INFORMS Annual Meeting Job Market Showcase Cluster —{" "}
                  <em>October 26, 11:00 AM - 12:15 PM, Bldg A Lvl 3 A311</em>
                </li>
                <li>
                  INFORMS Annual Meeting MSOM Service Operations Cluster—{" "}
                  <em>October 26, 2:45 PM - 4:00 PM, Bldg B Lvl 3 B310</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Research</h1>

          {/* Working Papers Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Working Papers</h2>

            <div className="space-y-8 md:space-y-10">
              {/* Privacy-Preserving Data-Driven Inventory Management */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper1}
                    alt="Privacy-Preserving Data-Driven Inventory Management"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        Privacy-Preserving Data-Driven Inventory Management
                      </h2>
                      <p className="text-muted-foreground mb-3 text-base">with Elena Belavina</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold text-center">
                          Major Revision at Management Science
                        </span>
                        <span
                          className="inline-block p-[3px] rounded"
                          style={{
                            background: "var(--gradient-rainbow)",
                          }}
                        >
                          <a
                            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5219878"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 rounded text-sm font-medium text-foreground bg-white transition-transform hover:scale-105"
                          >
                            SSRN
                          </a>
                        </span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-base text-foreground space-y-1">
                      <li>Accepted to NYC Privacy Day at Google</li>
                      <li>Third Place in YinzOR Conference Flash Talk Competition</li>
                    </ul>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mb-4">
                  Examines how different ways of using data to make decisions lead to fundamentally different outcomes in
                  difficulty for privacy protection, firm's profit, and customer welfare.
                </p>

                <div className="space-y-3">
                  <Collapsible open={isAbstractOpen} onOpenChange={setIsAbstractOpen}>
                    <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                      <ChevronDown className={`w-5 h-5 transition-transform ${isAbstractOpen ? "rotate-180" : ""}`} />
                      Abstract
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                      <p className="text-foreground leading-relaxed">
                        Firms today have access to increasing amounts of customer data that can facilitate better demand
                        prediction and inventory management. However, security researchers have long demonstrated that
                        attackers can exploit these decision pipelines to recover sensitive data by combining data-driven
                        decisions with background information—a fear realized in recent attacks and one that is a
                        deterrent to broader adoption of data-driven decision-making. This study develops and compares
                        privacy-preserving approaches for data-driven inventory management that are robust to such
                        attacks. We propose differential privacy-based adaptations of two leading data-driven inventory
                        management methods—the traditional two-step estimate-then-optimize, and a more contemporary
                        one-step joint estimate-optimize paradigm—and establish theoretical guarantees on their
                        performance. Our analysis characterizes a firm's tradeoff between privacy protection and
                        profitability and compares the three algorithms in terms of the difficulty of privacy
                        preservation, profit losses from privacy, optimal privacy protection levels, and the ensuing
                        customer surplus. Our analysis shows that the one-step paradigm dominates the two-step paradigm by
                        enabling lower-cost privatization of customer data through more targeted noise injection,
                        achieving lower privacy exposure risk, higher profitability, and greater customer surplus. This
                        finding reshapes our understanding of privacy protection—the costs and benefits of privacy
                        preservation are not only driven by the privacy algorithms used but are also fundamentally shaped
                        by the underlying data-driven decision-making paradigm. We also show that a firm that uses our
                        methods and chooses an optimal privacy level will, in fact, increase its demand, profit, and
                        customer surplus (under most conditions)—challenging the notion that privacy protection comes
                        necessarily at a cost. Our numerical analysis reveals that one-step algorithms offer 3 to 6 times
                        stronger privacy protection and around 30% higher profits than the two-step counterpart. Even with
                        high customer preference for privacy, one-step algorithms can boost profits by as much as 40%
                        while maintaining strong privacy protection—an achievement unattainable with the two-step
                        algorithm.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible open={isFlashTalkOpen} onOpenChange={setIsFlashTalkOpen}>
                    <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                      <ChevronDown className={`w-5 h-5 transition-transform ${isFlashTalkOpen ? "rotate-180" : ""}`} />
                      10-min Flash Talk
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                      <div className="flex justify-center">
                        <div className="aspect-video w-full max-w-3xl">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/JJjOuLfzm5s"
                            title="Flash Talk - Privacy-Preserving Data-Driven Inventory Management"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              <hr className="border-t border-border/60" />

              {/* Paper 2 */}
              <div>
                <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper2}
                    alt="Governing Agentic AI Workflows"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      Governing Agentic AI Workflows: Oversight with Agentic and Assistive Designs
                    </h2>
                    <p className="text-muted-foreground mb-3 text-base">with Karan Girotra</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        In Preparation for Submission to Management Science
                      </span>
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Draft Available Upon Request
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Develops a stochastic model to study how to optimally place human feedback in agentic AI systems with
                  multi-step workflows under a principal-agent framework, balancing uncertainty in AI jagged intelligence
                  and human moral hazard.
                </p>

                <Collapsible open={isPaper2AbstractOpen} onOpenChange={setIsPaper2AbstractOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                    <ChevronDown className={`w-5 h-5 transition-transform ${isPaper2AbstractOpen ? "rotate-180" : ""}`} />
                    Abstract
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2" />
                </Collapsible>
              </div>

              <hr className="border-t border-border/60" />

              {/* Paper 3 */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper3}
                    alt="Data-Driven Decisions in Supply Chains"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      Data-Driven Decisions in Supply Chains: Contracts, Algorithms, and Efficiency
                    </h2>
                    <p className="text-muted-foreground mb-3 text-base">
                      with Elena Belavina, Karan Girotra and Xiaoyue Yan
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        In Preparation for Submission to Management Science
                      </span>
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Draft Available Upon Request
                      </span>
                    </div>

                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Studies how learning algorithm choice interacts with classic coordinating contracts in multi-tier
                  supply chains, showing that algorithmic bias and variance can reverse standard coordination results
                  across prevalent data-driven methods.
                </p>

                <Collapsible open={isPaper3AbstractOpen} onOpenChange={setIsPaper3AbstractOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                    <ChevronDown className={`w-5 h-5 transition-transform ${isPaper3AbstractOpen ? "rotate-180" : ""}`} />
                    Abstract
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2" />
                </Collapsible>
              </div>

              <hr className="border-t border-border/60" />

              {/* Paper 4 */}
              <div>
                <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper4}
                    alt="Charging Before Empty"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      Charging Before Empty: Private Buffers and Public Burdens in Electric Vehicle Charging Behavior
                    </h2>
                    <p className="text-muted-foreground mb-3 text-base">with Yu Nu</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Working Paper
                      </span>
                    </div>

                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Studies how EV drivers maintain private battery buffers by charging before their batteries are close to
                  empty, and how these precautionary choices impose public burdens through congestion at shared charging
                  stations; uses large-scale trip and charging data to estimate charging behavior and quantify its
                  operational impact.
                </p>

                <Collapsible open={isPaper4AbstractOpen} onOpenChange={setIsPaper4AbstractOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                    <ChevronDown className={`w-5 h-5 transition-transform ${isPaper4AbstractOpen ? "rotate-180" : ""}`} />
                    Abstract
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2" />
                </Collapsible>
              </div>
            </div>
          </div>

          {/* Ongoing Projects Section — HIDDEN; uncomment to restore
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 md:mb-12">Ongoing Projects</h2>
            <div className="space-y-8 md:space-y-10">
              
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={project1}
                    alt="Privacy-Preserving Collaborative Learning"
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Privacy-Preserving Collaborative Learning</h3>
                    <p className="text-foreground leading-relaxed">
                      Studies how firms can jointly train predictive models while limiting the leakage of proprietary demand,
                      inventory, or operational data; develops privacy-preserving learning mechanisms that trade off model
                      performance, coordination benefits, and information exposure.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2"><span className="font-semibold">Methodologies:</span> Differential privacy, federated learning, stochastic optimization, game theory.</p>
                  </div>
                </div>
              </div>

              <hr className="border-t border-border/60" />

              
              <div>
                <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={project2}
                    alt="Transfer Learning for Privacy-Aware Agentic AI"
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Transfer Learning for Privacy-Aware Agentic AI</h3>
                    <p className="text-foreground leading-relaxed">
                      Studies how agentic AI systems can transfer knowledge across related tasks or users while respecting
                      privacy constraints; characterizes when transfer improves decision quality and when it amplifies
                      privacy risks or model misspecification.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2"><span className="font-semibold">Methodologies:</span> Transfer learning, differential privacy, online learning, statistical learning theory.</p>
                  </div>
                </div>
              </div>

              <hr className="border-t border-border/60" />

              
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={project3}
                    alt="AI Token Allocation in a Production Network"
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">AI Token Allocation in a Production Network</h3>
                    <p className="text-foreground leading-relaxed">
                      Studies how scarce AI inference capacity should be allocated across tasks, stages, and firms in a
                      production network; develops models for prioritizing token budgets when AI assistance affects
                      downstream productivity and bottlenecks.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2"><span className="font-semibold">Methodologies:</span> Network optimization, queueing theory, mechanism design, dynamic resource allocation.</p>
                  </div>
                </div>
              </div>

              <hr className="border-t border-border/60" />

              
              <div>
                <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={project4}
                    alt="Pricing For EV Chargers Under Congestion"
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-2xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Pricing For EV Chargers Under Congestion</h3>
                    <p className="text-foreground leading-relaxed">
                      Studies dynamic pricing for electric vehicle charging stations when drivers face congestion and
                      heterogeneous charging needs; designs congestion-aware prices that manage station utilization while
                      accounting for driver substitution and timing responses.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2"><span className="font-semibold">Methodologies:</span> Dynamic pricing, queueing theory, stochastic modeling, choice modeling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Teaching Section — Taxonomic grid (Le Labo dossier) */}
      <section id="teaching" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Teaching</h1>

          {/* Dossier container */}
          <div className="border border-foreground p-6">
            <div className="border-b border-foreground pb-4 mb-8">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight uppercase">Instruction & Pedagogy</h2>
              <p className="text-xs mt-1 text-muted-foreground italic">Log of academic appointments and mentorship records.</p>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left column: high-volume roles */}
              <div className="md:col-span-7 flex flex-col gap-6">
                {/* Teaching Assistant */}
                <div className="border border-foreground p-4">
                  <div className="flex justify-between items-end border-b border-foreground mb-3 pb-1">
                    <h3 className="text-sm font-bold uppercase tracking-widest">Teaching Assistant</h3>
                    <span className="text-[10px] text-muted-foreground">[05 RECORDS]</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="text-xs">
                        <span className="font-bold uppercase">Business Data Analysis with SQL</span>
                        <br />
                        <span className="text-muted-foreground">MBA Elective</span>
                      </div>
                      <div className="text-[10px] text-right shrink-0 font-bold uppercase">Summer 2024</div>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="text-xs">
                        <span className="font-bold uppercase">Generative AI for Business Transformation</span>
                        <br />
                        <span className="text-muted-foreground">eCornell Certificate Program</span>
                      </div>
                      <div className="text-[10px] text-right shrink-0 font-bold uppercase">Spring 2024</div>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="text-xs">
                        <span className="font-bold uppercase">Managing Operations</span>
                        <br />
                        <span className="text-muted-foreground">EMBA</span>
                      </div>
                      <div className="text-[10px] text-right shrink-0 font-bold uppercase">Fall 2023, Spring 2021</div>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="text-xs">
                        <span className="font-bold uppercase">Operations Management</span>
                        <br />
                        <span className="text-muted-foreground">Cornell–Peking MBA</span>
                      </div>
                      <div className="text-[10px] text-right shrink-0 font-bold uppercase">Spring 2023</div>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="text-xs">
                        <span className="font-bold uppercase">Innovation & New Venture Creation / The Customer Experience</span>
                        <br />
                        <span className="text-muted-foreground">MBA Elective</span>
                      </div>
                      <div className="text-[10px] text-right shrink-0 font-bold uppercase">Fall 2021</div>
                    </div>
                  </div>
                </div>

                {/* Paths Academics */}
                <div className="border border-foreground p-4">
                  <div className="flex justify-between items-end border-b border-foreground mb-3 pb-1">
                    <h3 className="text-sm font-bold uppercase tracking-widest">Paths Academics</h3>
                    <span className="text-[10px] text-muted-foreground">[OUTREACH]</span>
                  </div>
                  <div className="text-xs">
                    <p className="text-muted-foreground italic">To be added.</p>
                  </div>
                </div>
              </div>

              {/* Right column: specialized & independent roles */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {/* Co-instructor — highlighted */}
                <div className="border border-foreground p-4 bg-secondary">
                  <div className="flex justify-between items-end border-b border-foreground mb-3 pb-1">
                    <h3 className="text-sm font-bold uppercase tracking-widest">Co-instructor</h3>
                    <span className="text-[10px] font-bold">RATING: 4.9/5.0</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold uppercase">Managing Operations</span>
                    <div className="text-[10px] text-muted-foreground mt-1">MBA Core • Weekly review sessions</div>
                    <div className="mt-3 pt-3 border-t border-foreground border-dotted space-y-1">
                      <div className="flex justify-between text-[10px] uppercase">
                        <span className="text-muted-foreground">Spring 2023</span>
                        <span className="font-bold">4.85/5.0 (n=26)</span>
                      </div>
                      <div className="flex justify-between text-[10px] uppercase">
                        <span className="text-muted-foreground">Fall 2022</span>
                        <span className="font-bold">4.95/5.0 (n=20)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Independent Instruction */}
                <div className="border border-foreground p-4">
                  <div className="flex justify-between items-end border-b border-foreground mb-3 pb-1">
                    <h3 className="text-sm font-bold uppercase tracking-widest">Independent Instruction</h3>
                  </div>
                  <div className="text-xs">
                    <p className="text-muted-foreground italic">To be added.</p>
                  </div>
                </div>

                {/* Directed Reading Mentor */}
                <div className="border border-foreground p-4">
                  <div className="flex justify-between items-end border-b border-foreground mb-3 pb-1">
                    <h3 className="text-sm font-bold uppercase tracking-widest">Directed Reading Mentor</h3>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold uppercase">Cornell Tech MBA '23</span>
                    <div className="text-[10px] text-muted-foreground mt-1">Mentee: 1 MBA Student</div>
                    <div className="text-[10px] font-bold uppercase mt-1">Spring 2023</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer meta */}
            <div className="mt-10 pt-4 border-t border-foreground flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">End of Teaching Records</span>
              <span className="text-[9px] uppercase text-muted-foreground">Cornell Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Awards Section */}
      <section id="service-awards" className="py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Service & Awards</h1>

          {/* Professional Service */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">Professional Service</h2>
            <ul className="space-y-1 text-sm sm:text-base list-none">
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Reviewer for MSOM Annual Conference</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2025</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Doctoral Fellow, Digital Life Initiative, Cornell University</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2024 - 2025</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Co-chair, OTIM PhD Forum, Cornell University</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2022 - 2023</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Session Co-chair, 2022 INFORMS Annual Conference</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2022</span>
              </li>
            </ul>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">Honors & Awards</h2>
            <ul className="space-y-1 text-sm sm:text-base list-none">
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Byron E. Grote Johnson Professional Scholarship, Cornell University</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2021, 2024</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Digital Life Initiative Doctoral Fellowship, Cornell University</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2024</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Cornell University Doctoral Fellowship</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2020 - 2026</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Noel Croucher Graduate Fellowship ($20,000), Cornell University</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2019</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">Lester B. Knight Scholarship ($40,000), Cornell University</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2019</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-medium flex-1">First Class Study Scholarship, Renmin University of China</span>
                <span className="text-muted-foreground sm:w-32 sm:text-right">2018</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
