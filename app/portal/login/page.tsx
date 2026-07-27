"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  Anchor, 
  Ship, 
  FileText, 
  ClipboardList, 
  Users, 
  Shield, 
  Globe, 
  Clock,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Activity,
  Award,
  MapPin,
  AlertCircle        // 👈 This was missing
} from "lucide-react";

export default function PortalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (email === "demo@mafmarines.com" && password === "demo123") {
      localStorage.setItem("portal_token", "demo-token-12345");
      localStorage.setItem("portal_user", JSON.stringify({
        name: "John Client",
        email: "demo@mafmarines.com",
        company: "Global Shipping Co.",
        role: "Client",
      }));
      await new Promise((resolve) => setTimeout(resolve, 800));
      router.push("/portal/dashboard");
    } else {
      setError("Invalid email or password. Try demo@mafmarines.com / demo123");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, #00B4D8 0%, transparent 50%),
          radial-gradient(circle at 50% 100%, #D4AF37 0%, transparent 40%)
        `,
      }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)]">
          
          {/* LEFT COLUMN – Portal Info */}
          <div className="order-2 lg:order-1">
            {/* Brand */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Anchor className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold tracking-widest text-pearl">PORTAL</h1>
                <p className="font-body text-xs text-gold/70">Mafmarines Solutions</p>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl leading-tight">
              Your fleet,
              <br />
              <span className="text-gold">at your command.</span>
            </h2>
            <p className="mt-4 font-body text-base text-pearl-dim max-w-lg leading-relaxed">
              Access real‑time vessel tracking, manage invoices, submit service requests, 
              and view critical documents — all from one central dashboard.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-800/40 p-3">
                <Ship className="h-5 w-5 text-teal" />
                <span className="font-body text-sm text-pearl">Fleet Tracking</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-800/40 p-3">
                <FileText className="h-5 w-5 text-gold" />
                <span className="font-body text-sm text-pearl">Invoices</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-800/40 p-3">
                <ClipboardList className="h-5 w-5 text-teal" />
                <span className="font-body text-sm text-pearl">Service Requests</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-800/40 p-3">
                <Globe className="h-5 w-5 text-gold" />
                <span className="font-body text-sm text-pearl">Global Operations</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-gold">37+</p>
                <p className="font-body text-[10px] text-pearl-dim">Years</p>
              </div>
              <div className="text-center border-l border-white/10">
                <p className="font-display text-2xl font-bold text-teal">220</p>
                <p className="font-body text-[10px] text-pearl-dim">Vessels</p>
              </div>
              <div className="text-center border-l border-white/10">
                <p className="font-display text-2xl font-bold text-gold">140</p>
                <p className="font-body text-[10px] text-pearl-dim">Ports</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 max-w-lg rounded-xl border border-white/10 bg-navy-800/30 p-4">
              <p className="font-serif italic text-sm text-pearl-dim/80">
                "Mafmarines' portal gives us complete visibility of our fleet — 
                it's transformed how we manage operations."
              </p>
              <p className="mt-2 font-body text-xs text-pearl-dim">
                — Global Shipping Co.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN – Login Form */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0">
            <div className="rounded-2xl border border-white/10 bg-navy-900/70 backdrop-blur-2xl p-8 shadow-2xl shadow-gold/5">
              <h3 className="font-display text-xl text-pearl mb-2">Welcome back</h3>
              <p className="font-body text-sm text-pearl-dim mb-6">Sign in to access your dashboard</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="font-body text-xs tracking-widest2 text-pearl-dim">EMAIL</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-3 font-body text-sm text-pearl outline-none focus:border-gold/60 transition-colors placeholder:text-pearl-dim/30"
                    placeholder="demo@mafmarines.com"
                    required
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest2 text-pearl-dim">PASSWORD</label>
                  <div className="relative mt-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-3 pr-12 font-body text-sm text-pearl outline-none focus:border-gold/60 transition-colors placeholder:text-pearl-dim/30"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-pearl-dim hover:text-pearl transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 font-body text-xs text-pearl-dim cursor-pointer hover:text-pearl transition-colors">
                    <input type="checkbox" className="rounded border-white/10 bg-navy-950 text-gold focus:ring-gold focus:ring-offset-0" />
                    Remember me
                  </label>
                  <button type="button" className="font-body text-xs text-teal hover:text-teal/80 transition-colors">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-full bg-gold py-3.5 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-gold/20 hover:shadow-gold/40 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950 border-t-transparent" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="font-body text-[10px] text-pearl-dim/50">
                    Demo: demo@mafmarines.com / demo123
                  </p>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-4 text-pearl-dim/40">
                  <Shield className="h-4 w-4" />
                  <span className="font-body text-[10px]">SSL Encrypted</span>
                  <span className="w-px h-4 bg-white/10" />
                  <Clock className="h-4 w-4" />
                  <span className="font-body text-[10px]">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="font-body text-xs text-pearl-dim/40">
            © {new Date().getFullYear()} Mafmarines Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}