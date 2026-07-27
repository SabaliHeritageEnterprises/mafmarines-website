import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  color: "teal" | "gold" | "blue" | "green";
}

const colorMap = {
  teal: "border-teal/20 bg-teal/5 text-teal",
  gold: "border-gold/20 bg-gold/5 text-gold",
  blue: "border-blue-500/20 bg-blue-500/5 text-blue-400",
  green: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
};

export default function StatsCard({ label, value, icon: Icon, change, color }: StatsCardProps) {
  return (
    <div className={`rounded-xl border ${colorMap[color]} p-4 transition-all hover:scale-[1.02] duration-300`}>
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 opacity-60" />
        {change && (
          <span className="font-body text-[10px] font-medium text-pearl-dim">
            {change}
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-pearl">{value}</p>
      <p className="mt-0.5 font-body text-xs text-pearl-dim">{label}</p>
    </div>
  );
}