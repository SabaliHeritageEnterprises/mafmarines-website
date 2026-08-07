"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Send, Loader2 } from "lucide-react";

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full rounded-2xl border border-white/10 bg-navy-800/40 animate-pulse" />
  ),
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, inquiry, message } = formData;
    const whatsappMessage = `
      *New Contact Request*

      *Name:* ${name}
      *Email:* ${email}
      *Inquiry Type:* ${inquiry}
      *Message:*
      ${message}
    `;

    const phoneNumber = "254740089014";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
    setLoading(false);
  };

  return (
    <div className="pt-36 pb-28">
      <section className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs tracking-widest2 text-gold">CONTACT</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-pearl max-w-xl">
          Reach the desk that handles your ocean.
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl border border-white/10 bg-navy-800/40 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full rounded-full bg-[#25D366] py-3 font-body text-xs tracking-widest2 text-white hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

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