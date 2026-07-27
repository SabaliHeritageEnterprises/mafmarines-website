import TiltCard from "@/components/TiltCard";
import { SERVICES } from "@/lib/constants";

export const metadata = {
  title: "Our Services | Mafmarines Solutions",
  description:
    "Engineered for every stage of a vessel's working life — yacht support, cargo logistics, offshore engineering, and marine consultancy.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* HERO — with video background (no static image) */}
      <section className="relative flex h-[60vh] items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source
            src="https://res.cloudinary.com/tgvfx3bf/video/upload/v1785162436/survey_eorj4z.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16">
          <p className="font-body text-xs tracking-widest2 text-teal">OUR SERVICES</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-pearl max-w-3xl">
            Engineered for every stage of a vessel's working life
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
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
    </div>
  );
}