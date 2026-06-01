import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yashika Nanda — AI/ML & Data Analytics Portfolio" },
      { name: "description", content: "Yashika Nanda — B.Tech AI/ML at NSUT. Portfolio showcasing projects in Data Analytics, Machine Learning, Generative AI and Software Development." },
      { property: "og:title", content: "Yashika Nanda — AI/ML & Data Analytics Portfolio" },
      { property: "og:description", content: "Aspiring Data Analyst and AI/ML enthusiast building data-driven solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Yashika Nanda",
        jobTitle: "AI/ML & Data Analytics Student",
        alumniOf: "Netaji Subhas University of Technology (NSUT)",
        email: "mailto:yashika_ug24@nsut.ac.in",
        sameAs: ["https://www.linkedin.com/in/yashika-nanda-936414321"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
