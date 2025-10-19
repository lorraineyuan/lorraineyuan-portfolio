export default function Teaching() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Teaching & Service</h1>

        {/* Co-instructor */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Co-instructor</h2>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-2">Managing Operations</h3>
              <p className="text-muted-foreground mb-3">MBA Core, weekly review sessions</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Spring 2023</span>
                  <span className="font-semibold">Rating: 4.85/5 (26 respondents)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Fall 2022</span>
                  <span className="font-semibold">Rating: 4.95/5 (20 respondents)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Assistant */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Teaching Assistant</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-3">
              <h3 className="text-lg font-bold">Business Data Analysis with SQL</h3>
              <p className="text-muted-foreground">MBA Elective • Summer 2024</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-3">
              <h3 className="text-lg font-bold">Generative AI for Business Transformation</h3>
              <p className="text-muted-foreground">eCornell Certificate Program • Spring 2024</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-3">
              <h3 className="text-lg font-bold">Managing Operations</h3>
              <p className="text-muted-foreground">EMBA • Fall 2023, Spring 2021</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-3">
              <h3 className="text-lg font-bold">Operations Management</h3>
              <p className="text-muted-foreground">Cornell–Peking MBA • Spring 2023</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-3">
              <h3 className="text-lg font-bold">Innovation & New Venture Creation / The Customer Experience</h3>
              <p className="text-muted-foreground">MBA Elective • Fall 2021</p>
            </div>
          </div>
        </section>

        {/* Directed Reading Mentor */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Directed Reading Mentor</h2>
          <div className="border-l-4 border-primary pl-6 py-3">
            <h3 className="text-lg font-bold">Cornell Tech MBA '23</h3>
            <p className="text-muted-foreground">Spring 2023</p>
          </div>
        </section>

        {/* Professional Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Professional Service</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Reviewer for MSOM Annual Conference</h3>
              </div>
              <span className="text-muted-foreground">2025</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Doctoral Fellow, Digital Life Initiative, Cornell University</h3>
              </div>
              <span className="text-muted-foreground">2024 - 2025</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Co-chair, OTIM PhD Forum, Cornell University</h3>
              </div>
              <span className="text-muted-foreground">2022 - 2023</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Session Co-chair, 2022 INFORMS Annual Conference</h3>
              </div>
              <span className="text-muted-foreground">2022</span>
            </div>
          </div>
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Honors & Awards</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Byron E. Grote Johnson Professional Scholarship</h3>
                <p className="text-muted-foreground">Cornell University</p>
              </div>
              <span className="text-muted-foreground">2021, 2024</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Digital Life Initiative Doctoral Fellowship</h3>
                <p className="text-muted-foreground">Cornell University</p>
              </div>
              <span className="text-muted-foreground">2024</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Cornell University Doctoral Fellowship</h3>
              </div>
              <span className="text-muted-foreground">2020 - 2026</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Noel Croucher Graduate Fellowship</h3>
                <p className="text-muted-foreground">Cornell University ($20,000)</p>
              </div>
              <span className="text-muted-foreground">2019</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Lester B. Knight Scholarship</h3>
                <p className="text-muted-foreground">Cornell University ($40,000)</p>
              </div>
              <span className="text-muted-foreground">2019</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">First Class Study Scholarship</h3>
                <p className="text-muted-foreground">Renmin University of China</p>
              </div>
              <span className="text-muted-foreground">2018</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
