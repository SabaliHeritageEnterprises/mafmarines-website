"use client";

import { useState } from "react";
import { FileText, Download, Eye, Search, Filter } from "lucide-react";
import Link from "next/link";

const invoices = [
  { id: "INV-2026-0042", date: "2026-07-20", amount: "$12,450.00", status: "Paid", vessel: "M/V Mafmarines Alpha" },
  { id: "INV-2026-0041", date: "2026-07-18", amount: "$4,800.00", status: "Pending", vessel: "M/Y Aura" },
  { id: "INV-2026-0039", date: "2026-07-15", amount: "$18,200.00", status: "Overdue", vessel: "OSV Mafmarines Pioneer" },
  { id: "INV-2026-0038", date: "2026-07-12", amount: "$7,500.00", status: "Paid", vessel: "M/V Mafmarines Horizon" },
  { id: "INV-2026-0036", date: "2026-07-08", amount: "$9,300.00", status: "Pending", vessel: "M/V Mafmarines Atlas" },
  { id: "INV-2026-0034", date: "2026-07-05", amount: "$3,600.00", status: "Paid", vessel: "M/Y Aura" },
];

const statusColors = {
  Paid: "bg-emerald-500/20 text-emerald-400",
  Pending: "bg-gold/20 text-gold",
  Overdue: "bg-red-500/20 text-red-400",
};

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = invoices.filter(i => 
    i.id.toLowerCase().includes(search.toLowerCase()) ||
    i.vessel.toLowerCase().includes(search.toLowerCase())
  );

  const statuses = ["All", ...new Set(invoices.map(i => i.status))];

  const totalDue = invoices
    .filter(i => i.status === "Pending" || i.status === "Overdue")
    .reduce((sum, i) => sum + parseFloat(i.amount.replace(/[$,]/g, "")), 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="font-display text-2xl font-bold text-pearl">Invoices</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pearl-dim" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search invoices..."
              className="rounded-lg border border-white/10 bg-navy-800/40 px-3 py-2 pl-9 font-body text-sm text-pearl outline-none focus:border-gold/60 w-48 sm:w-64 transition-colors"
            />
          </div>
          <Link
            href="/portal/invoices/new"
            className="rounded-full bg-gold px-5 py-2 font-body text-xs tracking-widest2 text-navy-950 hover:bg-gold-bright transition-colors"
          >
            + New Invoice
          </Link>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl border border-white/10 bg-navy-900/40 p-4">
          <p className="font-body text-xs text-pearl-dim">Total Invoices</p>
          <p className="font-display text-2xl font-bold text-pearl">{invoices.length}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-navy-900/40 p-4">
          <p className="font-body text-xs text-pearl-dim">Total Due</p>
          <p className="font-display text-2xl font-bold text-gold">${totalDue.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-navy-900/40 p-4">
          <p className="font-body text-xs text-pearl-dim">Overdue</p>
          <p className="font-display text-2xl font-bold text-red-400">
            {invoices.filter(i => i.status === "Overdue").length}
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-1 rounded-lg border border-white/10 bg-navy-800/40 p-1 mb-4">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded font-body text-xs transition-all ${
              filter === s ? "bg-gold/20 text-gold" : "text-pearl-dim hover:text-pearl"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-navy-800/40 border-b border-white/10">
              <tr>
                <th className="px-6 py-3 text-left font-body text-xs tracking-widest2 text-pearl-dim">Invoice</th>
                <th className="px-6 py-3 text-left font-body text-xs tracking-widest2 text-pearl-dim">Vessel</th>
                <th className="px-6 py-3 text-left font-body text-xs tracking-widest2 text-pearl-dim">Date</th>
                <th className="px-6 py-3 text-left font-body text-xs tracking-widest2 text-pearl-dim">Amount</th>
                <th className="px-6 py-3 text-left font-body text-xs tracking-widest2 text-pearl-dim">Status</th>
                <th className="px-6 py-3 text-right font-body text-xs tracking-widest2 text-pearl-dim">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered
                .filter(i => filter === "All" || i.status === filter)
                .map((invoice) => (
                  <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-body text-sm text-pearl">{invoice.id}</td>
                    <td className="px-6 py-4 font-body text-sm text-pearl-dim">{invoice.vessel}</td>
                    <td className="px-6 py-4 font-body text-sm text-pearl-dim">{invoice.date}</td>
                    <td className="px-6 py-4 font-body text-sm font-medium text-pearl">{invoice.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-3 py-0.5 font-body text-xs font-medium ${statusColors[invoice.status as keyof typeof statusColors]}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-white/5 text-pearl-dim hover:text-pearl transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/5 text-pearl-dim hover:text-pearl transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}