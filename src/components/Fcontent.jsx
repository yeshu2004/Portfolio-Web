import React, { useRef } from 'react'
import { IoMdArrowUp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Time from './Time';
import { motion, useScroll, useTransform } from 'framer-motion';

const Fcontent = () => {

    const elem = useRef();
    const {scrollYProgress} = useScroll({
        target: elem,
        offset: ["start end", "end start"]
    })
    const x = useTransform(scrollYProgress,[0,1],[0 ,300])
  return (
    <div ref={elem} className='bg-zinc-900 text-white h-full w-full font-[Neue]'>
        <div className='lg:px-20 px-10 pt-20 lg:pt-40 relative'>
                <div className='flex justify-between items-center '>
                    <h1 className='lg:text-9xl text-[3.5rem] tracking-tighter leading-none'>Let's Work Together</h1>
                    <span className='lg:text-5xl text-3xl -rotate-[125deg]'><IoMdArrowUp/></span>
                </div>
                <div className='relative py-28 lg:py-32'>
                    <div className='bg-zinc-500 h-[1px] w-full relative'></div>
                    <motion.div style={{x: x,translateY: "-50%"}} className='bg-indigo-600 lg:h-[14rem] h-[8.5rem] lg:w-[14rem] w-[8.5rem] rounded-full absolute flex items-center lg:right-[250px] justify-center lg:text-2xl'>Get in touch</motion.div>
                </div>
                <div className='flex lg:flex-row flex-col items-center lg:gap-10 gap-5'>
                    <div className='px-4 py-3 lg:text-xl border rounded-full w-fit'>work.yeshuagarwal@gmail.com</div>
                    <div className='px-4 py-3 lg:text-xl border rounded-full w-fit'>
                        +91 - 9354872684
                    </div>
                </div>
                <div className='flex items-center justify-between py-10'>
                    <Time/>                  
                    <div className='flex gap-5 text-2xl'>
                        <span><FaLinkedinIn/></span>
                        <span><FaXTwitter /></span>
                        <span><FaInstagram /></span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Fcontent