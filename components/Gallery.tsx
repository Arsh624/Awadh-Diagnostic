"use client";

import Image from "next/image";

const images = [
  { src: "/gallery/placeholder-1.jpg", alt: "Modern lab equipment" },
  { src: "/gallery/placeholder-2.jpg", alt: "Doctor consultation" },
  { src: "/gallery/placeholder-3.jpg", alt: "Blood test laboratory" },
  { src: "/gallery/placeholder-4.jpg", alt: "Digital X-Ray machine" },
  { src: "/gallery/placeholder-5.jpg", alt: "Diagnostic equipment" },
  { src: "/gallery/placeholder-6.jpg", alt: "Patient care" },
];

const allImages = [...images, ...images];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 md:mb-14">
        <p className="font-inter text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Take a Look Inside</p>
        <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-brand-dark">Our Centre</h2>
      </div>

      <div
        className="flex gap-4 w-max animate-scroll-left"
        style={{ willChange: "transform" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
      >
        {allImages.map((img, i) => (
          <div key={`${img.src}-${i}`} className="relative w-64 h-44 md:w-80 md:h-56 flex-shrink-0 overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" sizes="320px" />
          </div>
        ))}
      </div>
    </section>
  );
}
