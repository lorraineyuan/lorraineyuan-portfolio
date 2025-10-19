export default function ServiceAwards() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Service & Awards</h1>

        {/* Professional Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Professional Service</h2>
          <div className="space-y-10">
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Reviewer for MSOM Annual Conference</h3>
              <p className="text-muted-foreground text-lg">2025</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Doctoral Fellow, Digital Life Initiative, Cornell University</h3>
              <p className="text-muted-foreground text-lg">2024 - 2025</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Co-chair, OTIM PhD Forum, Cornell University</h3>
              <p className="text-muted-foreground text-lg">2022 - 2023</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Session Co-chair, 2022 INFORMS Annual Conference</h3>
              <p className="text-muted-foreground text-lg">2022</p>
            </div>
          </div>
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Honors & Awards</h2>
          <div className="space-y-10">
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Byron E. Grote Johnson Professional Scholarship, Cornell University</h3>
              <p className="text-muted-foreground text-lg">2021, 2024</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Digital Life Initiative Doctoral Fellowship, Cornell University</h3>
              <p className="text-muted-foreground text-lg">2024</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Cornell University Doctoral Fellowship</h3>
              <p className="text-muted-foreground text-lg">2020 - 2026</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Noel Croucher Graduate Fellowship ($20000), Cornell University</h3>
              <p className="text-muted-foreground text-lg">2019</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">Lester B. Knight Scholarship ($40000), Cornell University</h3>
              <p className="text-muted-foreground text-lg">2019</p>
            </div>
            <div className="border-l-4 border-foreground pl-6 py-2">
              <h3 className="text-xl font-bold mb-2">First Class Study Scholarship, Renmin University of China</h3>
              <p className="text-muted-foreground text-lg">2018</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
