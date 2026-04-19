"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Aerodynamics Prototype",
    category: "Industrial Design",
    image: "/project-1.png",
    span: "md:col-span-12",
  },
  {
    id: "02",
    title: "Cockpit Interface",
    category: "UI/UX Engineering",
    image: "/project-2.png",
    span: "md:col-span-7",
  },
  {
    id: "03",
    title: "Thermal Braking",
    category: "Technical Visualization",
    image: "/project-3.png",
    span: "md:col-span-5",
  },
];

function ProjectItem({ project }: { project: typeof projects[0] }) {
  return (
    <div className={`group relative overflow-hidden border-brutal bg-black cursor-crosshair ${project.span}`}>
      {/* Detail Label (Top Left) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-0 pointer-events-none">
        <span className="font-mono text-[10px] text-accent font-bold bg-black px-2 mb-1">
          {project.id}
        </span>
        <span className="font-mono text-[8px] text-white/40 uppercase tracking-[0.2em] bg-black/80 px-2 py-1">
          {project.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[16/10] md:aspect-auto md:h-[60vh] overflow-hidden transition-all duration-300">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale transition-all duration-150 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-150" />
      </div>

      {/* Ticker-tape Marquee (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-30 pointer-events-none translate-y-full group-hover:translate-y-0 transform transition-transform border-t-brutal">
        <div className="flex overflow-hidden whitespace-nowrap py-3">
          <div className="animate-marquee flex gap-4 pr-4">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-header text-xl md:text-2xl text-black uppercase tracking-tighter">
                {project.title} — VIEW DETAILS //
              </span>
            ))}
          </div>
          <div className="animate-marquee flex gap-4 pr-4" aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-header text-xl md:text-2xl text-black uppercase tracking-tighter">
                {project.title} — VIEW DETAILS //
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="py-20">
      <div className="px-6 mb-12 flex justify-between items-end border-b-brutal pb-8">
        <div>
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-2">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-header leading-none">PROJECT <br /> SHOWCASE</h2>
        </div>
        <div className="hidden md:block text-right">
          <span className="font-mono text-[10px] text-foreground/40 uppercase">Filter: High Performance</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-brutal bg-border-brutal overflow-hidden">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
