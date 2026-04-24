"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { submitEndorsement } from "@/app/endorse/actions";

export default function EndorsementForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    try {
      await submitEndorsement(formData);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to log endorsement.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border-brutal p-12 flex flex-col items-center justify-center text-center gap-6 bg-white/5 animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto w-full mt-12">
        <CheckCircle2 className="w-16 h-16 text-accent" />
        <h2 className="text-3xl font-header uppercase">Endorsement Received</h2>
        <p className="font-mono text-sm text-foreground/50">Your verification has been logged into the system archives.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 font-mono text-[10px] text-accent hover:underline uppercase tracking-widest"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase text-foreground/40">Full Name</label>
          <input 
            required
            name="name"
            type="text" 
            placeholder="ENTER NAME"
            disabled={loading}
            className="bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-accent outline-none transition-colors disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase text-foreground/40">Professional Role / Relation</label>
          <input 
            required
            name="role"
            type="text" 
            placeholder="E.G. SENIOR DEV @ GOOGLE"
            disabled={loading}
            className="bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-accent outline-none transition-colors disabled:opacity-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] uppercase text-foreground/40">Endorsement Message</label>
        <textarea 
          required
          name="message"
          rows={6}
          placeholder="DESCRIBE YOUR EXPERIENCE OR VERIFY SKILLS..."
          disabled={loading}
          className="bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-accent outline-none transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {error && (
        <div className="text-red-500 font-mono text-[10px] uppercase animate-pulse">
          [ERROR] // {error}
        </div>
      )}

      <button 
        type="submit"
        disabled={loading}
        className="group flex items-center justify-center gap-4 border-brutal p-6 bg-white text-black hover:bg-accent transition-all disabled:opacity-50"
      >
        <span className="font-header text-xl uppercase tracking-tighter">
          {loading ? "TRANSMITTING..." : "Log Endorsement"}
        </span>
        {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
      </button>
    </form>
  );
}
