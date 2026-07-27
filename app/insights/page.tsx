import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export const metadata = {
  title: "Insights | Mafmarines Solutions",
  description:
    "News, case studies, and technical intelligence from the bridge of maritime engineering.",
};

const ARTICLES = [
  {
    title: "Decarbonising the Last Mile: Offshore Wind Logistics in 2026",
    tag: "Offshore Engineering",
    date: "June 2026",
  },
  {
    title: "Superyacht Refit Season: What Owners Should Plan For Now",
    tag: "Yacht Support",
    date: "May 2026",
  },
  {
    title: "Red Sea Rerouting: A Year of Cargo Corridor Adjustments",
    tag: "Cargo Logistics",
    date: "April 2026",
  },
  {
    title: "FuelEU Maritime: A Practical Compliance Checklist for Operators",
    tag: "Marine Consultancy",
    date: "March 2026",
  },
  {
    title: "Subsea Cable Installation: Lessons from the Baltic",
    tag: "Offshore Engineering",
    date: "February 2026",
  },
  {
    title: "Crew Welfare Standards Are Changing — Here's What to Expect",
    tag: "Yacht Support",
    date: "January 2026",
  },
];

export default function InsightsPage() {
  return (
    <div>
      {/* HERO — with deepsea video background */}
      <section className="relative flex h-[45vh] items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.insightsHero}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        >
          <source
            src="https://res.cloudinary.com/tgvfx3bf/video/upload/v1785162445/deepsea_yqssgl.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails */}
          <Image
            src={IMAGES.insightsHero}
            alt="Open ocean and deep sea"
            fill
            priority
            className="object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="font-body text-xs tracking-widest2 text-teal">INSIGHTS</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-pearl">
            News &amp; Technical Intelligence
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="group rounded-2xl border border-white/10 bg-navy-800/40 p-6 hover:border-teal/40 transition-colors"
            >
              <p className="font-body text-[11px] tracking-widest2 text-gold">{article.tag}</p>
              <h2 className="mt-3 font-display text-lg text-pearl group-hover:text-teal transition-colors">
                {article.title}
              </h2>
              <p className="mt-4 font-body text-xs text-pearl-dim">{article.date}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}