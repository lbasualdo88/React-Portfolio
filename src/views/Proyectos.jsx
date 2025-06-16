import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Busqueda from "./Busqueda"
import usePortafolio from "../hooks/usePortafolio"
import Proyecto from "./Proyecto"

export default function Proyectos() {

  const { proyectos, cargando } = usePortafolio()
  const [filtros, setFiltros] = useState({});

  const handleBuscar = (datos) => {
    setFiltros(datos);
  };

  const filtrarProyectos = (proyecto) => {
    const { titulo, tipo, categoria, tecnologia } = filtros;
  
    // Convertir los filtros no seleccionados a null
    const tipoValido = tipo && tipo !== '--Seleccione--' ? tipo : null;
    const categoriaValida = categoria && categoria !== '--Seleccione--' ? categoria : null;
    const tecnologiaValida = tecnologia && tecnologia !== '-- Seleccione --' ? tecnologia : null;
  
    const cumpleTitulo = !titulo || proyecto.title.toLowerCase().includes(titulo.toLowerCase());
    const cumpleTipo = !tipoValido || proyecto.tipo.toLowerCase() === tipoValido.toLowerCase();
    const cumpleCategoria = !categoriaValida || proyecto.categoria.toLowerCase() === categoriaValida.toLowerCase();
    const cumpleTecnologia = !tecnologiaValida || proyecto.iconos.some((icono) => icono.name.toLowerCase() === tecnologiaValida.toLowerCase());

  
    return cumpleTitulo && cumpleTipo && cumpleCategoria && cumpleTecnologia;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Busqueda 
        onBuscar={handleBuscar}
      />
            <h1 className="text-5xl uppercase font-krub font-bold text-center py-4 text-color8 dark:text-dark-color8 mb-12">Proyectos</h1>
            {cargando ? (
              <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 px-4 md:px-8 auto-rows-fr">
              {proyectos.filter(filtrarProyectos).map((proyecto, index) => (
                <Proyecto key={index} proyecto={proyecto} />
              ))}
              </div>
      )}
    </motion.div>
    </>
  )
}
