import React, { useState } from 'react';
import { motion } from "framer-motion";
import Busqueda from "./Busqueda"
import usePortafolio from "../hooks/usePortafolio"
import Proyecto from "./Proyecto"

export default function Proyectos() {

  const { proyectos } = usePortafolio()
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
  
  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Busqueda 
        onBuscar={handleBuscar}
      />
            <h1 className="text-5xl uppercase font-krub font-bold text-center py-4 text-color8 dark:text-dark-color8">Proyectos</h1>
            {proyectos.filter(filtrarProyectos).map((proyecto, index) => (
                <Proyecto
                key={index}
                proyecto={proyecto}
                />
              ))}
    </motion.div>
    </>
  )
}
