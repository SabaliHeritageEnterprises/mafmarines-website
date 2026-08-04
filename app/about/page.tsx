import Timeline from "@/components/Timeline";
import Counter from "@/components/Counter";
import { IMAGES } from "@/lib/constants";

export const metadata = {
  title: "About Us | Mafmarines Solutions",
  description:
    "Four decades of engineering leadership — from a single survey vessel to a global maritime engineering house.",
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-28">
      <section className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs tracking-widest2 text-gold">ABOUT US</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-pearl max-w-2xl">
          Four decades of engineering leadership.
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-xl text-pearl mb-6">Our Milestones</h2>
            <Timeline />
            <p className="mt-6 font-body text-sm text-pearl-dim max-w-sm">
              From a single survey vessel to a global engineering house — we've built
              our reputation on technical excellence, safety, and a relentless focus
              on the client's operational reality.
            </p>
          </div>

          {/* Video — no static image */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden border border-white/10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/tgvfx3bf/video/upload/v1785852631/WhatsApp_Video_2026-08-03_at_07.12.39_etnl4r.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
            <p className="absolute bottom-6 left-6 font-serif italic text-pearl-dim text-sm max-w-xs">
              "The tide waits for no schedule — we simply learn to read it better than anyone else."
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          <Counter value={37} suffix="+" label="Years of Engineering" />
          <Counter value={220} suffix="+" label="Vessels Designed / Operated" />
          <Counter value={140} suffix="+" label="Global Ports Supported" />
          <Counter value={300} suffix="+" label="Clients Served" />
        </div>
      </section>
    </div>
  );
}