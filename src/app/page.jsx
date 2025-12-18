import React from 'react';
import Hero from './components/Home/Hero';
import Counter from './components/Home/Counter';
import Progresswork from './components/Home/WorkProgress';
import Services from './components/Home/Service';
import Portfolio from './components/SharedComponent/portfolio';
import Testimonial from './components/SharedComponent/Testimonial';
import Blog from './components/SharedComponent/Blog';
import Contactform from './components/Home/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contactform />
    </main>
  );
};

export default Home;
