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

// Duplicate for seamless infinite loop
const allImages = [...images, ...images];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest font-inter">
          Take a Look Inside
        </span>
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-2">
          Our Centre
        </h2>
      </div>

      {/* Carousel track */}
      <div
        className="flex gap-4 w-max animate-scroll-left hover:pause-animation"
        style={{ willChange: "transform" }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className="relative w-72 h-52 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="288px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
