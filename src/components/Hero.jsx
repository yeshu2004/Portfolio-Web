import React from 'react'
import bgImg from "../assets/images/bg2.webp"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
        <div className='h-screen w-full relative overflow-hidden font-[Neue]'>
            <div className='h-screen w-full overflow-hidden'>
                <img className='bg-cover bg-center' src={bgImg} alt="" />
            </div>
            <div className='absolute bottom-0 text-white'>
                    <div className='flex'>
                        {
                            [1,2,3].map((elem,i)=>{
                                return(
                                        <motion.p className='text-[14vw] tracking-tighter flex-shrink-0 px-6' initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ repeat: Infinity , ease: 'linear', duration: 10}}>Front-End Developer</motion.p>
                                )
                            })
                        }  
                    </div>
            </div>
        </div>
  )
}

export default Hero