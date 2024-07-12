import React, { useEffect } from 'react';
import Hero2 from './components/Hero2';
import RevelText from './components/RevelText';
import Blank from './components/Blank';
import Lenis from 'lenis'
import Work from './components/Work';
import Help from './components/Help';
import Footer from './components/Footer';

function App() {
useEffect(()=>{
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
  return (
    <div className='h-full w-full'>
      <Hero2 />
      <RevelText />
      <Work/>
      <Help/>
      <Footer/>
    </div>
  );
}

export default App;
