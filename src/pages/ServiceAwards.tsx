export default function ServiceAwards() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Service & Awards</h1>

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
