import React from "react";
import { getEndorsements } from "@/app/endorse/actions";

interface Endorsement {
  id: string;
  name: string;
  role: string;
  message: string;
  created_at: string;
}

export default async function EndorsementList() {
  const endorsements = await getEndorsements() as unknown as Endorsement[];

  if (endorsements.length === 0) {
    return (
      <div className="py-10 text-center border-brutal bg-white/5">
        <span className="font-mono text-xs text-foreground/40 uppercase">No active endorsements in the mainframe.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[1px] flex-grow bg-white/10" />
        <span className="font-mono text-[10px] text-accent uppercase tracking-widest">Active Testimonials</span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {endorsements.map((endorsement) => (
          <div key={endorsement.id} className="border-brutal p-6 bg-white/[0.02] flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            
            <p className="font-mono text-xs text-foreground/80 leading-relaxed italic">
              &quot;{endorsement.message}&quot;
            </p>
            
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1">
              <span className="font-header text-sm text-accent uppercase">{endorsement.name}</span>
              <span className="font-mono text-[8px] text-foreground/40 uppercase tracking-widest">{endorsement.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
