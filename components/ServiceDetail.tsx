import Image from "next/image";
import { Check, Shield, Clock, Globe, Award, ArrowRight } from "lucide-react";
import SpecAccordion from "@/components/SpecAccordion";
import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";

export default function ServiceDetail({ slug }: { slug: (typeof SERVICES)[number]["slug"] }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <div>
      {/* HERO */}
      <section className="relative flex h-[55vh] items-end overflow-hidden">
        <Image
          src={service.hero}
          alt={service.name}
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="font-body text-xs tracking-widest2 text-teal">SERVICE</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-pearl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl font-body text-pearl-dim">{service.short}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-20">
        {/* OVERVIEW & STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-pearl">Overview</h2>
            <p className="mt-4 font-body text-pearl-dim leading-relaxed">
              {service.overview || service.long}
            </p>
          </div>
          <div className="space-y-4">
            {service.stats?.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-navy-800/40 p-4 text-center">
                <p className="font-display text-3xl text-gold">{stat.value}</p>
                <p className="font-body text-xs text-pearl-dim">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        {service.benefits && service.benefits.length > 0 && (
          <div>
            <h2 className="font-display text-2xl text-pearl mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-800/30 p-4">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-pearl-dim">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROCESS */}
        {service.process && service.process.length > 0 && (
          <div>
            <h2 className="font-display text-2xl text-pearl mb-6">Our Process</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/30" />
              <div className="space-y-8">
                {service.process.map((step) => (
                  <div key={step.step} className="relative pl-12">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-display text-sm">
                      {step.step.charAt(0)}
                    </div>
                    <h3 className="font-display text-lg text-pearl">{step.step}</h3>
                    <p className="font-body text-sm text-pearl-dim">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FEATURES & SPECS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl text-pearl mb-6">Capabilities</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-800/30 p-4">
                  <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-pearl-dim">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SpecAccordion specs={service.specs} />
          </div>
        </div>

        {/* GALLERY */}
        {service.gallery && service.gallery.length > 0 && (
          <div>
            <h2 className="font-display text-2xl text-pearl mb-6">Visual Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={img}
                    alt={`${service.name} gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-navy-800/80 to-navy-900/80 p-8 text-center">
          <h3 className="font-display text-2xl text-pearl">Ready to get started?</h3>
          <p className="mt-2 font-body text-pearl-dim max-w-xl mx-auto">
            Contact our team today and let's discuss how we can support your next project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gold px-8 py-3 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights"
              className="rounded-full border border-white/20 px-8 py-3 font-body text-xs tracking-widest2 text-pearl hover:border-teal/60 hover:text-teal transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}