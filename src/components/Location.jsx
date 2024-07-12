import React from 'react'
import flag from '../assets/images/flag.webp'

const Location = () => {
  return (
    <div className='lg:visible hidden'>
        <div className='bg-zinc-900 text-white flex lg:text-[2vw] font-[Neue] lg:p-5 p-3 rounded-r-full items-center gap-3'>
            <p>Located in the India</p>
            <div className='h-[5vh] w-[5vh] rounded-full overflow-hidden'>
              <img src={flag} alt="" />
            </div>
        </div>
    </div>
  )
}
export default Location