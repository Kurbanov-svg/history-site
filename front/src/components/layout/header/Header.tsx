"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ShoppingBag,
  Ticket,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const nav = useMemo(
    () => [
      { label: "VISIT", href: "/visit" },
      { label: "EXHIBITIONS AND EVENTS", href: "/exhibitions" },
      { label: "EXPLORE", href: "/explore" },
      { label: "SEE MORE", href: "/more" },
    ],
    []
  );

  const [mounted, setMounted] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [lang, setLang] = useState<"English" | "Русский" | "Кыргызча">(
    "English"
  );

  useEffect(() => setMounted(true), []);

  const openSearch = () => {
    setLangOpen(false);
    setDrawerOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
    setLoading(false);
  };

  useEffect(() => {
    if (!mounted) return;
    if (!searchOpen) return;

    setLoading(true);
    setShowHint(false);

    const t = window.setTimeout(() => {
      setLoading(false);
      setShowHint(true);
    }, 1000);

    return () => window.clearTimeout(t);
  }, [searchOpen, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        setDrawerOpen(false);
        closeSearch();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const lock = drawerOpen || searchOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen, mounted]);

  return (
    <header className="w-full bg-black text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
          <div className="flex items-center gap-6">
            <button
              onClick={openSearch}
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
              Search
            </button>

            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 text-sm text-white/90 hover:text-white"
                aria-expanded={langOpen}
              >
                {lang}
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mounted && langOpen && (
                <>
                  <button
                    className="fixed inset-0 z-40"
                    onClick={() => setLangOpen(false)}
                    aria-label="Close language"
                  />
                  <div className="absolute left-0 top-10 z-50 w-44 rounded-xl border border-white/10 bg-black/95 backdrop-blur">
                    {(["English", "Русский", "Кыргызча"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className="block w-full px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <Link
            href="/"
            className="select-none text-4xl font-serif tracking-[0.25em]"
            aria-label="Home"
          >
            Kyrgyz
          </Link>

          <div className="flex items-center justify-end gap-3">
            <Link
              href="/boutique"
              className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40 sm:inline-flex"
            >
              <ShoppingBag className="h-4 w-4" />
              Register
            </Link>

            <Link
              href="/tickets"
              className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 sm:inline-flex"
            >
              <Ticket className="h-4 w-4" />
              Tickets
            </Link>

            <button
              className="inline-flex items-center justify-center rounded-lg border border-white/20 p-2 hover:border-white/40 sm:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4">
          <nav className="hidden items-center gap-10 text-xs font-semibold tracking-[0.2em] md:flex">
            {nav.slice(0, 3).map((i) => (
              <Link key={i.href} href={i.href} className="hover:text-white/80">
                {i.label}
              </Link>
            ))}

            <span className="mx-2 h-4 w-px bg-white/20" />

            <Link href={nav[3].href} className="hover:text-white/80">
              {nav[3].label}
            </Link>

            <Menu className="h-4 w-4 opacity-80" />
          </nav>

          <div className="flex w-full items-center justify-between md:hidden">
            <span className="text-xs font-semibold tracking-[0.2em]">MENU</span>
            <button
              className="rounded-md border border-white/20 p-2 hover:border-white/40"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {mounted && (
        <div
          className={[
            "fixed inset-0 z-[100] bg-black/70 backdrop-blur-md transition-opacity duration-200",
            searchOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          ].join(" ")}
          aria-hidden={!searchOpen}
        >
          <div className="absolute inset-0" onClick={closeSearch} />

          <div className="relative mx-auto h-full max-w-6xl px-6 pt-16">
            <button
              onClick={closeSearch}
              className="absolute right-6 top-10 rounded-full p-2 text-white/80 hover:text-white"
              aria-label="Close search"
            >
              <X className="h-8 w-8" />
            </button>

            <h2 className="text-5xl font-extrabold tracking-tight">Поиск</h2>

            <div className="mt-10">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поищите что-нибудь…"
                className="w-full bg-transparent text-xl text-white placeholder-white/45 outline-none"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-4 h-px w-full bg-white/20" />
            </div>

            <div className="mt-24 flex flex-col items-center justify-center gap-4">
              {loading && (
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white/80" />
              )}

              {!loading && showHint && query.trim().length === 0 && (
                <p className="text-sm text-white/55 transition-opacity duration-300">
                  Поищите что-нибудь, например:{" "}
                  <span className="text-white/80">«Манас»</span> или{" "}
                  <span className="text-white/80">«История Бишкека»</span>
                </p>
              )}

              {!loading && query.trim().length > 0 && (
                <p className="text-sm text-white/55 transition-opacity duration-300">
                  Ищем: <span className="text-white/80">«{query}»</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {mounted && drawerOpen && (
        <>
          <button
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          />
          <aside className="fixed right-0 top-0 z-50 h-dvh w-[85%] max-w-sm border-l border-white/10 bg-black/95 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <span className="text-sm font-semibold tracking-[0.2em]">
                KYRGYZ
              </span>
              <button
                className="rounded-lg border border-white/20 p-2 hover:border-white/40"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block rounded-xl border border-white/10 px-4 py-4 text-sm font-semibold tracking-[0.14em] text-white/90 hover:border-white/25 hover:bg-white/5"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
