"use client";

import { useState } from "react";
import { ClipboardList, Plus, Clock, CheckCircle, AlertCircle, Search } from "lucide-react";
import Link from "next/link";

const requests = [
  { id: "SR-2026-0018", title: "Engine diagnostics - M/Y Aura", status: "Completed", priority: "High", date: "2026-07-19" },
  { id: "SR-2026-0017", title: "Routine maintenance - M/V Horizon", status: "In Progress", priority: "Medium", date: "2026-07-16" },
  { id: "SR-2026-0015", title: "Crew change request - M/V Alpha", status: "Pending", priority: "Low", date: "2026-07-12" },
  { id: "SR-2026-0013", title: "Survey inspection - OSV Pioneer", status: "Pending", priority: "High", date: "2026-07-08" },
];

const statusColors = {
  Completed: "bg-emerald-500/20 text-emerald-400",
  "In Progress": "bg-teal/20 text-teal",
  Pending: "bg-gold/20 text-gold",
};

const priorityColors = {
  High: "text-red-400",
  Medium: "text-gold",
  Low: "text-teal",
};

export default function RequestsPage() {
  const [search, setSearch] = useState("");

  const filtered = requests.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="font-display text-2xl font-bold text-pearl">Service Requests</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search requests..."
              className="rounded-lg border border-white/10 bg-navy-800/40 px-3 py-2 pl-9 font-body text-sm text-pearl outline-none focus:border-gold/60 w-48 sm:w-64 transition-colors"
            />
          </div>
          <Link
            href="/portal/requests/new"
            className="rounded-full bg-gold px-5 py-2 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors flex items-center gap-1"
          >
            <Plus className="h-4 w-4" /> New Request
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((req) => (
          <div
            key={req.id}
            className="rounded-2xl border border-white/10 bg-navy-900/40 p-5 hover:border-gold/30 transition-all"
          >
            <div className="flex items-start justify-between">
              <span className={`rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium ${statusColors[req.status as keyof typeof statusColors]}`}>
                {req.status}
              </span>
              <span className={`font-body text-xs font-medium ${priorityColors[req.priority as keyof typeof priorityColors]}`}>
                {req.priority}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base text-pearl">{req.title}</h3>
            <p className="mt-1 font-body text-xs text-pearl-dim">{req.id} · {req.date}</p>
            <Link
              href={`/portal/requests/${req.id.toLowerCase()}`}
              className="mt-4 inline-flex items-center gap-1 font-body text-xs text-teal hover:text-teal/80 transition-colors"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}