import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const text = "I can help you with...";

const fade = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5, delay: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.5, delay: 0.7 } }
};

const reveal = {
  start: { y: "200%" },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: i * 0.01 }
  }),
  exit: { y: "100%", transition: { duration: 0.5 } }
};

const Help = () => {
  const elem = useRef(null);
  const isInView = useInView(elem);

  return (
    <div ref={elem} className='w-full font-[Neue] bg-indigo-600 text-[#D0FE1D]'>
      <div className='lg:px-20 pt-12 pb-32 px-10 flex flex-col gap-12'>
        <p>
          {text.split(" ").map((word, i) => (
            <span key={i} className='relative overflow-hidden inline-flex'>
              <motion.span
                variants={reveal}
                initial="start"
                animate={isInView ? "open" : "exit"}
                custom={i}
                className='text-[3.6rem] mr-[10px] leading-none lg:leading-[1.2]'
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.div
          variants={fade}
          initial="initial"
          animate={isInView ? "enter" : "exit"}
          className='flex flex-col lg:flex-row gap-10 py-10'
        >
          <div className='lg:w-1/3 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p>01</p>
              <div className='w-full h-[1px] bg-white'></div>
            </div>
            <motion.h2
              whileHover={{ rotateX: 360, transition: { duration: 0.5 } }}
              className='text-5xl w-fit'
            >
              Design
            </motion.h2>
            <p className='text-xl text-white'>
              With a proven history of designing websites, I create robust and user-friendly digital experiences.
            </p>
          </div>
          <div className='lg:w-1/3 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p>02</p>
              <div className='w-full h-[1px] bg-white'></div>
            </div>
            <motion.h2
              whileHover={{ rotateX: 360, transition: { duration: 0.5 } }}
              className='text-5xl w-fit'
            >
              Development
            </motion.h2>
            <p className='text-xl text-white'>
              I specialize in building scalable websites from scratch that seamlessly integrate with design. My focus is on creating engaging experiences through micro animations, transitions, and interactions.
            </p>
          </div>
          <div className='lg:w-1/3 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p>03</p>
              <div className='w-full h-[1px] bg-white'></div>
            </div>
            <motion.h2
              whileHover={{ rotateX: 360, transition: { duration: 0.5 } }}
              className='text-5xl w-fit'
            >
              Full Package
            </motion.h2>
            <p className='text-xl text-white'>
              I offer a comprehensive service that covers both design and development, ensuring your project is cohesive and high-quality from start to finish.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
