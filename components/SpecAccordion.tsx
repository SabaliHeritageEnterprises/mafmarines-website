"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SpecAccordion({
  specs,
}: {
  specs: readonly { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between bg-navy-800/60 px-6 py-4"
      >
        <span className="font-display text-sm tracking-wide text-pearl">
          Technical Specifications
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gold transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-navy-900 px-6 py-4">
                  <p className="font-body text-[11px] tracking-widest2 text-teal">{spec.label}</p>
                  <p className="mt-1 font-display text-base text-pearl">{spec.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
