import selfieAsset from "@/assets/yashika-selfie.png.asset.json";

export function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 bg-purple-glow/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left visual side — small selfie + stat cards on a soft gradient panel */}
          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-secondary via-white to-secondary/40 border border-border p-10 md:p-14 shadow-elevated overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 bg-accent/15 rounded-full blur-3xl" />

              {/* Small circular selfie ~1/5 of panel */}
              <div className="relative mx-auto h-28 w-28 md:h-32 md:w-32 rounded-full p-1 bg-accent-gradient shadow-glow animate-float">
                <img
                  src={selfieAsset.url}
                  alt="Yashika Nanda"
                  className="h-full w-full rounded-full object-cover border-2 border-white"
                />
              </div>

              <div className="relative mt-6 text-center">
                <p className="font-display text-xl font-bold text-navy-deep">Yashika Nanda</p>
                <p className="text-sm text-muted-foreground mt-1">B.Tech · AI &amp; ML · NSUT</p>
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white border border-border p-4">
                  <p className="text-2xl font-bold gradient-text">NSUT</p>
                  <p className="text-xs text-muted-foreground mt-1">Delhi</p>
                </div>
                <div className="rounded-2xl bg-white border border-border p-4">
                  <p className="text-2xl font-bold gradient-text">2028</p>
                  <p className="text-xs text-muted-foreground mt-1">Graduating</p>
                </div>
                <div className="rounded-2xl bg-white border border-border p-4">
                  <p className="text-2xl font-bold gradient-text">ECE</p>
                  <p className="text-xs text-muted-foreground mt-1">+ AI/ML Spec.</p>
                </div>
                <div className="rounded-2xl bg-white border border-border p-4">
                  <p className="text-2xl font-bold gradient-text">7.6</p>
                  <p className="text-xs text-muted-foreground mt-1">Current CGPA</p>
                </div>
              </div>
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
