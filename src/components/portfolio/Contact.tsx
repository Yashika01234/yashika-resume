import { Mail, Linkedin, Github, Code2, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "yashika_ug24@nsut.ac.in", href: "mailto:yashika_ug24@nsut.ac.in", live: true },
  { icon: Linkedin, label: "LinkedIn", value: "yashika-nanda", href: "https://www.linkedin.com/in/yashika-nanda-936414321", live: true },
  { icon: Github, label: "GitHub", value: "Coming Soon", href: "#", live: false },
  { icon: Code2, label: "LeetCode", value: "Coming Soon", href: "#", live: false },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-hero text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[60%] bg-purple-glow/30 blur-3xl rounded-full animate-glow" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-purple-glow uppercase">Get in Touch</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold gradient-text-light">
            Let's build something meaningful.
          </h2>
          <p className="mt-5 text-lg text-white/65 max-w-xl mx-auto">
            Open to internships in Data Analytics, AI/ML and Software roles. Drop a message — I respond fast.
          </p>

          <a href="mailto:yashika_ug24@nsut.ac.in" className="mt-8 inline-flex items-center gap-2 bg-accent-gradient px-7 py-4 rounded-xl font-semibold shadow-glow hover:scale-[1.03] transition-transform">
            <Mail className="h-4 w-4" /> yashika_ug24@nsut.ac.in
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.live ? "_blank" : undefined}
              rel="noreferrer"
              className={`group glass-card rounded-2xl p-6 transition-all duration-500 ${c.live ? "hover:-translate-y-1 hover:shadow-glow" : "opacity-70 cursor-not-allowed"}`}
              onClick={(e) => { if (!c.live) e.preventDefault(); }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center group-hover:bg-accent-gradient transition-colors">
                  <c.icon className="h-5 w-5" />
                </div>
                {c.live && <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all" />}
              </div>
              <p className="text-xs uppercase tracking-widest text-white/40">{c.label}</p>
              <p className="mt-1 font-semibold truncate">{c.value}</p>
            </a>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Yashika Nanda. Crafted with care.</p>
          <p>NSUT · B.Tech ECE (AI &amp; ML) · 2028</p>
        </footer>
      </div>
    </section>
  );
}
