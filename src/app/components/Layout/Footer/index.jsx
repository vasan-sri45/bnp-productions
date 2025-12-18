import React from 'react';

const Footer = () => {
  const logoSrc = '/images/logo/logo-white.svg'; // Replace with your logo path
  
  const handleScrollTo = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          {/* Logo & CTA Section */}
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0'>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
              <div 
                className='md:block flex justify-center cursor-pointer'
                onClick={() => handleScrollTo('/')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleScrollTo('/')}
              >
                <img
                  src={logoSrc}
                  alt='logo'
                  style={{ width: '160px', height: '50px' }}
                  className='max-w-full h-auto'
                />
              </div>
              <h2 className='text-white py-10 text-[40px] leading-tight font-bold'>
                Ready to get started?
              </h2>
              <button
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none transition-all'
                onClick={() => handleScrollTo('#contact')}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Support
              </span>
              <div className='pb-5 sm:block flex'>
                <p className='text-base font-bold text-white'>Phone</p>
                <a
                  href='tel:9566788991'
                  className='text-2xl text-white/50 hover:text-white transition-colors'
                >
                  95667 88991 | 95001 92370
                </a>
              </div>
              <div className='sm:block flex items-center gap-3'>
                <p className='text-base font-bold text-white'>Email</p>
                <a
                  href='mailto:productionsbnp@gmail.com'
                  className='text-2xl text-white/50 hover:text-white transition-colors'
                >
                  productionsbnp@gmail.com
                </a>
              </div>
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem]'>
                  <li className='group'>
                    <a 
                      href='https://www.facebook.com/profile.php?id=61577876991774'
                      onClick={(e) => {
                        e.preventDefault();
                        handleExternalLink('https://www.facebook.com/profile.php?id=61577876991774');
                      }}
                    >
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary transition-colors'
                      >
                        <g clipPath='url(#clip0_1_343)'>
                          <path d='M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_343'>
                            <rect width='25' height='25' />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className='group'>
                    <a 
                      href='https://www.instagram.com/brewnplay_productions'
                      onClick={(e) => {
                        e.preventDefault();
                        handleExternalLink('https://www.instagram.com/brewnplay_productions');
                      }}
                    >
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="#A3BBD1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:fill-primary transition-colors"
                      >
                        <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
                      </svg>
                    </a>
                  </li>
                  <li className='group'>
                    <a href='#' className='group-hover:fill-primary transition-colors'>
                      <svg
                        width='22'
                        height='23'
                        viewBox='0 0 22 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary transition-colors'
                      >
                        <g clipPath='url(#clip0_1_347)'>
                          <path d='M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_347'>
                            <rect width='22' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className='md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0'>
            <div className='md:w-3/4 w-full sm:text-start text-center'>
              <span className='font-bold text-white pb-4 inline-block text-2xl'>
                Location
              </span>
              <p className='text-MistyBlue text-base pb-7 text-white/50'>
                Chennai | India-Wide | Available for Travel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <span 
                className='hover:text-primary cursor-pointer transition-colors'
                onClick={() => handleScrollTo('#about')}
              >
                About
              </span>
            </li>
            <li className='text-base text-white/50'>
              <span 
                className='hover:text-primary cursor-pointer transition-colors'
                onClick={() => handleScrollTo('#services')}
              >
                Services
              </span>
            </li>
            <li className='text-base text-white/50'>
              <span className='hover:text-primary cursor-pointer transition-colors'>Our Works</span>
            </li>
            <li className='text-base text-white/50'>
              <span className='hover:text-primary cursor-pointer transition-colors'>Blog</span>
            </li>
            <li className='text-base text-white/50'>
              <span 
                className='hover:text-primary cursor-pointer transition-colors'
                onClick={() => handleScrollTo('#contact')}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © All rights reserved. Designed by{' '}
            <a
              href='https://yettostart.online/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              Yet to Start
            </a>{' '}
            • Distributed by{' '}
            <a
              href='https://yettostart.online/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              Yet to Start
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
