import Image from "next/image";
import FleetDragScroll from "@/components/FleetDragScroll";
import { IMAGES } from "@/lib/constants";

export const metadata = { title: "The Fleet | Meridian Marine Group" };

export default function FleetPage() {
  return (
    <div>
      <section className="relative flex h-[45vh] items-center overflow-hidden">
        <Image
          src={IMAGES.fleetHero}
          alt="Fleet silhouettes at sunset"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="font-body text-xs tracking-widest2 text-teal">THE FLEET</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-pearl">
            Five vessels. Every ocean.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-8 font-body text-sm text-pearl-dim">
          Drag to explore, or click a vessel to rotate its model in 3D.
        </p>
        <FleetDragScroll />
      </section>
    </div>
  );
}
