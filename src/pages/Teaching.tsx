export default function Teaching() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        {/* Co-instructor */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-12">Co-instructor</h1>
          <div className="space-y-12">
            <div className="border-l-4 border-foreground pl-8 py-2">
              <h2 className="text-2xl font-bold mb-2">Managing Operations</h2>
              <p className="text-muted-foreground text-lg">MBA Core, weekly review sessions</p>
              <p className="text-muted-foreground text-lg">Spring 2023 • Rating: 4.85/5 (26 respondents)</p>
              <p className="text-muted-foreground text-lg">Fall 2022 • Rating: 4.95/5 (20 respondents)</p>
            </div>
          </div>
        </section>

        {/* Teaching Assistant */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-12">Teaching Assistant</h1>
          <div className="space-y-12">
            <div className="border-l-4 border-foreground pl-8 py-2">
              <h2 className="text-2xl font-bold mb-2">Business Data Analysis with SQL</h2>
              <p className="text-muted-foreground text-lg">MBA Elective • Summer 2024</p>
            </div>
            <div className="border-l-4 border-foreground pl-8 py-2">
              <h2 className="text-2xl font-bold mb-2">Generative AI for Business Transformation</h2>
              <p className="text-muted-foreground text-lg">eCornell Certificate Program • Spring 2024</p>
            </div>
            <div className="border-l-4 border-foreground pl-8 py-2">
              <h2 className="text-2xl font-bold mb-2">Managing Operations</h2>
              <p className="text-muted-foreground text-lg">EMBA • Fall 2023, Spring 2021</p>
            </div>
            <div className="border-l-4 border-foreground pl-8 py-2">
              <h2 className="text-2xl font-bold mb-2">Operations Management</h2>
              <p className="text-muted-foreground text-lg">Cornell–Peking MBA • Spring 2023</p>
            </div>
            <div className="border-l-4 border-foreground pl-8 py-2">
              <h2 className="text-2xl font-bold mb-2">Innovation & New Venture Creation / The Customer Experience</h2>
              <p className="text-muted-foreground text-lg">MBA Elective • Fall 2021</p>
            </div>
          </div>
        </section>

        {/* Directed Reading Mentor */}
        <section>
          <h1 className="text-5xl font-bold mb-12">Directed Reading Mentor</h1>
          <div className="border-l-4 border-foreground pl-8 py-2">
            <h2 className="text-2xl font-bold mb-2">Cornell Tech MBA '23</h2>
            <p className="text-muted-foreground text-lg">Spring 2023</p>
          </div>
        </section>
      </div>
    </div>
  );
}
