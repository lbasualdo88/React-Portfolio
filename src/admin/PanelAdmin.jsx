import React from 'react'
import usePortafolio from "../hooks/usePortafolio"
import useBlog from '../hooks/useBlog';

export default function PanelAdmin() {

  const { post } = useBlog();
  const { proyectos } = usePortafolio()

  console.log(post)
  console.log(proyectos)


const cantidadProyectos = proyectos.length;
const cantidadPost = post.length;


  return (
    <>
    <div className='flex h-[78vh] dark:bg-dark-color2'>
      <div className='grid grid-cols-2 gap-48 m-auto p-12 justify-center items-center'>

        <div className='bg-violet-500 w-[42rem] h-auto p-24 rounded-lg flex flex-col items-center gap-4'>
            <h2 className='text-color1  text-5xl'>Proyectos Publicados</h2>
            <span  className='text-color1 font-bold text-5xl text-center py-4 my4'>{cantidadProyectos}</span>
        </div>
        <div className='bg-orange-400 w-[42rem] h-auto p-24 rounded-lg flex flex-col items-center gap-4'>
        <h2 className='text-color1  text-5xl'>Post Publicados</h2>
        <span  className='text-color1 font-bold text-5xl text-center py-4 my4'>{cantidadPost}</span>
        </div>
      </div>
    </div>
    </>
  )
}
