import aboutImg from "@/assets/yashika-about.jpg";
import selfieAsset from "@/assets/yashika-selfie.png.asset.json";

export function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-gradient rounded-3xl blur-2xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img src={aboutImg} alt="Yashika working" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover aspect-[4/5]" />
            </div>
            {/* Small selfie avatar badge */}
            <div className="absolute -top-5 -left-5 h-20 w-20 md:h-24 md:w-24 rounded-full p-1 bg-accent-gradient shadow-glow animate-float">
              <img src={selfieAsset.url} alt="Yashika Nanda" className="h-full w-full rounded-full object-cover border-2 border-white" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 shadow-elevated max-w-[180px]">
              <p className="text-3xl font-bold gradient-text">NSUT</p>
              <p className="text-xs text-muted-foreground mt-1">B.Tech ECE · AI &amp; ML Specialization</p>
            </div>
          </div>

          <div>
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Engineering meets <span className="gradient-text">intelligence.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              I am pursuing B.Tech in Electronics and Communication Engineering with specialization in Artificial Intelligence and Machine Learning at NSUT.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My interests include Data Analytics, Machine Learning, Generative AI, Business Intelligence, and Software Development. I enjoy building practical solutions using data and technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Data Analytics", "Machine Learning", "Generative AI", "Business Intelligence"].map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
