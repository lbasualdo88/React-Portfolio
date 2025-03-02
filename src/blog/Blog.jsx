import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBlog from '../hooks/useBlog';

export default function Blog() {
    const { id } = useParams(); // Obtener el ID del post desde la URL
    const { post: posts } = useBlog(); // Renombrar 'post' a 'posts'
    const baseURL = import.meta.env.VITE_API_URL;

    const [loading, setLoading] = useState({});  // Estado para controlar la carga de múltiples imágenes
    const [post, setPost] = useState(null); // Estado para el post específico

    useEffect(() => {
        // Filtrar el post que coincide con el ID
        setPost(posts.find(p => p.id === parseInt(id, 10)));
    }, [id, posts]);

    const createContentWithImages = (post) => {
        let description = post.description; 

        if (post.images && post.images.length > 0) {
            post.images.forEach((image, index) => {
                const regex = new RegExp(`\\{imagen\\[${index}\\]\\}`, 'g');

                // Generar HTML para la imagen con spinner
                const imageTag = `
                    <div class="relative">
                        <div class="spinner-container-${index}">
                            ${loading[index] ? `
                                <div class="absolute inset-0 flex justify-center items-center">
                                    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                                </div>` : ''}
                        </div>
                        <img src="${baseURL}/${image.image_path}" 
                            alt="imagen ${index}" 
                            class="m-auto py-4 opacity-${loading[index] ? '0' : '100'} max-w-full h-auto object-contain"
                            onload="document.querySelector('.spinner-container-${index}').innerHTML = '';"
                            onerror="document.querySelector('.spinner-container-${index}').innerHTML = '';"
                        />
                    </div>
                `;
                
                description = description.replace(regex, imageTag);
            });
        }
        return description;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); 
    };

    if (!post) {
        return <p>Cargando...</p>; // Mensaje de carga mientras se obtiene el post
    }

    return (
        <div className="bg-color1 dark:bg-dark-color1 p-8 flex flex-col h-full">
            <section className="m-8 p-8 shadow-custom bg-color1 rounded-lg dark:bg-dark-color1 dark:shadow-custom-dark">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-4xl text-color8 dark:text-dark-color8 text-center py-8">{post.title}</h2>
                        <div className='flex flex-col md:grid md:grid-cols-2 items-center gap-4 md:gap-[20rem] m-auto'>
                            <span className="text-3xl text-color5 dark:text-dark-color5 py-4 font-bold">Categoría: {post.categoria}</span>
                            <span className="text-3xl text-color5 dark:text-dark-color5 py-4 font-bold">Fecha: {formatDate(post.created_at)}</span>
                        </div>
                        <div className="text-2xl text-color5 dark:text-dark-color5 pt-4" dangerouslySetInnerHTML={{ __html: createContentWithImages(post) }} />
                    </div>
                </div>
            </section>
        </div>
    );
}
