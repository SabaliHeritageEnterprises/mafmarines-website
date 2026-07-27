"use client";

import { useState, useEffect } from "react";
import { 
  Ship, 
  FileText, 
  ClipboardList, 
  Activity,
  ArrowUpRight,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Anchor,
  MapPin,
  Calendar,
  DollarSign,
  BarChart3,
  Users,
  Award,
  Globe
} from "lucide-react";
import Link from "next/link";
import StatsCard from "@/components/portal/StatsCard";
import RecentActivity from "@/components/portal/RecentActivity";

// Enhanced stats with more detail
const stats = [
  { label: "Active Vessels", value: "12", icon: Ship, change: "+2", color: "teal" },
  { label: "Fleet Utilization", value: "94%", icon: Activity, change: "+8%", color: "green" },
  { label: "Open Invoices", value: "4", icon: FileText, change: "Pending", color: "gold" },
  { label: "Active Requests", value: "3", icon: ClipboardList, change: "In progress", color: "blue" },
];

// Enhanced vessel data
const vessels = [
  { name: "M/V Mafmarines Alpha", status: "At Sea", location: "Indian Ocean", eta: "2 days", speed: "18.5 kn", distance: "342 nm" },
  { name: "M/Y Aura", status: "In Port", location: "Dubai", eta: "Docked", speed: "0 kn", distance: "—" },
  { name: "OSV Mafmarines Pioneer", status: "At Sea", location: "North Sea", eta: "5 days", speed: "12.2 kn", distance: "1,245 nm" },
  { name: "M/V Mafmarines Horizon", status: "Maintenance", location: "Singapore", eta: "7 days", speed: "—", distance: "—" },
];

// Financial summary
const financialData = [
  { label: "Total Revenue (YTD)", value: "$2.4M", change: "+12%", color: "text-emerald-400" },
  { label: "Pending Invoices", value: "$32,750", change: "-2%", color: "text-gold" },
  { label: "Monthly Burn", value: "$18,200", change: "-5%", color: "text-teal" },
];

// Upcoming milestones
const milestones = [
  { event: "M/V Alpha Arrival", date: "Jul 28, 2026", days: "3 days" },
  { event: "Q3 Maintenance Window", date: "Aug 1, 2026", days: "7 days" },
  { event: "Annual Survey Due", date: "Aug 15, 2026", days: "21 days" },
];

export default function PortalDashboard() {
  const [user, setUser] = useState<{ name: string; company: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("portal_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      {/* Welcome section with company branding */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-pearl">
            Welcome back, {user?.name || "Client"} 👋
          </h1>
          <p className="mt-1 font-body text-sm text-pearl-dim">
            {user?.company || "Global Shipping Co."} · Last login: Today, 09:42 AM
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-body text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </span>
          <div className="h-8 w-px bg-white/10" />
          <Clock className="h-4 w-4 text-pearl-dim" />
          <span className="font-body text-xs text-pearl-dim">UTC +3</span>
        </div>
      </div>

      {/* Stats Cards with enhanced data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {financialData.map((item) => (
          <div key={item.label} className="rounded-xl border border-white/10 bg-navy-900/40 p-4">
            <p className="font-body text-xs text-pearl-dim">{item.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-pearl">{item.value}</p>
            <p className={`mt-0.5 font-body text-xs ${item.color}`}>{item.change}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link
          href="/portal/vessels"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-navy-800/40 px-5 py-2.5 font-body text-sm text-pearl hover:border-gold/40 hover:bg-gold/5 transition-all group"
        >
          <Ship className="h-4 w-4 text-gold" />
          Track Vessels
          <ArrowUpRight className="h-3.5 w-3.5 text-pearl-dim group-hover:text-gold transition-colors" />
        </Link>
        <Link
          href="/portal/requests/new"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-navy-800/40 px-5 py-2.5 font-body text-sm text-pearl hover:border-gold/40 hover:bg-gold/5 transition-all group"
        >
          <ClipboardList className="h-4 w-4 text-teal" />
          Submit Request
          <ArrowUpRight className="h-3.5 w-3.5 text-pearl-dim group-hover:text-teal transition-colors" />
        </Link>
        <Link
          href="/portal/invoices"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-navy-800/40 px-5 py-2.5 font-body text-sm text-pearl hover:border-gold/40 hover:bg-gold/5 transition-all group"
        >
          <FileText className="h-4 w-4 text-gold" />
          View Invoices
          <ArrowUpRight className="h-3.5 w-3.5 text-pearl-dim group-hover:text-gold transition-colors" />
        </Link>
      </div>

      {/* Three-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vessels – now with more data */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-navy-900/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg text-pearl">Live Vessel Status</h2>
            <Link href="/portal/vessels" className="font-body text-xs text-teal hover:text-teal/80 transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {vessels.map((vessel) => (
              <div
                key={vessel.name}
                className="flex flex-wrap items-center justify-between rounded-lg border border-white/5 bg-navy-800/30 px-4 py-3 hover:border-white/10 transition-colors gap-2"
              >
                <div className="flex items-center gap-3 min-w-[140px]">
                  <Ship className="h-4 w-4 text-gold/60 shrink-0" />
                  <div>
                    <p className="font-body text-sm text-pearl">{vessel.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <MapPin className="h-3 w-3 text-pearl-dim/50" />
                      <p className="font-body text-[10px] text-pearl-dim">{vessel.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium
                    ${vessel.status === "At Sea" ? "bg-teal/20 text-teal" : ""}
                    ${vessel.status === "In Port" ? "bg-gold/20 text-gold" : ""}
                    ${vessel.status === "Maintenance" ? "bg-orange-500/20 text-orange-400" : ""}
                  `}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {vessel.status}
                  </span>
                  {vessel.speed !== "—" && (
                    <span className="font-body text-[10px] text-pearl-dim">{vessel.speed}</span>
                  )}
                  <span className="font-body text-[10px] text-pearl-dim">ETA: {vessel.eta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column – Combined Activity + Milestones */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-6">
            <h2 className="font-display text-lg text-pearl mb-4">Recent Activity</h2>
            <RecentActivity />
          </div>

          {/* Upcoming Milestones */}
          <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-6">
            <h2 className="font-display text-lg text-pearl mb-4">Upcoming Milestones</h2>
            <div className="space-y-3">
              {milestones.map((item) => (
                <div key={item.event} className="flex items-center justify-between rounded-lg border border-white/5 bg-navy-800/30 px-3 py-2">
                  <div>
                    <p className="font-body text-sm text-pearl">{item.event}</p>
                    <p className="font-body text-[10px] text-pearl-dim">{item.date}</p>
                  </div>
                  <span className="rounded-full bg-gold/10 px-2.5 py-0.5 font-body text-[10px] text-gold">
                    {item.days}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}