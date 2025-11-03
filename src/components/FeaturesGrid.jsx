import React from 'react';
import { BarChart3, Activity, Radar, Layers } from 'lucide-react';

const features = [
  {
    title: 'Unified Multi‑Chain',
    desc: 'Track activity across major EVM chains with consistent labeling and normalization.',
    icon: Layers,
  },
  {
    title: 'Flow Analytics',
    desc: 'Visualize token inflows/outflows, counterparties, and clustering patterns.',
    icon: BarChart3,
  },
  {
    title: 'Risk Signals',
    desc: 'Surface alerts for mixers, sanctioned entities, and suspicious patterns.',
    icon: Radar,
  },
  {
    title: 'Real‑time Monitoring',
    desc: 'Stream new transactions and price movements with low-latency updates.',
    icon: Activity,
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Powerful features for deep on‑chain insight
          </h2>
          <p className="mt-3 text-slate-600">
            Designed for clarity and speed. Everything you need to understand any address at a glance.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-slate-900 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
