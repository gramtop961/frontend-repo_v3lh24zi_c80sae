import React from 'react';
import { Coins, TrendingUp, ArrowRight } from 'lucide-react';

const coins = [
  {
    id: 'btc',
    name: 'Bitcoin (BTC)',
    img: 'https://images.unsplash.com/photo-1518544881170-9d7fb4e6f321?auto=format&fit=crop&w=1200&q=60',
    blurb: 'The original cryptocurrency. Great for tracing large value flows and exchange movements.'
  },
  {
    id: 'eth',
    name: 'Ethereum (ETH)',
    img: 'https://images.unsplash.com/photo-1623482562303-894fff7f4b07?auto=format&fit=crop&w=1200&q=60',
    blurb: 'Smart contract hub. Analyze DeFi interactions, NFT trades, and contract wallets.'
  },
  {
    id: 'sol',
    name: 'Solana (SOL)',
    img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=60',
    blurb: 'High-throughput chain. Follow rapid on-chain activity and program accounts.'
  }
];

const CryptoShowcase = () => {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Coins className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Popular assets to analyze</h2>
            <p className="mt-1 text-slate-600">Jump-start your research with top networks and tokens.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coins.map((c) => (
            <div key={c.id} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-900">{c.name}</h3>
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                </div>
                <p className="mt-2 text-sm text-slate-600">{c.blurb}</p>
                <a href="#track" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600">
                  Analyze now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoShowcase;
