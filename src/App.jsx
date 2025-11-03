import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import AddressSearch from './components/AddressSearch';
import FeaturesGrid from './components/FeaturesGrid';
import CryptoShowcase from './components/CryptoShowcase';
import SiteFooter from './components/SiteFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSplineCover />
      <AddressSearch />
      <CryptoShowcase />
      <FeaturesGrid />
      <SiteFooter />
    </div>
  );
};

export default App;
