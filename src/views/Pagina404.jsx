import { Link } from "react-router-dom"
import { TbError404 } from "react-icons/tb";

export default function Pagina404() {
  return (
    <>
    <main className="grid w-full h-screen p-20 bg-color9 dark:bg-dark-color1">
      <div className="border-solid border-2 border-color8 rounded-xl shadow-custom dark:border-color7 dark:shadow-custom-dark p-20 h-auto">
        <div className='flex flex-col justify-center items-center gap-8 pt-12'>  
        <p className='text-center pt-4 text-4xl text-color8 dark:text-color7'>Esta pagina no existe</p>
        <TbError404 
          className="w-80 h-auto text-color8 dark:text-color7"
        />
        <Link className='border-solid border-2 border-color8 text-3xl text-color8 dark:bg-dark-color1 dark:border-color7 dark:text-color7 dark:hover:border-dark-color10 dark:hover:shadow-hover-dark hover:text-color7 hover:border-color7 dark:hover:text-dark-color10 px-8 py-2 rounded-xl uppercase font-bold m-auto' to="/">Volver</Link>
        </div>
      </div>
    </main>
    </>
  )
}
