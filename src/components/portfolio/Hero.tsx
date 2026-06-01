import heroImg from "@/assets/yashika-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, FileText, Linkedin, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero text-white pt-32 pb-20">
      <img src={heroBg} alt="" aria-hidden width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-purple-glow/30 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-20 h-[24rem] w-[24rem] rounded-full bg-accent/30 blur-3xl animate-float-slow" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-purple-glow" />
              Open to Internships
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="gradient-text-light">Yashika</span><br />
              <span className="gradient-text-light">Nanda.</span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-white/80 font-medium">
              AI &amp; ML <span className="text-purple-glow">/</span> Data Analytics <span className="text-purple-glow">/</span> NSUT
            </p>

            <p className="mt-5 max-w-xl text-base md:text-lg text-white/60 leading-relaxed">
              Aspiring Data Analyst and AI/ML enthusiast focused on building data-driven solutions and solving real-world problems through technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="group inline-flex items-center gap-2 bg-accent-gradient text-white px-6 py-3.5 rounded-xl font-medium shadow-glow hover:scale-[1.03] transition-transform">
                <FileText className="h-4 w-4" /> View Resume
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/yashika-nanda-936414321" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-6 py-3.5 rounded-xl font-medium hover:bg-white/15 transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 glass px-6 py-3.5 rounded-xl font-medium hover:bg-white/15 transition">
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-6 bg-accent-gradient rounded-[2rem] blur-2xl opacity-40 animate-glow" />
            <div className="relative glass-card rounded-[2rem] p-3 shadow-elevated">
              <img
                src={heroImg}
                alt="Portrait of Yashika Nanda"
                width={1024}
                height={1280}
                className="w-full h-auto rounded-[1.5rem] object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-4 w-48 animate-float">
                <p className="text-xs text-white/60">Currently</p>
                <p className="text-sm font-semibold">B.Tech AI/ML</p>
                <p className="text-xs text-purple-glow">NSUT · 2028</p>
              </div>
              <div className="absolute -top-5 -right-5 glass-card rounded-2xl px-4 py-3 animate-float [animation-delay:1s]">
                <p className="text-xs text-white/60">Focus</p>
                <p className="text-sm font-semibold">Data &amp; AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
