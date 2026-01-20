"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  position?: string;
};

const HeroSite = () => {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/муг.jpg",
        title: "Kyrgyz",
        subtitle: "История • культура • наследие",
        ctaPrimary: "Explore",
        ctaSecondary: "Watch intro",
        position: "50% 35%",
      },
      {
        src: "/датка.jpg",
        title: "Легенды и эпос",
        subtitle: "Манас и великие истории народа",
        ctaPrimary: "Read stories",
        ctaSecondary: "Learn more",
      },
      {
        src: "/чын.jpg",
        title: "Места силы",
        subtitle: "Горы, города и путь к корням",
        ctaPrimary: "Discover places",
        ctaSecondary: "Gallery",
        position: "50% 25%",
      },
    ],
    []
  );

  const INTERVAL_MS = 5200;
  const FADE_MS = 800;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const timerRef = useRef<number | null>(null);

  const nextIndex = (i: number) => (i + 1) % slides.length;
  const prevIndex = (i: number) => (i - 1 + slides.length) % slides.length;

  const next = () => {
    setIndex((i) => nextIndex(i));
    setTextKey((k) => k + 1);
  };

  const prev = () => {
    setIndex((i) => prevIndex(i));
    setTextKey((k) => k + 1);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, slides.length]);

  // preload
  useEffect(() => {
    slides.forEach((s) => {
      const img = new window.Image();
      img.src = s.src;
    });
  }, [slides]);

  const current = slides[index];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "92vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.src}
            className={[
              "absolute inset-0 transition-opacity will-change-opacity",
              active ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            <div
              className={[
                "absolute inset-0 will-change-transform transition-transform ease-out",
                active ? "scale-[1.06]" : "scale-100",
              ].join(" ")}
              style={{ transitionDuration: `${INTERVAL_MS}ms` }}
            >
              <Image
                src={s.src}
                alt={s.title}
                fill
                priority={i === 0}
                quality={100} // 
                sizes="100vw"
                placeholder="empty"
                className="object-cover"
                style={{
                  objectPosition: s.position ?? "center", 
                }}
              />
            </div>

            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.08),transparent_55%)]" />
          </div>
        );
      })}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-28">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs tracking-[0.28em] text-white/80 backdrop-blur">
            KYRGYZ • HERITAGE
          </div>

          <div
            key={textKey}
            className="opacity-0 translate-y-2 animate-[fadeUp_0.45s_ease-out_forwards]"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {current.title}
            </h1>

            <p className="mt-4 text-base text-white/80 sm:text-lg">
              {current.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90">
                {current.ctaPrimary}
              </button>
              <button className="rounded-full border border-white/20 bg-black/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:border-white/35 hover:text-white">
                {current.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setTextKey((k) => k + 1);
                }}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  i === index
                    ? "w-7 bg-white"
                    : "bg-white/40 hover:bg-white/70",
                ].join(" ")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm text-white/85 backdrop-blur hover:border-white/35 hover:text-white"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm text-white/85 backdrop-blur hover:border-white/35 hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSite;
