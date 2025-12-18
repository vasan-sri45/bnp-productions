import React from 'react';

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'
    >
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='pt-16 pb-10 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-midnight_text dark:text-white'>
            WHY CHOOSE US – "THE BNP DIFFERENCE"
          </h2>
        </div>

        <div className='pb-24'>
          <ul className='space-y-3 text-center font-medium md:text-lg text-base text-midnight_text dark:text-white max-w-3xl mx-auto'>
            <li>🎬 In-House Production Team</li>
            <li>🧠 Content + Strategy Under One Roof</li>
            <li>🤝 Founder-Led Relationship Model</li>
            <li>🌍 Cultural Context Meets Conversion Logic</li>
            <li>🚀 Pan-India & Global Readiness</li>
          </ul>
        </div>

        <div className='text-center'>
          <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
            BNP Media
          </strong>
          <p className='text-base text-gray dark:text-white/50'>
            Transforming Ideas Into Impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
