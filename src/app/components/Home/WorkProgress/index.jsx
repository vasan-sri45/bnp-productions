"use client"
import React, { useState } from 'react';

const Progresswork = ({ isColorMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className={`scroll-mt-20 ${
        isColorMode ? 'dark:bg-darklight bg-section' : 'dark:bg-darkmode bg-white'
      }`}
      id='about'
    >
      <div className='container mx-auto max-w-6xl px-4'>

        {/* Section Title */}
        <div className='text-center pb-10'>
          <span className='w-3 h-3 inline-block rounded-full bg-success mr-2'></span>
          <span className='font-medium text-midnight_text text-xs sm:text-sm dark:text-white/50'>
            Brands deserve better
          </span>

          <h2 className='pt-4 text-2xl sm:text-4xl leading-snug font-bold text-midnight_text dark:text-white'>
            Great products deserve visibility.
          </h2>
          <p className='text-gray dark:text-white/70 text-sm sm:text-base font-medium mt-3'>
            We transform struggling brands into market leaders with content that converts.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-2 gap-6 md:gap-10 pt-2'>

          {/* BEFORE / AFTER CARD */}
          <div className='bg-white dark:bg-darklight rounded-xl p-6 sm:p-8 shadow-xl border border-gray/10 dark:border-white/10'>
            <h3 className='text-lg sm:text-xl font-bold text-red-600 dark:text-red-400 mb-4'>❌ BEFORE</h3>
            <ul className='space-y-2 sm:space-y-3 text-gray dark:text-white/70 text-sm sm:text-base font-medium'>
              <li>Weak storytelling</li>
              <li>No digital funnel</li>
              <li>Low brand visibility</li>
              <li>Wasted marketing budget</li>
            </ul>

            <div className='w-full h-0.5 bg-gray/20 my-4 sm:my-6'></div>

            <h3 className='text-lg sm:text-xl font-bold text-green-600 dark:text-green-400 mb-4'>✅ AFTER</h3>
            <ul className='space-y-2 sm:space-y-3 text-gray dark:text-white/70 text-sm sm:text-base font-medium'>
              <li>Clear brand messaging</li>
              <li>Automated funnel systems</li>
              <li>High visibility + engagement</li>
              <li>Better ROI on every rupee spent</li>
            </ul>
          </div>

          {/* FLIP CARD */}
          <div 
            className='group perspective cursor-pointer h-auto'
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div 
              className='relative preserve-3d w-full h-full min-h-[340px] sm:min-h-[400px] transition-transform duration-700'
              style={{ 
                transform: `rotateY(${isFlipped ? '180deg' : '0deg'})`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Front */}
              <div 
                className='absolute inset-0 bg-white dark:bg-darklight rounded-xl p-6 sm:p-8 shadow-xl backface-hidden overflow-y-auto transition-transform duration-700'
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-4'>
                  The Problem
                </h3>
                <p className='text-gray dark:text-white/70 text-sm sm:text-base font-medium leading-relaxed'>
                  Brands with great products still fail online due to poor strategy. Many businesses invest time in creating exceptional products — but without the right strategy, they get lost in the noise.
                </p>
              </div>

              {/* Back */}
              <div 
                className='absolute inset-0 bg-darklight text-white rounded-xl p-6 sm:p-8 shadow-xl overflow-y-auto transition-transform duration-700'
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <h3 className='text-xl font-bold mb-4'>The Solution</h3>
                <p className='text-white/90 text-sm sm:text-base font-medium leading-relaxed'>
                  Performance-led content that drives conversions and visibility.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Progresswork;
