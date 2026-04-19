import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      
      <div className="px-6 py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 border-brutal group">
            {[
              { label: "01", title: "Engineering", desc: "Solid technical foundations." },
              { label: "02", title: "Aesthetics", desc: "Aggressive visual language." },
              { label: "03", title: "Motion", desc: "Buttery smooth transitions." },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`p-8 border-brutal hover:bg-accent hover:text-black transition-all cursor-pointer group/item ${
                  i === 1 ? "md:border-x-brutal" : ""
                }`}
              >
                <span className="font-mono text-[10px] mb-4 block opacity-50 group-hover/item:opacity-100">{item.label}</span>
                <h3 className="text-2xl font-header mb-2 uppercase">{item.title}</h3>
                <p className="font-mono text-[10px] uppercase opacity-40 group-hover/item:opacity-80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-20">
          <ProjectShowcase />
        </ScrollReveal>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 font-header text-[20vw] leading-none select-none -mr-[5%] mt-[5%] blur-sm">
          08
        </div>
      </div>
    </div>
  );
}
