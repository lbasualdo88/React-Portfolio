import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import Swal from 'sweetalert2';

export default function MisPost() {
  const { post, eliminarPost } = useContext(BlogContext);

  const handleDelete = async (postId) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        await eliminarPost(postId);  // Elimina el post
        Swal.fire(
          'Eliminado!',
          'Tu post ha sido eliminado.',
          'success'
        );
      }
    } catch (error) {
      // Maneja cualquier error que ocurra durante el proceso de eliminación
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al eliminar el post. Inténtalo de nuevo más tarde.',
      });
      console.error('Error eliminando el post:', error);
    }
  };

  return (
    <>
      <div className="bg-gray-200 dark:bg-dark-color1 p-8  flex flex-col h-full">
        <div className="w-auto  p-8">
          <h1 className="text-center text-bold font-krub text-color8 uppercase text-4xl dark:text-dark-color8">Mis Post</h1>
        </div>
        <div className="sm:grid sm:grid-cols-2">
          {post.map((post, index) => (
            <section key={index} className="m-8 p-8 shadow-custom bg-color1 rounded-lg dark:bg-dark-color1 dark:shadow-custom-dark">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex flex-col">
                  <h2 className="font-bold text-3xl text-color8 dark:text-dark-color8">{post.title}</h2>
                  <span className="text-2xl text-color5 dark:text-dark-color5">{post.categoria}</span>
                  <p className="text-2xl text-color5 dark:text-dark-color5" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
                <div className="flex gap-4">
                  <a className="text-2xl font-bold py-3 px-8 rounded-xl uppercase bg-green-600 text-color1" href="#">Editar</a>
                  <button 
                    className="text-2xl font-bold py-3 px-8 rounded-xl uppercase bg-red-700 text-color1"
                    onClick={() => handleDelete(post.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
