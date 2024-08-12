import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [post, setPost] = useState([]);
    const [imgPost, setImgPost] = useState([]);

    const obtenerPost = async () => {
        try {
          const { data } = await clienteAxios('/api/post');
          setPost(data.data);
        } catch (error) {
          console.log(error);
        }
    };

    const obtenerImgPost = async () => {
        try {
          const { data } = await clienteAxios('/api/img-post');
          setImgPost(data.data);
        } catch (error) {
          console.log(error);
        }
    };

    const eliminarPost = async (postId) => {
        const token = localStorage.getItem('AUTH_TOKEN'); 
        try {
            await clienteAxios.delete(`/api/post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Incluir el token en los encabezados
                },
            });
            setPost(post.filter((p) => p.id !== postId));
        } catch (error) {
            console.log(error);
            console.error(error);
        }
    };

    const crearPost = async (formData) => {
      const token = localStorage.getItem('AUTH_TOKEN'); 
        try {
            const { data } = await clienteAxios.post('/api/nuevoPost', formData, {
              headers: {
                Authorization: `Bearer ${token}`, // Incluir el token en los encabezados
            },
            });
            setPost((prevPosts) => [data.post, ...prevPosts]);
            return data.post;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        obtenerPost();
        obtenerImgPost();
    }, []);

    return (
        <BlogContext.Provider value={{
            post,
            imgPost,
            eliminarPost,
            crearPost // Añadir la función crearPost al contexto
        }}>
            {children}
        </BlogContext.Provider>
    );
};

export { BlogProvider };
export default BlogContext;
