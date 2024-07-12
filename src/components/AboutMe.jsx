import React from 'react'
const text= "I am a dedicated and aspiring front end developer with a passion for creating user-friendly web applications. Over the past 1-2 years, I have honed my skills by creating various clones of popular websites and applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a pursuit where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";

const AboutMe = () => {
  return (
    <div className='h-screen w-full font-[Neue]'>
      <div className='px-10 lg:px-20'>
        <p className='py-5 text-zinc-500'>About Me</p>
        <p>
          {
            text.split(" ").map((word,i)=>{
              return(
                <span className='text-[2rem] inline-flex mr-2'>{word}</span>
              )
            })
          }
        </p>
      </div>
    </div>
  )
}

export default AboutMe