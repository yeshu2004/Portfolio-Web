import React from 'react';
import bgImg from '../assets/images/bg2.webp';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero2 = () => {
  const {scrollYProgress} = useScroll()
  const ani = useTransform(scrollYProgress, [0,1],[0,-500])
  return (
    <div className='h-screen w-full bg-zinc-800 relative overflow-hidden'>
      <img 
        src={bgImg} 
        alt="Background" 
        className='h-full w-full object-cover'
      />
      <div className='absolute bottom-[15vh] font-[Neue] tracking-[-1vw]'>
        <motion.div style={{x: ani}} className='flex whitespace-nowrap text-9xl lg:text-[20vw] lg:leading-[10vw]'>
          <h1 className='px-5 text-white'>I create Websites</h1>
          <h1 className='px-5 text-white'>I create Websites</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero2;
