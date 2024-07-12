import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const phrase = "Elevating brands to prominence in the digital era. Together, we will establish a new standard. Direct and innovative, always at the forefront.";

const reveal = {
  start: { y: "200%" },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: i * 0.01 }
  }),
  exit: {
    y: "100%",
    transition: { duration: 0.5 }
  }
};

const fade = {
  start: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.15 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const RevelText = () => {
  const text = useRef(null);
  const isInView = useInView(text);

  const btn = useRef(null);
  const { scrollYProgress } = useScroll({
    target: btn,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className='h-screen w-full font-[Neue] relative'>
      <div className='h-full w-full flex items-center justify-center lg:px-[6vw] px-10 lg:flex-row flex-col gap-20'>
        <p ref={text}>
          {phrase.split(" ").map((word, i) => (
            <span key={i} className='relative overflow-hidden inline-flex leading-[1.1]'>
              <motion.span
                variants={reveal}
                initial="start"
                animate={isInView ? "open" : "exit"}
                custom={i}
                className='mr-[5px] text-[2rem] lg:text-[3.6rem]'
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.div variants={fade} initial="start" animate={isInView ? "open" : "closed"} className='text-xl'>
          My deep passion for design, coding, and interactive experiences uniquely positions me as a distinguished professional in the web design industry.
        </motion.div>
        <motion.div ref={btn} style={{ y }} whileHover={{ backgroundColor: "rgb(0, 0, 255)" }} className='absolute z-10 bg-zinc-900 lg:h-[13rem] lg:w-[13rem] h-[7rem] w-[7rem] lg:bottom-[1vw] bottom-[200px] right-[10vw] rounded-full flex items-center justify-center'>
          <p className='text-white lg:text-2xl'>
            About Me
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RevelText;
