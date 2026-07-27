import SplitHeadline from "@/components/SplitHeadline";
import TiltCard from "@/components/TiltCard";
import Counter from "@/components/Counter";
import { IMAGES, SERVICES, COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* HERO — with Cloudinary video background (no image fallback) */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source
            src="https://res.cloudinary.com/tgvfx3bf/video/upload/v1785162431/underwater_vsf5cf.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
          <p className="font-body text-xs tracking-widest3 text-teal">
            MARITIME SERVICES &amp; SOLUTIONS
          </p>
          <SplitHeadline
            text={COMPANY.tagline}
            className="mt-6 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-wide text-pearl text-balance"
          />
          <p className="mt-8 max-w-xl font-serif italic text-lg text-pearl-dim">
            From underwater inspections and commercial diving to salvage response and subsea engineering — 
            we deliver precision, safety, and reliability across every maritime operation.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="/services"
              className="rounded-full bg-gold px-7 py-3 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-3 font-body text-xs tracking-widest2 text-pearl hover:border-teal/60 hover:text-teal transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* STATS COUNTERS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter value={37} suffix="+" label="Years of Experience" />
          <Counter value={500} suffix="+" label="Inspections Completed" />
          <Counter value={140} suffix="+" label="Global Ports Served" />
          <Counter value={5} label="Core Services" />
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="font-body text-xs tracking-widest2 text-gold">CAPABILITIES</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-pearl">
              Comprehensive maritime solutions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <TiltCard
              key={service.slug}
              href={`/services/${service.slug}`}
              title={service.name}
              description={service.short}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}