import React from 'react';
import heroBannerImage from '../assets/nova_kart_hero_banner.png';

const HeroBanner = () => {
  return (
    <div className="hero-banner-logo" style={{ width: '100%', height: '380px', marginBottom: '4rem', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <img src={heroBannerImage} alt="NovaKart Sale Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default HeroBanner;
