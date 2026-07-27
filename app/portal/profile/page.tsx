"use client";

import { useState, useEffect } from "react";
import { User, Mail, Building, Phone, Save, Lock } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("portal_user");
    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      setForm({
        name: parsed.name || "",
        email: parsed.email || "",
        company: parsed.company || "",
        phone: parsed.phone || "+254 740 089 014",
        role: parsed.role || "Client",
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = { ...user, ...form };
    localStorage.setItem("portal_user", JSON.stringify(updated));
    alert("Profile updated successfully!");
  };

  if (!user) return null;

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-2xl font-bold text-pearl mb-6">Profile Settings</h1>

      <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-6">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
          <div className="h-16 w-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center">
            <User className="h-8 w-8 text-gold" />
          </div>
          <div>
            <h2 className="font-display text-xl text-pearl">{form.name}</h2>
            <p className="font-body text-sm text-pearl-dim">{form.role} · {form.company}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-xs tracking-widest2 text-pearl-dim">FULL NAME</label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-navy-950 px-4 py-3 pl-10 font-body text-sm text-pearl outline-none focus:border-gold/60 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-widest2 text-pearl-dim">EMAIL</label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-navy-950 px-4 py-3 pl-10 font-body text-sm text-pearl outline-none focus:border-gold/60 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-widest2 text-pearl-dim">COMPANY</label>
              <div className="relative mt-2">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-navy-950 px-4 py-3 pl-10 font-body text-sm text-pearl outline-none focus:border-gold/60 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-widest2 text-pearl-dim">PHONE</label>
              <div className="relative mt-2">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-navy-950 px-4 py-3 pl-10 font-body text-sm text-pearl outline-none focus:border-gold/60 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-2.5 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" /> Save Changes
            </button>
            <button className="rounded-full border border-white/20 px-6 py-2.5 font-body text-xs tracking-widest2 text-pearl hover:border-white/40 transition-colors flex items-center gap-2">
              <Lock className="h-4 w-4" /> Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}