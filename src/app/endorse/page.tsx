import React from "react";
import PageReveal from "@/components/PageReveal";
import EndorsementList from "@/components/EndorsementList";
import EndorsementForm from "@/components/EndorsementForm";

export default function EndorsePage() {
  return (
    <PageReveal>
      <section className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-20">
          
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">
              [COMMUNITY_VERIFICATION]
            </span>
            <h1 className="text-5xl md:text-8xl font-header leading-[0.9] uppercase tracking-tighter">
              Endorse <br /> <span className="text-accent underline decoration-1 underline-offset-8">Work.</span>
            </h1>
            <p className="font-mono text-sm text-foreground/60 max-w-md mt-4">
              Leave a message or verify technical excellence. Your endorsement will be showcased on the primary system feed.
            </p>
          </div>

          <EndorsementList />

          <div className="flex flex-col gap-4 text-center items-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-header uppercase">Add Your Voice</h2>
            <p className="font-mono text-xs text-foreground/40">Contribute to the collective verification of the system.</p>
          </div>

          <EndorsementForm />

        </div>
      </section>
    </PageReveal>
  );
}

