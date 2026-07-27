"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HOVER_DELAY = 200;

export default function StickyMegaMenu() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenIndex(null);
  }, [pathname]);

  const handleEnter = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpenIndex(idx), HOVER_DELAY);
  };
  const handleLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300",
        scrolled ? "pt-2" : "pt-5"
      )}
    >
      <nav
        className={cn(
          "w-[94%] max-w-7xl rounded-2xl border border-white/10 bg-navy-900/60 backdrop-blur-xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <div className="flex items-center justify-between px-6">
          <Link href="/" className="flex items-baseline gap-2 shrink-0">
            <span className="font-display text-xl font-bold tracking-widest2 text-pearl">
              {COMPANY.name}
            </span>
            <span className="hidden sm:inline font-serif italic text-xs text-gold/70">
              marine group
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, idx) => {
              const active = isActive(link.href);
              const hasChildren = "children" in link && link.children;
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleEnter(idx)}
                  onMouseLeave={() => hasChildren && handleLeave()}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 font-body text-sm tracking-wide text-pearl-dim hover:text-pearl transition-colors py-2"
                  >
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulseGlow" />
                    )}
                    {link.label}
                    {hasChildren && (
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" strokeWidth={1.5} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {hasChildren && openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-xl border border-white/10 bg-navy-900/90 backdrop-blur-2xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group rounded-lg border border-white/5 p-4 hover:border-gold/40 hover:bg-white/5 transition-all"
                            >
                              <p className="font-display text-sm text-pearl group-hover:text-gold transition-colors">
                                {child.label}
                              </p>
                              <p className="mt-1 font-body text-xs text-pearl-dim">
                                Explore capability →
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            {/* 👇 Desktop Client Portal button – now points to the portal dashboard */}
            <Link
              href="/portal/dashboard"
              className="hidden lg:inline-flex items-center rounded-full border border-gold/60 bg-gold/10 px-5 py-2 font-body text-xs tracking-widest2 text-gold shadow-gold hover:bg-gold/20 transition-all"
            >
              Client Portal
            </Link>
            <button
              className="lg:hidden text-pearl"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden px-6"
            >
              <ul className="flex flex-col gap-1 py-4 border-t border-white/10 mt-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 font-body text-sm text-pearl-dim hover:text-gold"
                    >
                      {link.label}
                    </Link>
                    {"children" in link && link.children && (
                      <ul className="pl-4 border-l border-white/10 ml-1 mb-2">
                        {link.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block py-1.5 font-body text-xs text-pearl-dim/80 hover:text-teal"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {/* 👇 Mobile Client Portal button – now points to the portal dashboard */}
                <Link
                  href="/portal/dashboard"
                  className="mt-2 text-center rounded-full border border-gold/60 bg-gold/10 px-5 py-2 font-body text-xs tracking-widest2 text-gold"
                >
                  Client Portal
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}