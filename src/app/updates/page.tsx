import React from "react";
import PageReveal from "@/components/PageReveal";

export default function UpdatesPage() {
  const updates = [
    {
      date: "2026.04.24",
      status: "STABLE",
      tag: "SYSTEM",
      message: "Successfully integrated Supabase backend for project inquiries. Connection status: OPERATIONAL."
    },
    {
      date: "2026.04.23",
      status: "OPTIMIZING",
      tag: "UI/UX",
      message: "Refining scroll physics and mechanical transition durations across all primary viewports."
    },
    {
      date: "2026.04.20",
      status: "DEPLOYED",
      tag: "PROJECT",
      message: "V1.0 of the Brutalist Motorsport Portfolio is now live on the production server."
    }
  ];

  return (
    <PageReveal>
      <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase animate-pulse">
            [DEVELOPMENT_LOGS]
          </span>
          <h1 className="text-5xl md:text-8xl font-header leading-[0.9] uppercase tracking-tighter">
            System <br /> <span className="text-accent underline decoration-1 underline-offset-8">Updates.</span>
          </h1>
        </div>

        <div className="mt-20 border-t border-white/10">
          {updates.map((update, i) => (
            <div 
              key={i} 
              className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-6 md:gap-20 items-start hover:bg-white/5 transition-all px-4 -mx-4"
            >
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span className="font-mono text-xs text-foreground/40">{update.date}</span>
                <span className={`font-mono text-[10px] px-2 py-0.5 border w-fit ${
                  update.status === "STABLE" ? "border-green-500 text-green-500" : 
                  update.status === "OPTIMIZING" ? "border-accent text-accent" : 
                  "border-white/40 text-white/40"
                }`}>
                  {update.status}
                </span>
              </div>
              
              <div className="flex flex-col gap-4 flex-grow">
                <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">[{update.tag}]</span>
                <p className="font-mono text-sm md:text-lg leading-relaxed text-foreground/80 max-w-3xl">
                  {update.message}
                </p>
              </div>

              <div className="hidden md:block">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/20 group-hover:text-accent">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="font-mono text-[10px] text-foreground/20 uppercase hover:text-accent transition-colors">
            --- LOAD ARCHIVED LOGS ---
          </button>
        </div>
      </div>
    </section>
    </PageReveal>
  );
}
