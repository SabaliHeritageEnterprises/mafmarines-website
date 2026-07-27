"use client";

import { useState } from "react";
import { FolderOpen, File, Download, Search, Upload, FileText, FileImage, FileArchive } from "lucide-react";
import Link from "next/link";

const documents = [
  { name: "Vessel Survey Report - M/V Alpha", type: "PDF", date: "2026-07-15", size: "2.4 MB" },
  { name: "Maintenance Log - Q3 2026", type: "PDF", date: "2026-07-10", size: "4.1 MB" },
  { name: "Crew Certificates - M/Y Aura", type: "PDF", date: "2026-07-05", size: "1.8 MB" },
  { name: "Insurance Policy 2026-2027", type: "PDF", date: "2026-06-28", size: "3.2 MB" },
  { name: "Port Clearance - Singapore", type: "PDF", date: "2026-06-20", size: "0.9 MB" },
  { name: "Fleet Performance Report - June 2026", type: "PDF", date: "2026-06-15", size: "5.7 MB" },
];

const getIcon = (type: string) => {
  if (type === "PDF") return FileText;
  if (type === "JPG" || type === "PNG") return FileImage;
  if (type === "ZIP") return FileArchive;
  return File;
};

export default function DocumentsPage() {
  const [search, setSearch] = useState("");

  const filtered = documents.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="font-display text-2xl font-bold text-pearl">Documents</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documents..."
              className="rounded-lg border border-white/10 bg-navy-800/40 px-3 py-2 pl-9 font-body text-sm text-pearl outline-none focus:border-gold/60 w-48 sm:w-64 transition-colors"
            />
          </div>
          <button className="rounded-full bg-gold px-5 py-2 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors flex items-center gap-1">
            <Upload className="h-4 w-4" /> Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((doc) => {
          const Icon = getIcon(doc.type);
          return (
            <div
              key={doc.name}
              className="group rounded-2xl border border-white/10 bg-navy-900/40 p-5 hover:border-gold/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-sm text-pearl truncate">{doc.name}</h3>
                  <p className="font-body text-xs text-pearl-dim">{doc.type} · {doc.size}</p>
                  <p className="font-body text-[10px] text-pearl-dim/50">{doc.date}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                <button className="font-body text-xs text-teal hover:text-teal/80 transition-colors">
                  Preview
                </button>
                <button className="font-body text-xs text-pearl-dim hover:text-pearl transition-colors flex items-center gap-1">
                  <Download className="h-3 w-3" /> Download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}