"use client";

import { useState } from "react";
import ContactMap from "@/components/ContactMap";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "Vessel Inspection & Surveying",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-36 pb-28">
      <section className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs tracking-widest2 text-gold">CONTACT</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-pearl max-w-xl">
          Reach the desk that handles your ocean.
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-navy-800/40 p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <p className="font-display text-2xl text-gold">Request received</p>
                <p className="mt-2 font-body text-sm text-pearl-dim max-w-xs">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}
                <div>
                  <label className="font-body text-xs tracking-widest2 text-pearl-dim">NAME</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 font-body text-sm text-pearl outline-none focus:border-gold/60"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest2 text-pearl-dim">EMAIL</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 font-body text-sm text-pearl outline-none focus:border-gold/60"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest2 text-pearl-dim">INQUIRY TYPE</label>
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 font-body text-sm text-pearl outline-none focus:border-gold/60"
                  >
                    <option>Vessel Inspection & Surveying</option>
                    <option>Commercial Diving Operations</option>
                    <option>Subsea Engineering & Construction</option>
                    <option>Salvage & Emergency Response</option>
                    <option>Specialized Marine Services</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest2 text-pearl-dim">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 font-body text-sm text-pearl outline-none focus:border-gold/60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-gold py-3 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* MAP */}
          <div>
            <ContactMap />
            <p className="mt-4 font-body text-xs text-pearl-dim">
              Hover any office marker for its full address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}