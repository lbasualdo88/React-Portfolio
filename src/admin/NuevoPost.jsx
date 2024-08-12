import { createRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Editor from "../components/Editor";
import useBlog from '../hooks/useBlog';

export default function NuevoPost() {
  const navigate = useNavigate();
  const { crearPost } = useBlog(); // Obtén la función crearPost del contexto

  const tituloRef = createRef();
  const categoriaRef = createRef();

  const [fotos, setFotos] = useState([]);
  const [resumen, setResumen] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleFotosChange = (event) => {
    const files = Array.from(event.target.files);
    setFotos((prevFotos) => [...prevFotos, ...files]);
  };

  const handleRemoveFoto = (index) => {
    setFotos((prevFotos) => prevFotos.filter((_, i) => i !== index));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', tituloRef.current.value);
    formData.append('description', descripcion);
    formData.append('content', resumen);
    formData.append('categoria', categoriaRef.current.value);

    fotos.forEach((foto) => {
      formData.append('images[]', foto);
    });

    try {
        await crearPost(formData); // Usa la función del contexto para crear el post
        Swal.fire({
            icon: 'success',
            title: 'Post registrado con éxito',
            showConfirmButton: false,
            timer: 4500
        });
        navigate('/admin');
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error al registrar el post',
            text: 'Por favor, intenta de nuevo más tarde',
            confirmButtonText: 'Entendido'
        });
        console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <main className="dark:bg-dark-color1 py-8 bg-color9">
        <div className="bg-color1 max-w-[100rem] m-auto py-20 rounded-xl items-center dark:bg-dark-color1 shadow-md dark:shadow-custom-dark">
          <h1 className="text-6xl text-color8 font-bold text-center dark:text-dark-color8">Ingresar Post</h1>

          <div className="mt-10 px-5 py-10">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <div className="mb-4">
                      <label className="text-slate-800 dark:text-dark-color8" htmlFor="titulo">Titulo:</label>
                      <input 
                        type="text" 
                        id="titulo"
                        className="mt-2 w-full p-3 bg-gray-50 border-2 border-dark-color5 dark:border-dark-color1 border-solid rounded-md dark:bg-dark-color8"
                        name="titulo"
                        placeholder="Titulo del Proyecto"
                        ref={tituloRef}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-slate-800 dark:text-dark-color8" htmlFor="categoria">Categoria:</label>
                      <input 
                        type="text" 
                        id="categoria"
                        className="mt-2 w-full p-3 bg-gray-50 border-2 border-dark-color5 dark:border-dark-color1 border-solid rounded-md dark:bg-dark-color8"
                        name="categoria"
                        placeholder="Categoria del Proyecto"
                        ref={categoriaRef}
                      />
                    </div>
                </div>
                <div className="">
                    <div className="mb-4 py-12">
                      <label className="text-slate-800 dark:text-dark-color8" htmlFor="resumen">Resumen:</label>
                      <Editor 
                        value={resumen} 
                        onChange={setResumen} 
                      />
                    </div>

                    <div className="mb-4 py-12">
                      <label className="text-slate-800 dark:text-dark-color8" htmlFor="description">Descripcion:</label>
                      <Editor 
                        value={descripcion} 
                        onChange={setDescripcion} 
                      />
                    </div>
                </div>
              <div className="mb-4 py-4">
                <label className="block my-2 py-4 text-2xl text-slate-800 dark:text-dark-color8" htmlFor="fotos">Fotos:</label>
                <input
                  type="file"
                  id="fotos"
                  name="fotos"
                  accept="image/*"
                  multiple
                  onChange={handleFotosChange}
                  className="mt-2 w-full p-3 bg-gray-50 rounded-md dark:bg-dark-color8 border-2 border-dark-color5 dark:border-dark-color1 border-solid"
                />
              </div>
              <div className="mb-4">
                {fotos.length > 0 && (
                  <div>
                    <h3 className="text-slate-800 dark:text-dark-color8">Vista previa de las fotos:</h3>
                    <div className="flex flex-wrap mt-2">
                      {fotos.map((foto, index) => (
                        <div key={index} className="w-1/2 md:w-80 p-1 relative">
                          <img
                            src={URL.createObjectURL(foto)}
                            alt={`Preview ${index}`}
                            className="w-full md:w-80 h-auto rounded-md shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveFoto(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center m-2"
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <input
                type="submit"
                value="Subir Post"
                className="dark:bg-dark-color1 dark:hover:text-dark-color10 dark:hover:border-dark-color10 dark:hover:shadow-hover-dark dark:border-color7 dark:shadow-button-dark dark:border-2 dark:text-color7 bg-color7 hover:bg-color3 hover:text-color1 text-white w-full lg:w-[40rem] lg:m-auto items-end px-10 mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
