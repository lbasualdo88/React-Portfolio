import { createRef, useState } from "react"

export default function Busqueda({ onBuscar }) {

    const tituloRef = createRef();
    const tipoRef = createRef();
    const categoriaRef = createRef();
    const tecnologiaRef = createRef();

   const handleSubmit = (e) => {

    e.preventDefault();
    const datos = {

         titulo : tituloRef.current.value,
         tipo : tipoRef.current.value,
         categoria : categoriaRef.current.value,
         tecnologia : tecnologiaRef.current.value,
    }

    onBuscar(datos)
    }
  return (
    <>
        <div className="bg-gray-100 py-10 dark:bg-dark-color1">
    <h2 className="text-4xl md:text-5xl text-gray-600 text-center font-extrabold my-5 dark:text-dark-color8">Buscar y Filtrar Proyectos</h2>

    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <form 
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="md:grid md:grid-cols-4 gap-5">
                <div className="mb-5">
                    <label 
                        className="block mb-1 text-xl text-gray-700 uppercase font-bold dark:text-dark-color5"
                        htmlFor="termino">Titulo del Proyecto
                    </label>
                    <input 
                        id="termino"
                        type="text"
                        placeholder="Ej. Devstagram"
                        className=" dark:bg-dark-color3 dark:text-dark-color5 rounded-md p-2 shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"
                        ref={tituloRef}                    
                        />
                </div>

                <div className="mb-5">
                    <label className="block mb-1 text-xl text-gray-700 uppercase font-bold dark:text-dark-color5">Tipo de Proyecto</label>
                    <select className="border-gray-300 p-2 w-full dark:bg-dark-color3 dark:text-dark-color5 " ref={tipoRef}>
                        <option>--Seleccione--</option>
                            <option>Academicos</option>
                            <option>Propios</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label className="block mb-1 text-xl text-gray-700 uppercase font-bold dark:text-dark-color5">Categoria</label>
                    <select className="border-gray-300 p-2 w-full dark:bg-dark-color3 dark:text-dark-color5 " ref={categoriaRef}>
                        <option>--Seleccione--</option>
                            <option>Full Stack</option>
                            <option>Back End</option>
                            <option>Front End</option>                       
                    </select>
                </div>

                <div className="mb-5">
                    <label className="block mb-1 text-xl text-gray-700 uppercase font-bold dark:text-dark-color5">Por Tecnologia</label>
                    <select className="border-gray-300 p-2 w-full dark:bg-dark-color3 dark:text-dark-color5 " ref={tecnologiaRef}>
                        <option>-- Seleccione --</option>
                       
                            <option>Laravel</option>
                            <option>JavaScript</option>
                            <option>React</option>                      
                            <option>HTML</option>                      
                            <option>CSS</option>                      
                            <option>PHP</option>                      
                            <option>Tailwind</option>                      
                            <option>SASS</option>                      
                            <option>StyledComponents</option>                      
                            <option>NodeJS</option>                      
                            <option>Gulp</option>                      
                            <option>MySQL</option>                      
                    </select>
                </div>
            </div>

            <div className="flex justify-end">
                <input 
                    type="submit"
                    className="dark:bg-dark-color1 dark:hover:shadow-button-dark border-2 border-solid hover:border-color7 hover:bg-color1 bg-color7 transition-colors hover:text-color7 text-color1 text-xl font-bold px-10 py-2 rounded-xl cursor-pointer uppercase w-full md:w-auto"
                    value="Buscar"
                />
            </div>
        </form>
    </div>
</div>
    </>
  )
}
