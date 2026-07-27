"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TiltCard({
  href,
  title,
  description,
  index,
}: {
  href: string;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: py * -10, y: px * 10 });
  };

  const reset = () => setRotate({ x: 0, y: 0 });

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ perspective: 1000 }}
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800/80 to-navy-900/80 p-8 backdrop-blur-sm hover:border-gold/40 transition-colors duration-300"
      >
        <span className="font-display text-xs tracking-widest2 text-gold/70">
          0{index + 1}
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-pearl group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-pearl-dim">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-body text-xs tracking-widest2 text-teal">
          EXPLORE
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-teal/0 group-hover:from-gold/[0.04] group-hover:to-teal/[0.04] transition-all duration-500" />
      </motion.div>
    </Link>
  );
}
