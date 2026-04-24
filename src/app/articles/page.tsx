import React from "react";
import PageReveal from "@/components/PageReveal";

export default function ArticlesPage() {
  const articles = [
    {
      date: "2026.04.15",
      readTime: "5 MIN",
      category: "DESIGN",
      title: "The Industrial Aesthetic in Digital Product Design",
      desc: "Exploring how heavy mechanical influences are reshaping the way we think about user interfaces and digital interactions."
    },
    {
      date: "2026.03.28",
      readTime: "8 MIN",
      category: "ENGINEERING",
      title: "High Performance Web Architectures",
      desc: "Deep dive into the technical systems required to build buttery smooth, hardware-accelerated web experiences."
    },
    {
      date: "2026.02.12",
      readTime: "4 MIN",
      category: "PHILOSOPHY",
      title: "Less but Better: A Brutalist Approach",
      desc: "Why stripping away the fluff and focusing on raw functionality leads to more impactful digital products."
    }
  ];

  return (
    <PageReveal>
      <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">
            [THOUGHTS_AND_INSIGHTS]
          </span>
          <h1 className="text-5xl md:text-8xl font-header leading-[0.9] uppercase tracking-tighter">
            Thought <br /> <span className="text-accent underline decoration-1 underline-offset-8">Journal.</span>
          </h1>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div 
              key={i} 
              className="group border-brutal p-8 flex flex-col gap-8 hover:bg-accent hover:text-black transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] uppercase opacity-50 group-hover:opacity-100">{article.date}</span>
                <span className="font-mono text-[10px] uppercase border border-current px-2 py-0.5">{article.category}</span>
              </div>
              
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-header uppercase leading-none group-hover:tracking-tight transition-all">
                  {article.title}
                </h2>
                <p className="font-mono text-[10px] uppercase opacity-40 group-hover:opacity-80 leading-relaxed">
                  {article.desc}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-current flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest">{article.readTime} READ</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </PageReveal>
  );
}
