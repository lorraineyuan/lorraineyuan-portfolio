import headshot from "@/assets/headshot.png";

export default function About() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-12 items-start mb-16">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-8">About Me</h1>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                I am Lorraine Yuan, a final year PhD candidate in the Operations, Technology, and Information Management
                (OTIM) division of SC Johnson College of Business at Cornell Tech, where I am very fortunate to be
                advised by Prof. Karan Girotra and Prof. Elena Belavina. I'm also a doctoral fellow at the Digital Life
                Initiative.
              </p>
              <p>
                I obtained a B.S. in Mathematics and a B.A. in Economics from Renmin University of China. I also hold a
                M.Eng. in Operations Research from Cornell Tech.
              </p>
              <p>
                My research interests center on responsible AI adoption, with a particular emphasis on privacy in
                data-driven decision making and the broader impact of AI adoption at scale.
              </p>
              <p>
                I develop privacy-preserving data-driven algorithms and explore their impact for adoption at scale in
                inventory management to enhance profitability maintaining customer privacy. More recently, my work
                applies computational and statistical methods to design Human-AI copilot strategies for agentic AI
                within production networks.
              </p>
            </div>
          </div>
          <div className="w-80 flex-shrink-0">
            <img src={headshot} alt="Lorraine Yuan" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Recent News</h2>
          <div className="space-y-4 text-lg text-foreground">
            <p>
              I will present my job market paper "Privacy-preserving Data-driven Inventory Management" at INFORMS Annual
              Meeting, Atlanta, GA.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>INFORMS Workshop on Data Science — October 25, 1:00 PM - 2:00 PM, Bldg B Lvl 3 B305</li>
              <li>
                INFORMS Annual Meeting Job Market Showcase Cluster — October 26, 11:00 AM - 12:15 PM, Bldg A Lvl 3 A311
              </li>
              <li>
                INFORMS Annual Meeting MSOM Service Operations Cluster— October 26, 2:45 PM - 4:00 PM, Bldg B Lvl 3 B310
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Research Interests</h2>
          <div className="space-y-4 text-lg">
            <div>
              <h3 className="font-semibold mb-2">Topics</h3>
              <p className="text-foreground">
                Data Privacy, Generative AI Adoption, Inventory Management, Mechanism Design
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Methodologies</h3>
              <p className="text-foreground">Data-driven Optimization, Economic Modelling, Differential Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
