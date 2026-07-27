const activities = [
  { action: "Vessel M/V Mafmarines Alpha arrived at Port of Dubai", time: "2 hours ago", type: "arrival" },
  { action: "Invoice #INV-2026-0042 paid", time: "4 hours ago", type: "payment" },
  { action: "Service request #SR-2026-0018 completed", time: "6 hours ago", type: "service" },
  { action: "Maintenance report uploaded for M/Y Aura", time: "1 day ago", type: "document" },
  { action: "New service request created: Engine diagnostics", time: "2 days ago", type: "request" },
];

export default function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity, i) => (
        <div key={i} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
          <p className="font-body text-sm text-pearl-dim">{activity.action}</p>
          <p className="mt-0.5 font-body text-[10px] text-pearl-dim/50">{activity.time}</p>
        </div>
      ))}
    </div>
  );
}