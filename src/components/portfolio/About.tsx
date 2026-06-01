import selfieAsset from "@/assets/yashika-selfie.png.asset.json";

export function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 bg-purple-glow/10 rounded-full blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            {/* Small selfie avatar */}
            <div className="h-48 w-48 rounded-full p-[2px] bg-accent-gradient shadow-glow shrink-0">
              <img
                src={selfieAsset.url}
                alt="Yashika Nanda"
                className="h-full w-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">About</span>
          </div>

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
    </section>
  );
}
