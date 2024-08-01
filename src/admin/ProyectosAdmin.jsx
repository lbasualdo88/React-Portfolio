import usePortafolio from "../hooks/usePortafolio"

export default function ProyectosAdmin() {

    const { proyectos } = usePortafolio()

  return (
    <>
    <div className="bg-gray-200 dark:bg-dark-color1 p-8  flex flex-col h-screen">
        <div className="w-auto  p-8">
            <h1 className="text-center text-bold font-krub text-color8 uppercase text-4xl dark:text-dark-color8">Mis Proyectos</h1>
        </div>
        <div className="sm:grid sm:grid-cols-2">
            {proyectos.map((proyecto, index) => {
                return (
                    <section key={index}  className="m-8 p-8 shadow-custom bg-color1 rounded-lg dark:bg-dark-color1 dark:shadow-custom-dark">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <h2 className="font-bold text-3xl text-color8 dark:text-dark-color8">{proyecto.title}</h2>
                                <span className="text-2xl text-color5 dark:text-dark-color5">{proyecto.categoria}</span>              
                                <span className="text-2xl text-color5 dark:text-dark-color5">{proyecto.tipo}</span>              
                            </div>
                            <div className="flex gap-4">
                                <a className="text-2xl font-bold py-3 px-8 rounded-xl uppercase bg-green-600 text-color1" href="#">Editar</a>
                                <button className="text-2xl font-bold py-3 px-8 rounded-xl uppercase bg-red-700 text-color1">Eliminar</button>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    </div>
    </>
  )
}
