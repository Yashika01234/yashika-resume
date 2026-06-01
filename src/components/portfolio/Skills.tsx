import { Code2, BarChart3, Brain, Cpu, Globe } from "lucide-react";

const groups = [
  { icon: Code2, title: "Programming", items: ["Python", "SQL", "C++", "Java", "JavaScript"] },
  { icon: BarChart3, title: "Analytics", items: ["Excel", "Power BI", "Tableau"] },
  { icon: Brain, title: "AI / ML", items: ["Machine Learning", "Generative AI", "RAG Concepts"] },
  { icon: Cpu, title: "Computer Science", items: ["Data Structures & Algorithms"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS", "JavaScript"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-gradient-to-b from-white to-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">Toolkit</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
            Skills that turn data into <span className="gradient-text">decisions</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-2xl bg-white border border-border p-7 hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-accent-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-accent-gradient text-white grid place-items-center shadow-glow">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-deep">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:border-accent hover:text-accent transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
