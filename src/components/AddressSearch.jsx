import React, { useMemo, useState } from 'react';
import { Search, ShieldCheck, AlertTriangle, Copy, CheckCircle2, ChevronRight } from 'lucide-react';

const NETWORKS = [
  { id: 'ethereum', label: 'Ethereum' },
  { id: 'polygon', label: 'Polygon' },
  { id: 'arbitrum', label: 'Arbitrum' },
  { id: 'optimism', label: 'Optimism' },
];

const formatAddress = (addr) => {
  if (!addr) return '';
  const s = String(addr);
  return s.length > 12 ? `${s.slice(0, 6)}…${s.slice(-6)}` : s;
};

const AddressSearch = () => {
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('ethereum');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const riskLevel = useMemo(() => {
    if (!submitted) return null;
    const code = [...address].reduce((acc, c) => acc + c.charCodeAt(0), 0) + network.length;
    const levels = ['Low', 'Medium', 'High'];
    return levels[code % levels.length];
  }, [submitted, address, network]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!address.trim()) return;
    setSubmitted(true);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section id="track" className="relative w-full bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Start tracking an address
          </h2>
          <p className="mt-3 text-slate-600">
            Paste any wallet, contract, or exchange address. Multi-chain support out of the box.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 md:p-6"
        >
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex-1 relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="0x… or domain (ENS)"
                className="w-full rounded-xl border border-slate-200 pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 text-slate-900 placeholder:text-slate-400"
              />
              {address && (
                <button
                  type="button"
                  onClick={onCopy}
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-slate-600 hover:bg-slate-50 border border-slate-200"
                  aria-label="Copy address"
                >
                  {copied ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {NETWORKS.map((n) => (
                <button
                  type="button"
                  key={n.id}
                  onClick={() => setNetwork(n.id)}
                  className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                    network === n.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-3 font-medium shadow hover:bg-blue-500"
              >
                Analyze
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {submitted && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                <p className="text-xs uppercase tracking-wide text-slate-500">Address</p>
                <p className="mt-1 font-mono text-slate-900">{formatAddress(address)}</p>
                <p className="mt-1 text-xs text-slate-500">Network: {network}</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 flex items-center gap-3">
                {riskLevel === 'Low' && <ShieldCheck className="h-5 w-5 text-emerald-600" />}
                {riskLevel === 'Medium' && <ShieldCheck className="h-5 w-5 text-amber-600" />}
                {riskLevel === 'High' && <AlertTriangle className="h-5 w-5 text-rose-600" />}
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Risk</p>
                  <p className="font-medium text-slate-900">{riskLevel} risk</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                <p className="text-xs uppercase tracking-wide text-slate-500">Summary</p>
                <p className="mt-1 text-slate-700">Sample metrics preview. Connect your backend to display live flows and balances.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddressSearch;
