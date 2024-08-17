import { createRef } from "react";

export default function Busqueda({ onBuscar }) {

    const categoriaRef = createRef();
    const fechaRef = createRef();  // Nueva referencia para la fecha

    const handleSubmit = (e) => {
        e.preventDefault();
        const datos = {
            categoria: categoriaRef.current.value,
            fecha: fechaRef.current.value  // Captura la fecha seleccionada
        }
        onBuscar(datos);
    }

    return (
        <>
            <div className="bg-gray-100 py-10 dark:bg-dark-color1">
                <h2 className="text-4xl md:text-5xl text-gray-600 text-center font-extrabold my-5 dark:text-dark-color8">Buscar y Filtrar Publicaciones</h2>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <form 
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                            <div className="mb-5 w-full">
                                <label className="block mb-1 text-xl text-gray-700 uppercase font-bold dark:text-dark-color5">Por Categoría</label>
                                <select className="border-gray-300 p-2 w-full dark:bg-dark-color3 dark:text-dark-color5 " ref={categoriaRef}>
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
                                    <option>Soft Skills</option>                      
                                    <option>Otro</option>                      
                                </select>
                            </div>
                            <div className="mb-5 w-full">
                                <label className="block mb-1 text-xl text-gray-700 uppercase font-bold dark:text-dark-color5">Por Fecha</label>
                                <input 
                                    type="date" 
                                    className="border-gray-300 p-2 w-full dark:bg-dark-color3 dark:text-dark-color5" 
                                    ref={fechaRef} 
                                />
                            </div>
                        <div className="w-full">
                            <input 
                                type="submit"
                                className="dark:bg-dark-color1 dark:hover:shadow-button-dark border-2 border-solid hover:border-color7 hover:bg-color1 bg-color7 transition-colors hover:text-color7 text-color1 text-xl font-bold px-10 py-4  rounded-xl cursor-pointer uppercase w-full md:w-auto"
                                value="Buscar"
                            />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
