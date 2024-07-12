import React from 'react'
import { IoMdArrowUp } from "react-icons/io";

const Work = () => {
  return (
    <div className='font-[Neue] py-5 pb-20  h-full w-full'>
        <div className='lg:px-20 px-10 flex flex-col gap-10'>
            <h1 className='text-zinc-500'>Recent Work</h1>
            <div className='flex flex-col lg:flex-row flex-shrink-0 lg:justify-between gap-3 lg:p-10 py-5 lg:items-center border-t-[1px] border-zinc-600 hover:lg:px-5 hover:duration-200 transition-all hover:ease-in'>
                <a href='' className='text-4xl lg:text-6xl flex items-center gap-2'>Demo Portfolio<span className='rotate-45'><IoMdArrowUp/></span></a>
                <h3 className='lg:text-xl'>Tailwind <span className='text-indigo-600'>&</span> React</h3>
            </div>
            <div className='flex flex-col lg:flex-row flex-shrink-0 lg:justify-between gap-3 lg:p-10 py-5 lg:items-center border-t-[1px] border-zinc-600 hover:lg:px-5 hover:duration-200 transition-all hover:ease-in'>
                <a href='#' className='text-4xl lg:text-6xl flex gap-2 items-center'>My Portfolio<span className='rotate-45'><IoMdArrowUp/></span></a>
                <h3 className='lg:text-xl'>Framer <span className='text-indigo-600'>&</span> React</h3>
            </div>
        </div>
    </div>
  )
}

export default Work