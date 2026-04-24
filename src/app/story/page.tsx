import React from "react";
import Image from "next/image";
import PageReveal from "@/components/PageReveal";

export default function StoryPage() {
  const storySections = [
    {
      year: "2020",
      title: "The Genesis",
      content: "Starting with a raw fascination for how machines interact with humans. I began dismantling interfaces to understand the underlying mechanics of digital experience.",
      image: "/project-1.jpeg", // Reusing existing assets for now
      align: "left"
    },
    {
      year: "2022",
      title: "Precision Engineering",
      content: "Transitioned into high-performance web development. Focused on the intersection of brutalist aesthetics and buttery-smooth technical execution.",
      image: "/project-2.jpeg",
      align: "right"
    },
    {
      year: "2023",
      title: "Mechanical Mastery",
      content: "Mastering the physics of the web. Implementing motion systems that feel heavy, mechanical, and intentional. Every pixel must serve a purpose.",
      image: "/project-3.jpeg",
      align: "left"
    },
    {
      year: "2024",
      title: "The Present",
      content: "Now engineering digital landscapes for those who demand performance over fluff. Raw, mechanical, and uncompromising.",
      image: "/project-1.jpeg",
      align: "right"
    },
    {
      year: "2025+",
      title: "The Vision",
      content: "Pushing the boundaries of the digital/physical divide. Creating experiences that don't just exist on screens, but feel like tangible machinery.",
      image: "/project-2.jpeg",
      align: "left"
    }
  ];

  return (
    <PageReveal>
      <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">
              [THE_JOURNEY]
            </span>
            <h1 className="text-5xl md:text-8xl font-header leading-[0.9] uppercase tracking-tighter">
              The <br /> <span className="text-accent underline decoration-1 underline-offset-8">Narrative.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-40 mt-20">
            {storySections.map((section, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${section.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-24 items-center`}
              >
                <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-[3/4] border-brutal overflow-hidden group">
                  <Image 
                    src={section.image}
                    alt={section.title}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-black font-mono text-xs px-2 py-1">
                    YEAR // {section.year}
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <span className="font-mono text-accent text-[10px] tracking-widest uppercase">Section {i + 1}</span>
                  <h2 className="text-4xl md:text-6xl font-header uppercase leading-none">{section.title}</h2>
                  <p className="font-mono text-sm text-foreground/60 leading-relaxed max-w-md">
                    {section.content}
                  </p>
                  <div className="w-20 h-[1px] bg-accent/30 mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
