"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import StickyMegaMenu from "@/components/StickyMegaMenu";
import GlobalFooter from "@/components/GlobalFooter";
import PortalSidebar from "@/components/portal/PortalSidebar";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("portal_token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/portal/login");
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <StickyMegaMenu />
      <div className="flex pt-20">
        <PortalSidebar />
        <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-64 min-h-[calc(100vh-80px)]">
          {children}
        </main>
      </div>
      <GlobalFooter />
    </div>
  );
}