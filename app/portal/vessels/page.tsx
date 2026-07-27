"use client";

import { useState } from "react";
import { Ship, Search, Filter, MapPin, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const vessels = [
  { 
    name: "M/V Mafmarines Alpha", 
    type: "Container Vessel",
    status: "At Sea", 
    location: "Indian Ocean", 
    eta: "2 days",
    captain: "Capt. Roberts",
    flag: "Liberia",
    lastUpdate: "10 min ago",
  },
  { 
    name: "M/Y Aura", 
    type: "Superyacht Support",
    status: "In Port", 
    location: "Dubai", 
    eta: "Docked",
    captain: "Capt. Al Maktoum",
    flag: "UAE",
    lastUpdate: "1 hour ago",
  },
  { 
    name: "OSV Mafmarines Pioneer", 
    type: "Offshore Supply",
    status: "At Sea", 
    location: "North Sea", 
    eta: "5 days",
    captain: "Capt. Nielsen",
    flag: "Norway",
    lastUpdate: "45 min ago",
  },
  { 
    name: "M/V Mafmarines Horizon", 
    type: "Bulk Carrier",
    status: "Maintenance", 
    location: "Singapore", 
    eta: "7 days",
    captain: "Capt. Tan",
    flag: "Singapore",
    lastUpdate: "3 hours ago",
  },
  { 
    name: "M/V Mafmarines Atlas", 
    type: "Heavy‑Lift Vessel",
    status: "At Sea", 
    location: "Atlantic Ocean", 
    eta: "9 days",
    captain: "Capt. Oliveira",
    flag: "Portugal",
    lastUpdate: "2 hours ago",
  },
];

const statusColors = {
  "At Sea": "bg-teal/20 text-teal",
  "In Port": "bg-gold/20 text-gold",
  "Maintenance": "bg-orange-500/20 text-orange-400",
};

export default function VesselsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = vessels.filter(v => 
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.type.toLowerCase().includes(search.toLowerCase())
  );

  const statuses = ["All", ...new Set(vessels.map(v => v.status))];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-pearl">Vessels</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vessels..."
              className="rounded-lg border border-white/10 bg-navy-800/40 px-3 py-2 pl-9 font-body text-sm text-pearl outline-none focus:border-gold/60 w-48 sm:w-64 transition-colors"
            />
          </div>
          <div className="flex gap-1 rounded-lg border border-white/10 bg-navy-800/40 p-1">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1.5 rounded font-body text-xs transition-all ${
                  filter === s ? "bg-gold/20 text-gold" : "text-pearl-dim hover:text-pearl"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((vessel) => (
          <div
            key={vessel.name}
            className="group rounded-2xl border border-white/10 bg-navy-900/40 p-5 hover:border-gold/30 transition-all hover:shadow-gold/10 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Ship className="h-4 w-4 text-gold/60" />
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium ${statusColors[vessel.status as keyof typeof statusColors]}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {vessel.status}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg text-pearl">{vessel.name}</h3>
                <p className="font-body text-sm text-pearl-dim">{vessel.type}</p>
              </div>
              <Link
                href={`/portal/vessels/${vessel.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-white/5"
              >
                <ChevronRight className="h-5 w-5 text-pearl-dim" />
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/5 pt-4">
              <div>
                <p className="font-body text-[10px] text-pearl-dim">LOCATION</p>
                <p className="font-body text-xs text-pearl flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-gold/60" />
                  {vessel.location}
                </p>
              </div>
              <div>
                <p className="font-body text-[10px] text-pearl-dim">ETA</p>
                <p className="font-body text-xs text-pearl flex items-center gap-1">
                  <Clock className="h-3 w-3 text-teal/60" />
                  {vessel.eta}
                </p>
              </div>
              <div>
                <p className="font-body text-[10px] text-pearl-dim">CAPTAIN</p>
                <p className="font-body text-xs text-pearl">{vessel.captain}</p>
              </div>
              <div>
                <p className="font-body text-[10px] text-pearl-dim">FLAG</p>
                <p className="font-body text-xs text-pearl">{vessel.flag}</p>
              </div>
            </div>

            <p className="mt-3 font-body text-[10px] text-pearl-dim/50">
              Last updated: {vessel.lastUpdate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}