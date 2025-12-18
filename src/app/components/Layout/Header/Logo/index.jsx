import React from 'react';

const Logo = () => {
  const logoSrc = '/images/logo/logo.svg'; // Light mode logo
  const logoWhiteSrc = '/images/logo/logo-white.svg'; // Dark mode logo
  
  const handleClick = () => {
    // Scroll to top or handle navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="cursor-pointer select-none" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Light mode logo */}
      <img
        src={logoSrc}
        alt="logo"
        style={{ width: '160px', height: '50px' }}
        className="dark:hidden max-w-full h-auto"
      />
      
      {/* Dark mode logo */}
      <img
        src={logoWhiteSrc}
        alt="logo"
        style={{ width: '160px', height: '50px' }}
        className="dark:block hidden max-w-full h-auto"
      />
    </div>
  );
};

export default Logo;
