import React, { useMemo } from 'react';
import { Coins, TrendingUp, ArrowRight } from 'lucide-react';

const DATA = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67850, change: 1.8 },
  { symbol: 'ETH', name: 'Ethereum', price: 3450, change: -0.6 },
  { symbol: 'SOL', name: 'Solana', price: 156.2, change: 3.1 },
  { symbol: 'BNB', name: 'BNB', price: 590.4, change: 0.9 },
  { symbol: 'XRP', name: 'XRP', price: 0.62, change: 2.4 },
  { symbol: 'ADA', name: 'Cardano', price: 0.42, change: -1.2 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.17, change: 5.8 },
  { symbol: 'DOT', name: 'Polkadot', price: 6.45, change: -0.3 },
  { symbol: 'MATIC', name: 'Polygon', price: 0.88, change: 1.2 },
  { symbol: 'LINK', name: 'Chainlink', price: 14.56, change: 0.4 },
  { symbol: 'AVAX', name: 'Avalanche', price: 29.1, change: -2.1 },
  { symbol: 'TRX', name: 'TRON', price: 0.12, change: 0.2 },
  { symbol: 'LTC', name: 'Litecoin', price: 84.2, change: -0.9 },
];

const formatPrice = (n) => {
  if (n >= 1000) return `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const CryptoShowcase = () => {
  // Slight shuffle for visual freshness without relying on backend
  const rows = useMemo(() => {
    return [...DATA].sort((a, b) => a.symbol.localeCompare(b.symbol));
  }, []);

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Coins className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Crypto market list</h2>
              <p className="mt-1 text-slate-600">Browse a wider set of assets. Click any to analyze activity.</p>
            </div>
          </div>
          <a href="#track" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600">
            Analyze an address
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-50">
            <div className="col-span-4 sm:col-span-5">Asset</div>
            <div className="col-span-4 sm:col-span-3">Price</div>
            <div className="col-span-2 sm:col-span-2">24h</div>
            <div className="col-span-2 sm:col-span-2 text-right">Action</div>
          </div>
          <div className="max-h-[520px] overflow-auto">
            {rows.map((c) => {
              const up = c.change >= 0;
              return (
                <div
                  key={c.symbol}
                  className="grid grid-cols-12 items-center px-4 py-4 border-t border-slate-100 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="col-span-4 sm:col-span-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-700">
                      {c.symbol.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.symbol}</p>
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-3 font-mono text-slate-900">{formatPrice(c.price)}</div>
                  <div className={`col-span-2 sm:col-span-2 flex items-center gap-1 font-medium ${up ? 'text-emerald-600' : 'text-rose-600'}`}> 
                    <TrendingUp className={`h-4 w-4 ${up ? '' : 'rotate-180'}`} />
                    {up ? '+' : ''}{c.change.toFixed(2)}%
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-right">
                    <a href="#track" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600">
                      Analyze
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoShowcase;
