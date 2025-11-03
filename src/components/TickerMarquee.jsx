import React from 'react';
import { ArrowUpRight, ArrowDownRight, Coins } from 'lucide-react';

const TOP10 = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67850, change: 1.8 },
  { symbol: 'ETH', name: 'Ethereum', price: 3450, change: -0.6 },
  { symbol: 'USDT', name: 'Tether', price: 1.0, change: 0.01 },
  { symbol: 'BNB', name: 'BNB', price: 590.4, change: 0.9 },
  { symbol: 'SOL', name: 'Solana', price: 156.2, change: 3.1 },
  { symbol: 'XRP', name: 'XRP', price: 0.62, change: 2.4 },
  { symbol: 'USDC', name: 'USD Coin', price: 1.0, change: -0.01 },
  { symbol: 'ADA', name: 'Cardano', price: 0.42, change: -1.2 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.17, change: 5.8 },
  { symbol: 'AVAX', name: 'Avalanche', price: 29.1, change: -2.1 },
];

const formatPrice = (n) => {
  if (n >= 1000) return `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const TickerItem = ({ c }) => {
  const up = c.change >= 0;
  return (
    <div className="mx-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
      <span className="font-semibold text-slate-900">{c.symbol}</span>
      <span className="hidden sm:inline text-slate-500">{formatPrice(c.price)}</span>
      <span className={`inline-flex items-center gap-1 text-sm font-medium ${up ? 'text-emerald-600' : 'text-rose-600'}`}>
        {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {up ? '+' : ''}{c.change.toFixed(2)}%
      </span>
    </div>
  );
};

const TickerMarquee = () => {
  // Duplicate for seamless scroll
  const track = [...TOP10, ...TOP10];

  return (
    <section aria-label="Top crypto marquee" className="relative w-full bg-white">
      {/* local keyframes for seamless, portable marquee */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto max-w-[100vw] overflow-hidden border-y border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex items-center gap-3 px-4 py-3 text-slate-600">
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Coins className="h-4 w-4" />
          </div>
          <p className="text-sm font-medium">Live market ticker (sample data)</p>
        </div>
        <div className="relative">
          <div
            className="whitespace-nowrap will-change-transform"
            style={{
              display: 'inline-block',
              animation: 'marqueeScroll 30s linear infinite',
            }}
          >
            {track.map((c, i) => (
              <TickerItem c={c} key={`${c.symbol}-${i}`} />
            ))}
          </div>
          {/* duplicate layer to ensure continuous content width coverage */}
          <div
            className="whitespace-nowrap will-change-transform"
            style={{
              display: 'inline-block',
              animation: 'marqueeScroll 30s linear infinite',
              position: 'absolute',
              left: '100%',
              top: 0,
            }}
          >
            {track.map((c, i) => (
              <TickerItem c={c} key={`dup-${c.symbol}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TickerMarquee;
