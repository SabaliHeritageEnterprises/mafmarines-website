"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Office coordinates (latitude, longitude)
const OFFICES = [
  {
    city: "Mombasa",
    country: "Kenya",
    address: "Shed 12, Kilindini Port, Mombasa, Kenya",
    coords: [-4.0435, 39.6682],
  },
  {
    city: "Dar es Salaam",
    country: "Tanzania",
    address: "Berth 8, Dar es Salaam Port, Tanzania",
    coords: [-6.7924, 39.2083],
  },
];

// Create a custom icon with the correct URLs (avoids private property errors)
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function ContactMap() {
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;
    if (mapRef.current) return; // already initialised

    const map = L.map(containerRef.current, {
      center: [-5.0, 39.5],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    OFFICES.forEach((office) => {
      L.marker(office.coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: 'Inter', sans-serif; font-size: 14px;">
            <strong style="color: #D4AF37;">${office.city}</strong>
            <p style="font-size: 12px; color: #0A1628;">${office.address}</p>
          </div>
        `);
    });

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="h-[400px] w-full rounded-2xl border border-white/10 bg-navy-800/40 animate-pulse" />
    );
  }

  return (
    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10">
      <div ref={containerRef} className="h-full w-full" style={{ background: "#0A1628" }} />
      <div className="absolute bottom-3 right-3 z-[1000] rounded-lg bg-navy-950/80 px-2 py-1 font-body text-[10px] text-pearl-dim/60 backdrop-blur-sm">
        © OpenStreetMap
      </div>
    </div>
  );
}