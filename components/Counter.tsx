"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsub = springValue.on("change", (v) => setDisplay(Math.floor(v)));
    return unsub;
  }, [springValue]);

  return (
    <div className="text-center">
      <p ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gold">
        {display}
        {suffix}
      </p>
      <p className="mt-2 font-body text-xs tracking-widest2 text-pearl-dim">{label}</p>
    </div>
  );
}
