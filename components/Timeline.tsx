"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const MILESTONES = [
  { year: 1988, title: "Founded in London", copy: "Meridian opens as a single-office ship-agency house on the Thames." },
  { year: 1997, title: "First Offshore Contract", copy: "Awarded structural engineering work on a North Sea platform." },
  { year: 2004, title: "Dubai Office Opens", copy: "Gulf expansion begins to serve the region's growing yacht market." },
  { year: 2011, title: "Singapore Hub", copy: "Asia-Pacific logistics hub established to serve trans-Pacific trade lanes." },
  { year: 2018, title: "Fleet of 50", copy: "Contracted vessel network surpasses fifty ships across four continents." },
  { year: 2023, title: "Decarbonisation Practice", copy: "Dedicated ESG and fuel-efficiency consultancy division launches." },
];

export default function Timeline() {
  const [active, setActive] = useState(MILESTONES.length - 1);

  return (
    <div>
      <div className="relative">
        <input
          type="range"
          min={0}
          max={MILESTONES.length - 1}
          value={active}
          onChange={(e) => setActive(Number(e.target.value))}
          className="w-full h-1 appearance-none rounded-full bg-white/10 accent-gold cursor-pointer"
        />
        <div className="mt-3 flex justify-between">
          {MILESTONES.map((m, i) => (
            <button
              key={m.year}
              onClick={() => setActive(i)}
              className="font-body text-[11px] tracking-wide transition-colors"
              style={{ color: i === active ? "#D4AF37" : "#C7D1DC80" }}
            >
              {m.year}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 rounded-xl border border-white/10 bg-navy-800/60 p-6"
      >
        <p className="font-display text-3xl font-bold text-gold">{MILESTONES[active].year}</p>
        <p className="mt-2 font-display text-lg text-pearl">{MILESTONES[active].title}</p>
        <p className="mt-2 font-body text-sm text-pearl-dim leading-relaxed">
          {MILESTONES[active].copy}
        </p>
      </motion.div>
    </div>
  );
}
