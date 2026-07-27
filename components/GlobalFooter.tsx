import Link from "next/link";
import { COMPANY, NAV_LINKS, OFFICES } from "@/lib/constants";

export default function GlobalFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-navy-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-lg tracking-widest2 text-pearl">{COMPANY.shortName}</p>
          <p className="mt-3 font-serif italic text-sm text-pearl-dim/80 max-w-[220px]">
            {COMPANY.taglineFooter}
          </p>
        </div>

        <div>
          <p className="font-body text-xs tracking-widest2 text-gold mb-4">NAVIGATE</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-body text-sm text-pearl-dim hover:text-pearl transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-widest2 text-gold mb-4">GLOBAL OFFICES</p>
          <ul className="space-y-2">
            {OFFICES.map((o) => (
              <li key={o.city} className="font-body text-sm text-pearl-dim">
                {o.city}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-widest2 text-gold mb-4">CLIENT PORTAL</p>
          <p className="font-body text-sm text-pearl-dim mb-4">
            Existing clients can track vessels, invoices, and service requests.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-teal/60 px-4 py-2 font-body text-xs tracking-widest2 text-teal hover:bg-teal/10 transition-all"
          >
            Sign In →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center font-body text-xs text-pearl-dim/60">
        © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.
      </div>
    </footer>
  );
}