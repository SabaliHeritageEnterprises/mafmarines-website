"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FLEET } from "@/lib/constants";
import dynamic from "next/dynamic";

const VesselModelViewer = dynamic(() => import("@/components/VesselModelViewer"), { ssr: false });

// Fallback fleet data in case constants isn't ready yet (images only)
const FALLBACK_FLEET = [
  {
    name: "M/V Mafmarines Alpha",
    type: "Ultra-Large Container Vessel",
    length: "400m",
    built: "2021",
    image: "/images/fleet/alpha.jpg",
  },
  {
    name: "M/Y Aura",
    type: "Superyacht Support",
    length: "85m",
    built: "2019",
    image: "/images/fleet/aura.jpg",
  },
  {
    name: "OSV Mafmarines Pioneer",
    type: "Offshore Supply Vessel",
    length: "92m",
    built: "2022",
    image: "/images/fleet/pioneer.jpg",
  },
  {
    name: "M/V Mafmarines Horizon",
    type: "Bulk Carrier",
    length: "225m",
    built: "2018",
    image: "/images/fleet/horizon.jpg",
  },
  {
    name: "M/V Mafmarines Atlas",
    type: "Heavy‑Lift Vessel",
    length: "180m",
    built: "2023",
    image: "/images/fleet/atlas.jpg",
  },
];

export default function FleetDragScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [activeVessel, setActiveVessel] = useState<(typeof FLEET)[number] | null>(null);

  // Use FLEET if available, otherwise fallback
  const fleetData = FLEET && FLEET.length > 0 ? FLEET : FALLBACK_FLEET;

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollerRef.current) return;
    isDown.current = true;
    startX.current = e.clientX;
    scrollStart.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDown.current || !scrollerRef.current) return;
    const dx = e.clientX - startX.current;
    scrollerRef.current.scrollLeft = scrollStart.current - dx;
  };
  const onPointerUp = () => {
    isDown.current = false;
  };

  return (
    <>
      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="drag-scroll flex gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing select-none"
      >
        {fleetData.map((vessel) => {
          const hasVideo = vessel && 'video' in vessel && typeof vessel.video === 'string';

          return (
            <button
              key={vessel.name}
              onClick={() => setActiveVessel(vessel)}
              className="group relative h-[380px] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/10 text-left"
            >
              {/* Background: video (no poster, no fallback image) or static image */}
              {hasVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={vessel.video as string} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={vessel.image}
                  alt={vessel.name}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-xs tracking-widest2 text-teal">{vessel.type}</p>
                <p className="mt-1 font-display text-2xl font-bold text-pearl">{vessel.name}</p>
                <p className="mt-2 font-body text-xs text-pearl-dim">
                  {vessel.length} · Built {vessel.built}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeVessel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-6"
            onClick={() => setActiveVessel(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl border border-white/10 bg-navy-900 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-body text-xs tracking-widest2 text-teal">{activeVessel.type}</p>
                  <p className="font-display text-2xl font-bold text-pearl">{activeVessel.name}</p>
                </div>
                <button onClick={() => setActiveVessel(null)} className="text-pearl-dim hover:text-pearl">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4">
                <VesselModelViewer />
              </div>
              <div className="mt-4 flex gap-8">
                <div>
                  <p className="font-body text-[11px] tracking-widest2 text-gold">LENGTH</p>
                  <p className="font-body text-sm text-pearl-dim">{activeVessel.length}</p>
                </div>
                <div>
                  <p className="font-body text-[11px] tracking-widest2 text-gold">BUILT</p>
                  <p className="font-body text-sm text-pearl-dim">{activeVessel.built}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}