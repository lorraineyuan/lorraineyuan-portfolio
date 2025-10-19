export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-16 relative">
      {/* Decorative circles */}
      <div className="absolute right-32 top-1/3 w-24 h-24 rounded-full bg-circle-gray-1" />
      <div className="absolute right-48 top-1/2 w-32 h-32 rounded-full bg-circle-gray-2" />
      <div className="absolute right-24 top-1/2 transform translate-y-8 w-20 h-20 rounded-full bg-sidebar-accent" />

      <div className="max-w-3xl">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          PhD Candidate in Operations, Technology, and Information Management
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Researching responsible AI adoption, privacy in data-driven decision making, 
          and the broader impact of AI adoption at scale.
        </p>
        <p className="text-lg text-muted-foreground mt-6 font-medium">
          I will be on the 2025-2026 job market.
        </p>
      </div>
    </div>
  );
}
