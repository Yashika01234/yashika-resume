const stats = [
  { value: "4+", label: "Projects Built", sub: "shipped & deployed" },
  { value: "7.7", label: "Current CGPA", sub: "NSUT · ongoing" },
  { value: "2028", label: "Graduating", sub: "B.Tech AI/ML" },
  { value: "C2", label: "English Proficiency", sub: "EF SET Certified" },
];

export function Stats() {
  return (
    <section className="relative bg-navy-deep text-white py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[60%] bg-purple-glow/20 blur-3xl rounded-full" />
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text-light tracking-tight">{s.value}</p>
              <p className="mt-3 font-semibold text-white">{s.label}</p>
              <p className="text-sm text-white/50 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
