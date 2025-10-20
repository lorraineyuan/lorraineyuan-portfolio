import headshot from "@/assets/headshot.png";
import paper1 from "@/assets/paper1-new.jpg";
import paper2 from "@/assets/paper2-new.jpg";
import paper3 from "@/assets/paper3-new.jpg";
import paper4 from "@/assets/paper4-new.jpg";
import { ExternalLink, ChevronDown, Mail, MapPin, FileText } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Index() {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);
  const [isFlashTalkOpen, setIsFlashTalkOpen] = useState(false);

  return (
    <Layout>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 pt-16">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-end mb-8">
            <div className="w-64 sm:w-80 md:w-96 flex-shrink-0">
              <img src={headshot} alt="Lorraine Yuan" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 flex flex-col justify-between text-center md:text-left md:self-stretch">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  <div>Lorraine</div>
                  <div>Yuan</div>
                </h1>
                <p className="text-base text-gray-400 -mt-2">She/Her/Hers</p>
              </div>
              <div>
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
          <p className="text-base sm:text-lg font-semibold text-foreground text-center">
            I'm on the 2025-2026 job market.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">About Me</h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-foreground mb-12 md:mb-16">
            <p>
              I am Lorraine Yuan, a final year PhD candidate in the{" "}
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
                  Data Privacy, Generative AI Adoption, Inventory Management, Mechanism Design
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Methodologies</h3>
                <p className="text-foreground">Data-driven Optimization, Economics Modelling, Differential Privacy</p>
              </div>
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Recent News</h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground">
              <p>
                I will present my job market paper "Privacy-preserving Data-driven Inventory Management" at INFORMS Annual Meeting, Atlanta, GA.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>INFORMS Workshop on Data Science — October 25, 1:00 PM - 2:00 PM, Bldg B Lvl 3 B305</li>
                <li>INFORMS Annual Meeting Job Market Showcase Cluster — October 26, 11:00 AM - 12:15 PM, Bldg A Lvl 3 A311</li>
                <li>INFORMS Annual Meeting MSOM Service Operations Cluster— October 26, 2:45 PM - 4:00 PM, Bldg B Lvl 3 B310</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Publications Section */}
          <div className="mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12">Papers Under-Review</h1>

            <div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                <img
                  src={paper1}
                  alt="Privacy-preserving Data-driven Inventory Management"
                  className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-lg shadow-md flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      Privacy-preserving Data-driven Inventory Management
                    </h2>
                    <p className="text-muted-foreground mb-3 text-base">with Elena Belavina</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                        Major Revision at Management Science
                      </span>
                      <span className="inline-block bg-background border-2 border-primary text-foreground px-3 py-1 rounded text-sm font-medium">
                        Job Market Paper
                      </span>
                      <a
                        href="https://ssrn.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm hover:bg-muted transition-colors"
                      >
                        SSRN
                      </a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-base text-foreground space-y-1">
                    <li>Accepted to NYC Privacy Day at Google</li>
                    <li>Third Place in YinzOR Conference Flash Talk Competition</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <Collapsible open={isAbstractOpen} onOpenChange={setIsAbstractOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                    <ChevronDown className={`w-5 h-5 transition-transform ${isAbstractOpen ? "rotate-180" : ""}`} />
                    Abstract
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <p className="text-foreground leading-relaxed">
                      The use of customer data (demographics, past purchases, etc.) for inventory management can improve
                      firm profits and customer service levels. Yet, large-scale use of such data in production
                      environments increases the risks of breaching customers' privacy. In this study, we develop
                      differential-privacy based privacy-preserving adaptations for two data-driven newsvendor
                      paradigms: the usual two-step estimate-then-optimize method, and the newer one-step joint
                      estimate-optimize method. We characterize the tradeoff between privacy loss and profits and show
                      that the privacy-preserving one-step joint approach outperforms the privacy-preserving two-step
                      approach. In essence obfuscating customer data is less costly in terms of profits, when we account
                      for how estimations will be used in downstream optimization problems, we can privatize outputs
                      with less noise and more targeted noise injection. We subsequently construct a generic model to
                      explore the broader impact of implementing these privacy-preserving algorithms on both the firm
                      and customers. Our analysis uncovers a win-win scenario for both the firm and customers under the
                      two-step and one-step privacy-preserving paradigms respectively, as long as customers demonstrate
                      any degree of privacy concerns. The feasibility of such an outcome depends on both the choice of
                      paradigm and critical ratio. Calibration based on a real-world dataset reveals that the one-step
                      algorithms showcase a 3 to 4 times stronger privacy protection and up to 30% increase in achieved
                      profit than the two-step counterpart. Even with lower customer privacy sensitivity, the one-step
                      algorithms can boost profits by 12% while maintaining robust privacy protection—an achievement
                      unattainable with the two-step algorithm.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={isFlashTalkOpen} onOpenChange={setIsFlashTalkOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-lg font-semibold hover:text-sidebar-accent transition-colors">
                    <ChevronDown className={`w-5 h-5 transition-transform ${isFlashTalkOpen ? "rotate-180" : ""}`} />
                    10-min Flash Talk
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
          </div>

          {/* Working Papers Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12">Working Papers</h1>

            <div className="space-y-12 md:space-y-16">
              {/* Paper 2 */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper2}
                    alt="Mechanism Design for Generative AI Copilot"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-lg shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      Mechanism Design for Generative AI Copilot in a Sequential Production Process
                    </h2>
                    <p className="text-muted-foreground mb-3 text-base">with Karan Girotra and Elena Belavina</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Working Paper
                      </span>
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Draft upon request
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  Designs human-AI copilot strategies that determine optimal human feedback points in agentic AI
                  workflows to balance attention, fatigue, accuracy, and computational cost.
                </p>
              </div>

              {/* Paper 3 */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper3}
                    alt="Data-driven Decisions in Supply Chains"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-lg shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      Data-driven Decisions in Supply Chains: Contracts, Algorithms, and Efficiency
                    </h2>
                    <p className="text-muted-foreground mb-3 text-base">
                      with Xiaoyue Yan, Karan Girotra and Elena Belavina
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Working Paper
                      </span>
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Draft upon request
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  Explores the intersection of contract design, algorithmic decision-making, and operational efficiency
                  in modern supply chain networks.
                </p>
              </div>

              {/* Paper 4 */}
              <div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-4">
                  <img
                    src={paper4}
                    alt="Privacy-preserving Collaborative Learning"
                    className="w-full sm:w-80 h-64 sm:h-60 object-cover rounded-lg shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Privacy-preserving Collaborative Learning</h2>
                    <p className="text-muted-foreground mb-3 text-base">with Karan Girotra and Elena Belavina</p>
                    <div>
                      <span className="inline-block bg-background border border-border text-foreground px-3 py-1 rounded text-sm">
                        Work In Progress
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  Investigates mechanisms for collaborative learning across organizations while preserving data privacy
                  and competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Teaching</h1>

          {/* Co-instructor */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Co-instructor</h2>
            <div className="space-y-10">
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Managing Operations</h3>
                <p className="text-muted-foreground">MBA Core • Weekly review sessions</p>
                <p className="text-muted-foreground">Spring 2023 (Rating: 4.85/5, Number of respondents: 26)</p>
                <p className="text-muted-foreground">Fall 2022 (Rating: 4.95/5, Number of respondents: 20)</p>
              </div>
            </div>
          </div>

          {/* Teaching Assistant */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Teaching Assistant</h2>
            <div className="space-y-10">
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Business Data Analysis with SQL</h3>
                <p className="text-muted-foreground">MBA Elective • Summer 2024</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Generative AI for Business Transformation</h3>
                <p className="text-muted-foreground">eCornell Certificate Program • Spring 2024</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Managing Operations</h3>
                <p className="text-muted-foreground">EMBA • Fall 2023, Spring 2021</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Operations Management</h3>
                <p className="text-muted-foreground">Cornell–Peking MBA • Spring 2023</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Innovation & New Venture Creation / The Customer Experience</h3>
                <p className="text-muted-foreground">MBA Elective • Fall 2021</p>
              </div>
            </div>
          </div>

          {/* Directed Reading Mentor */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Directed Reading Mentor</h2>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-lg font-bold mb-2">Cornell Tech MBA '23</h3>
              <p className="text-muted-foreground">Spring 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Awards Section */}
      <section id="service-awards" className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Service & Awards</h1>

          {/* Professional Service */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Professional Service</h2>
            <div className="space-y-10">
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Reviewer for MSOM Annual Conference</h3>
                <p className="text-muted-foreground">2025</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Doctoral Fellow, Digital Life Initiative, Cornell University</h3>
                <p className="text-muted-foreground">2024 - 2025</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Co-chair, OTIM PhD Forum, Cornell University</h3>
                <p className="text-muted-foreground">2022 - 2023</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Session Co-chair, 2022 INFORMS Annual Conference</h3>
                <p className="text-muted-foreground">2022</p>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Honors & Awards</h2>
            <div className="space-y-10">
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">
                  Byron E. Grote Johnson Professional Scholarship, Cornell University
                </h3>
                <p className="text-muted-foreground">2021, 2024</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">
                  Digital Life Initiative Doctoral Fellowship, Cornell University
                </h3>
                <p className="text-muted-foreground">2024</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Cornell University Doctoral Fellowship</h3>
                <p className="text-muted-foreground">2020 - 2026</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">
                  Noel Croucher Graduate Fellowship ($20000), Cornell University
                </h3>
                <p className="text-muted-foreground">2019</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">Lester B. Knight Scholarship ($40000), Cornell University</h3>
                <p className="text-muted-foreground">2019</p>
              </div>
              <div className="border-l-4 border-foreground pl-6 py-2">
                <h3 className="text-lg font-bold mb-2">First Class Study Scholarship, Renmin University of China</h3>
                <p className="text-muted-foreground">2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
