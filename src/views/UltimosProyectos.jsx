import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';


export default function UltimosProyectos({ direction = 'left', speed, proyectos }) {
   
    const controls = useAnimation();
    const carouselRef = useRef();

    useEffect(() => {
        const totalWidth = carouselRef.current.scrollWidth / 3;
        const xValues = direction === 'left' ? [0, -totalWidth] : [-1000, totalWidth];
        const animateCarousel = async () => {
          await controls.start({
            x: xValues,
            transition: {
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: speed / 1000, 
                ease: 'linear',
              },
            },
          });
        };
    
        animateCarousel();
        return () => controls.stop();
      }, [controls, direction, speed]);

      const displayProyectos = direction === 'right' ? [...proyectos].reverse() : proyectos;

      const concatenatedProyectos = displayProyectos.concat(displayProyectos).concat(displayProyectos);

      

  return (
    <>
    <div className="overflow-hidden whitespace-nowrap flex" ref={carouselRef}>
        <motion.div
            animate={controls}
            className="flex"
            style={{ width: 'max-content' }}
        >
            {concatenatedProyectos.concat(concatenatedProyectos).map((proyecto, index) => (
        
            <div key={index} className="p-6 rounded-lg mx-4">       
                    <img 
                        className="w-[400px] max-w-none h-auto"
                        src={proyecto.imagenes[0].image_path} 
                        alt="Imagen Proyecto" 
                    />
                
            </div>
            ))}
            {concatenatedProyectos.concat(concatenatedProyectos).map((proyecto, index) => (
        
            <div key={index} className="p-6 rounded-lg mx-4">       
                    <img 
                        className="w-[400px] max-w-none h-auto"
                        src={proyecto.imagenes[0].image_path} 
                        alt="Imagen Proyecto" 
                    />
                
            </div>
            ))}
           
            </motion.div>
    </div>
       
       
    </>
  )
}
