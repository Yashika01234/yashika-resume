import { ArrowUpRight, Droplets, LineChart, Stethoscope, Train, Map, Shield } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "CreatorShield AI",
    description: "An AI-powered contract intelligence platform that analyzes influencer and creator agreements, highlights risky clauses, explains them in plain language, and suggests safer alternatives using LLMs and NLP.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Python", "FastAPI", "SQLite", "Google Gemini API", "REST APIs", "Git", "GitHub"],
    tag: "AI · NLP · Legal Tech",
  },
  {
    icon: Map,
    title: "UrbanFlow",
    description: "An IoT-enabled smart parking system that reduces parking search time, traffic congestion, and manual intervention. Combines hardware sensors with a web dashboard for real-time parking availability, RFID-based entry/exit, and automated gate control.",
    stack: ["ESP32/Arduino", "RFID", "IR Sensors", "HTML", "CSS", "JavaScript", "Python (Flask)", "SQL", "MQTT"],
    tag: "IoT · Smart Parking",
  },
  {
    icon: Droplets,
    title: "Smart Water Quality Monitoring System",
    description: "Developed a smart monitoring interface for tracking water quality parameters using Arduino and IoT concepts.",
    stack: ["Arduino", "HTML", "CSS", "JavaScript", "IoT"],
    tag: "IoT · Hardware",
  },
  {
    icon: LineChart,
    title: "Sales Data Analysis Dashboard",
    description: "Created dashboards for sales visualization and reporting using analytics tools for actionable BI insights.",
    stack: ["Excel", "Power BI"],
    tag: "Analytics · BI",
  },
  {
    icon: Stethoscope,
    title: "AI-Based Lung Disease Detection",
    description: "Explored machine learning workflows for healthcare-based prediction systems with classification models.",
    stack: ["Python", "Machine Learning", "AI"],
    tag: "AI · Healthcare",
  },
  {
    icon: Train,
    title: "Smart Railway Reservation System",
    description: "Developed a railway booking website with authentication, fare calculation, booking, and PNR generation.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "Web App",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 h-96 w-96 bg-purple-glow/20 blur-3xl rounded-full" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-widest text-purple-glow uppercase">Featured Work</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold gradient-text-light">
              Selected projects.
            </h2>
          </div>
          <p className="text-white/60 max-w-md">A mix of data, AI, IoT and full-stack — built to solve real problems end-to-end.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative glass-card rounded-3xl p-8 hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-14 w-14 rounded-2xl bg-accent-gradient grid place-items-center shadow-glow">
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-widest text-purple-glow px-3 py-1.5 rounded-full border border-white/15">
                  {p.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 gradient-text-light pr-8">{p.title}</h3>
              <p className="text-white/65 leading-relaxed">{p.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/75">{s}</span>
                ))}
              </div>

              <ArrowUpRight className="absolute top-7 right-7 h-5 w-5 text-white/30 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
