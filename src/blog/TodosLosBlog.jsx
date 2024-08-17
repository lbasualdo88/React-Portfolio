import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useBlog from '../hooks/useBlog';
import BusquedaBlog from '../blog/BusquedaBlog';

export default function TodosLosBlog() {
    const { post: posts } = useBlog(); // Renombrar 'post' a 'posts'
    const [filtros, setFiltros] = useState({});
    const [loading, setLoading] = useState(true);  // Estado para controlar la carga de la imagen

    const baseURL = import.meta.env.VITE_API_URL;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); 
    };

    const handleBuscar = (datos) => {
        setFiltros(datos);
    };

    const filtrarPublicaciones = (posts) => { // Cambiar el parámetro a 'posts'
        const { categoria, fecha } = filtros;

        // Ordenar publicaciones por fecha de publicación (de la más reciente a la más antigua)
        let publicacionesFiltradas = [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Aplicar filtro por categoría si está seleccionado
        if (categoria && categoria !== "-- Seleccione --") {
            publicacionesFiltradas = publicacionesFiltradas.filter(p => p.categoria === categoria);
        }

        // Aplicar filtro por fecha si está seleccionada
        if (fecha) {
            publicacionesFiltradas = publicacionesFiltradas.filter(p => new Date(p.created_at).toISOString().split('T')[0] === fecha);
        }

        return publicacionesFiltradas;
    }

    return (
        <>
            <BusquedaBlog
                onBuscar={handleBuscar}
            />
            <div className="bg-color1 dark:bg-dark-color1 p-8 flex flex-col h-full">
                <div className="w-auto p-8">
                    <h1 className="text-center text-bold font-krub text-color8 uppercase text-4xl dark:text-dark-color8">Mis Post</h1>
                </div>
                <div className="flex flex-col">
                    {filtrarPublicaciones(posts).map((post, index) => { // Cambiar 'post' a 'posts'
                        const img = `${baseURL}/${post.images[0].image_path}`;
                        return (
                            <section key={index} className="m-8 p-8 shadow-custom bg-color1 rounded-lg dark:bg-dark-color1 dark:shadow-custom-dark">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className='flex flex-col'>
                                            <h2 className="font-bold text-4xl text-color8 dark:text-dark-color8 text-center py-8">{post.title}</h2>
                                            <span className="text-3xl text-color5 dark:text-dark-color5 py-4 font-bold">Categoría: {post.categoria}</span>
                                            <span className="text-3xl text-color5 dark:text-dark-color5 py-4 font-bold">Fecha: {formatDate(post.created_at)}</span>                              
                                            <div className="text-2xl text-color5 dark:text-dark-color5 pt-4" dangerouslySetInnerHTML={{ __html: post.content }} />
                                        </div>

                                        {/* Contenedor de la imagen con spinner */}
                                        <div className="relative">
                                            {loading && (
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>  {/* Spinner de Tailwind */}
                                                </div>
                                            )}
                                            <img 
                                                src={img} 
                                                alt={`imagen ${index}`} 
                                                className={`m-auto w-auto h-auto text-color1 ${loading ? 'opacity-0' : 'opacity-100'}`} 
                                                onLoad={() => setLoading(false)} 
                                                onError={() => setLoading(false)}  // Oculta el spinner si hay un error al cargar la imagen
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className='flex m-auto w-80'>
                                    <Link
                                        className="m-auto boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
                                        to={`/blog/${post.id}`}>Leer
                                    </Link>                  
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
