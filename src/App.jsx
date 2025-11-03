import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import TickerMarquee from './components/TickerMarquee';
import AddressSearch from './components/AddressSearch';
import CryptoShowcase from './components/CryptoShowcase';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSplineCover />
      <TickerMarquee />
      <AddressSearch />
      <CryptoShowcase />
    </div>
  );
};

export default App;
