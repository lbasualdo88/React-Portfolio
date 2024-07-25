import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [iconos, setIconos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [iconosProyecto, setIconosProyecto] = useState([]);
  const [imagenesProyecto, setImagenesProyecto] = useState([]);
  const [proyectosConDatos, setProyectosConDatos] = useState([]);

  const obtenerIconos = async () => {
    try {
      const { data } = await clienteAxios('/api/icon');
      setIconos(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerImagenes = async () => {
    try {
      const { data } = await clienteAxios('/api/imagen');
      setImagenes(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerIconosProyecto = async () => {
    try {
      const { data } = await clienteAxios('/api/icon-project');
      setIconosProyecto(data.data);
    } catch (error) {
      console.log(error);
      
    }
  };

  const obtenerImagenesProyecto = async () => {
    try {
      const { data } = await clienteAxios('/api/image-project');
      setImagenesProyecto(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProyectos = async () => {
    try {
      const { data } = await clienteAxios('/api/project');
      setProyectos(data.data);
    } catch (error) {
      console.log(error);
    }
  };


 
 
  useEffect(() => {
    obtenerIconos();
    obtenerImagenes();
    obtenerIconosProyecto();
    obtenerImagenesProyecto();
    obtenerProyectos();
  }, []);

  useEffect(() => {
    if (proyectos.length && iconos.length && iconosProyecto.length && imagenes.length && imagenesProyecto.length) {
      
      const proyectosConDatos = proyectos.map(proyecto => {

        const iconosIds = iconosProyecto
          .filter(ip => ip.project_id === proyecto.id)
          .map(ip => ip.icon_id);

        const proyectoIconos = iconos.filter(icono => iconosIds.includes(icono.id));

        const imagenesIds = imagenesProyecto
          .filter(ip => ip.project_id === proyecto.id)
          .map(ip => ip.image_id);

        const proyectoImagenes = imagenes.filter(imagen => imagenesIds.includes(imagen.id));

        return {
          ...proyecto,
          iconos: proyectoIconos,
          imagenes: proyectoImagenes,
        };
      });
      setProyectosConDatos(proyectosConDatos);
    }
  }, [proyectos, iconos, iconosProyecto, imagenes, imagenesProyecto]);

  return (
    <PortfolioContext.Provider
      value={{
        proyectos: proyectosConDatos,
        setProyectos,
        iconos,
        setIconos,
        iconosProyecto,
        setIconosProyecto,
        imagenes,
        setImagenes,
        imagenesProyecto,
        setImagenesProyecto,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider };
export default PortfolioContext;
