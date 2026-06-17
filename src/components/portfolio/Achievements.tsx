import { Award, Medal, Trophy, GraduationCap, BookOpen, Sparkles, BadgeCheck } from "lucide-react";

const achievements = [
  { icon: Medal, title: "Silver Medalist", sub: "International Olympiad of English Language (IOEL)", accent: "from-slate-300 to-slate-500" },
  { icon: Award, title: "Bronze Medalist", sub: "Bharatiya Sanskriti Gyan Pariksha", accent: "from-amber-400 to-orange-600" },
  { icon: GraduationCap, title: "EF SET C2", sub: "Highest level English proficiency", accent: "from-blue-400 to-indigo-600" },
];

const certs = [
  { icon: BookOpen, title: "Full Stack Web Development", sub: "Comprehensive web development course" },
  { icon: Sparkles, title: "AI Bootcamp for Engineers", sub: "Hands-on AI & ML foundations" },
  { icon: BadgeCheck, title: "EF SET English Certification", sub: "Verified C2 proficiency level" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">Recognition</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
            Achievements &amp; <span className="gradient-text">credentials</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {achievements.map((a) => (
            <div key={a.title} className="group relative bg-white border border-border rounded-2xl p-7 overflow-hidden hover:-translate-y-1 hover:shadow-elevated transition-all duration-500">
              <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${a.accent} opacity-10 group-hover:opacity-25 transition-opacity blur-2xl`} />
              <div className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${a.accent} grid place-items-center shadow-md`}>
                <a.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="relative mt-5 font-bold text-navy-deep">{a.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{a.sub}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-deep">Certifications</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div key={c.title} className="group flex items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-6 hover:bg-white hover:shadow-elevated transition-all duration-500">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-accent-gradient text-white grid place-items-center shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-deep">{c.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
