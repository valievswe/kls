"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GallerySlide = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export default function AboutGalleryCarousel({ slides }: { slides: GallerySlide[] }) {
  const [index, setIndex] = useState(0);

  const safeSlides = useMemo(() => slides.filter((slide) => slide.src), [slides]);
  if (safeSlides.length === 0) {
    return null;
  }

  const current = safeSlides[index] ?? safeSlides[0];
  const goPrev = () => setIndex((prev) => (prev === 0 ? safeSlides.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev === safeSlides.length - 1 ? 0 : prev + 1));

  return (
    <div className="overflow-hidden rounded-2xl border border-violet-200/70 bg-white shadow-[0_24px_40px_-34px_rgba(109,40,217,0.5)]">
      <div className="relative h-72 sm:h-96">
        <Image src={current.src} alt={current.alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold">{current.title}</h3>
          <p className="mt-2 text-sm text-slate-100 sm:text-base">{current.caption}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-violet-200/70 bg-violet-50/50 px-4 py-3">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-md border border-violet-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-violet-700 transition-colors hover:bg-violet-100"
          aria-label="Previous gallery slide"
        >
          Prev
        </button>

        <div className="flex items-center gap-2">
          {safeSlides.map((slide, slideIndex) => (
            <button
              type="button"
              key={slide.title}
              onClick={() => setIndex(slideIndex)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                slideIndex === index ? "bg-violet-700" : "bg-violet-300"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="rounded-md border border-violet-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-violet-700 transition-colors hover:bg-violet-100"
          aria-label="Next gallery slide"
        >
          Next
        </button>
      </div>
    </div>
  );
}
