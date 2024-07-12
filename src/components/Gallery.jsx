import React, { useState } from 'react';

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
];

function Gallery() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='w-[1000px] flex flex-col items-center justify-center'>
        {projects.map((project, index) => (
          <div className='group text-6xl border-t border-[rgb(201, 201, 201)] flex w-full justify-between items-center py-[50px] px-[100px] hover:opacity-50' key={index}>
          <h2 className='text-[60px] font-normal transition-transform group-hover:translate-x-[-10px]'>{project.title}</h2>
          <p className='text-[15px] font-light transition-transform group-hover:translate-x-[10px]'>Design & Development</p>
        </div>
        
        ))}
      </div>
      <div className='h-[350px] w-[450px] absolute bg-white flex items-center justify-center overflow-hidden'>
        <div className='imgslider h-full w-full'>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div className='h-full w-full flex items-center justify-center' style={{ backgroundColor: color }} key={`img${index}`}>
                <img className='h-auto' src={`images/${src}`} width={300} height={0} alt="images" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
