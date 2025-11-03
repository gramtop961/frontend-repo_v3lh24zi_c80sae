import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const HeroSplineCover = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlays for readability without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.12),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-36 lg:pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-blue-600" />
            Next‑gen crypto address intelligence
          </span>
          <h1 className="mt-6 font-semibold tracking-tight text-slate-900 text-4xl sm:text-5xl md:text-6xl leading-tight">
            Track, analyze, and visualize any crypto address
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl">
            Gain instant insights into token flows, counterparties, and risk signals across chains. Built for analysts, funds, and power users.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#track"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition-colors"
            >
              Start Tracking
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-3 text-slate-900 font-medium shadow border border-slate-200 hover:bg-white transition-colors"
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
