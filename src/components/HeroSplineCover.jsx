import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const HeroSplineCover = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Readability overlays that do not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.2),transparent_55%)]" />
        {/* Right-side Bitcoin accent (decorative) */}
        <div className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 w-[46vw] max-w-[560px] opacity-30">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029"
            alt="Bitcoin"
            className="w-full h-auto drop-shadow-[0_20px_60px_rgba(255,193,7,0.25)] blur-[0.3px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-36 lg:pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-blue-400" />
            Fintech‑grade crypto address intelligence
          </span>
          <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
            Track, analyze, and visualize any crypto address
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl">
            A futuristic, holographic hero featuring spinning coins. Built for analysts, funds, and power users.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#track"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-black font-medium shadow hover:bg-white/90 transition-colors"
            >
              Start Tracking
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-medium shadow border border-white/20 hover:bg-white/15 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplineCover;
