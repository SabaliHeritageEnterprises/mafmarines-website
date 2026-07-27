"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Ship, 
  FileText, 
  ClipboardList, 
  FolderOpen, 
  User,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/portal/dashboard", icon: LayoutDashboard },
  { label: "Vessels", href: "/portal/vessels", icon: Ship },
  { label: "Invoices", href: "/portal/invoices", icon: FileText },
  { label: "Service Requests", href: "/portal/requests", icon: ClipboardList },
  { label: "Documents", href: "/portal/documents", icon: FolderOpen },
  { label: "Profile", href: "/portal/profile", icon: User },
];

export default function PortalSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`
      fixed left-0 top-20 z-40 h-[calc(100vh-80px)] bg-navy-900/95 backdrop-blur-xl border-r border-white/10
      transition-all duration-300 flex flex-col
      ${isCollapsed ? "w-16" : "w-64"}
      lg:translate-x-0
    `}>
      <div className={`flex items-center gap-3 h-14 px-4 border-b border-white/10 shrink-0 ${isCollapsed ? "justify-center" : ""}`}>
        <span className="font-display text-xs font-bold tracking-widest text-gold">PORTAL</span>
        {!isCollapsed && <span className="font-body text-xs text-pearl-dim">menu</span>}
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-all duration-200 group
                ${isActive 
                  ? "bg-gold/10 text-gold border border-gold/20" 
                  : "text-pearl-dim hover:text-pearl hover:bg-white/5"
                }
                ${isCollapsed ? "justify-center" : ""}
              `}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className={`h-4 w-4 shrink-0 ${isActive ? "text-gold" : "group-hover:text-pearl"}`} />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-2 shrink-0">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            w-full flex items-center gap-3 rounded-lg px-3 py-2 text-pearl-dim hover:text-pearl hover:bg-white/5 transition-all
            ${isCollapsed ? "justify-center" : ""}
          `}
        >
          <ChevronLeft className={`h-4 w-4 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
          {!isCollapsed && <span className="font-body text-sm">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}