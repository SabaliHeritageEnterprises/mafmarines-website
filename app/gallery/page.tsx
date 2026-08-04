"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";

// All gallery items (images and videos)
const galleryItems = [
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852622/WhatsApp_Image_2026-08-03_at_07.23.32_trbp2b.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852623/ol_jrdp25.jpg" },
  { type: "video", src: "https://res.cloudinary.com/tgvfx3bf/video/upload/v1785852654/WhatsApp_Video_2026-08-03_at_07.27.00_v5h9uu.mp4" },
  { type: "video", src: "https://res.cloudinary.com/tgvfx3bf/video/upload/v1785852635/WhatsApp_Video_2026-08-03_at_07.27.02_a0w4n6.mp4" },
  { type: "video", src: "https://res.cloudinary.com/tgvfx3bf/video/upload/v1785852632/WhatsApp_Video_2026-08-03_at_07.13.23_pq0pow.mp4" },
  { type: "video", src: "https://res.cloudinary.com/tgvfx3bf/video/upload/v1785852632/WhatsApp_Video_2026-08-03_at_07.14.55_sblmcj.mp4" },
  { type: "video", src: "https://res.cloudinary.com/tgvfx3bf/video/upload/v1785852631/WhatsApp_Video_2026-08-03_at_07.12.39_etnl4r.mp4" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852624/WhatsApp_Image_2026-08-03_at_07.26.57_ck2mxc.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852624/WhatsApp_Image_2026-08-03_at_07.26.58_c3dzx5.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852623/io_ql29yx.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852624/WhatsApp_Image_2026-08-03_at_07.26.59_j2grul.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852623/WhatsApp_Image_2026-08-03_at_07.16.00_vgza2k.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852622/WhatsApp_Image_2026-08-03_at_07.26.56_vd95ti.jpg" },
  { type: "image", src: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785852622/uk_yz8xmg.jpg" },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<{ type: string; src: string } | null>(null);

  const openModal = (item: { type: string; src: string }) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[40vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 opacity-90" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="font-body text-xs tracking-widest2 text-gold">GALLERY</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-pearl">
            Our Work in Focus
          </h1>
          <p className="mt-4 max-w-2xl mx-auto font-body text-pearl-dim">
            Explore our maritime operations, underwater inspections, diving projects, and more.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-navy-800/40 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-gold/40"
              onClick={() => openModal(item)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    loop
                    autoPlay={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden bg-navy-900 border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 rounded-full bg-navy-950/80 p-2 text-white hover:bg-navy-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedItem.type === "image" ? (
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                <Image
                  src={selectedItem.src}
                  alt="Full size"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] w-auto"
                />
              </div>
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full max-h-[80vh]"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}