import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function UltimosProyectos({ direction = 'left', speed, proyectos }) {
  const controls = useAnimation();
  const carouselRef = useRef();
  const totalWidth = useRef(0);

  useEffect(() => {
    const calculateWidth = () => {
      totalWidth.current = carouselRef.current.scrollWidth / 3;
    };

    calculateWidth(); // Calculate the width initially
    
    const xValues = direction === 'left' ? [0, -totalWidth.current] : [-totalWidth.current, 0];
    const animateCarousel = async () => {
      await controls.start({
        x: xValues,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration:  100,
            ease: 'linear',
          },
        },
      });
    };

    animateCarousel();

    // Recalculate width on window resize
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, [controls, direction, speed]);

  const displayProyectos = direction === 'right' ? [...proyectos].reverse() : proyectos;
  const concatenatedProyectos = displayProyectos.concat(displayProyectos).concat(displayProyectos);

  return (
    <div className="overflow-hidden whitespace-nowrap flex" ref={carouselRef}>
      <motion.div
        animate={controls}
        className="flex"
        style={{ width: 'max-content' }}
      >
        {concatenatedProyectos.map((proyecto, index) => (
          <div key={index} className="p-6 rounded-lg mx-4">
            <img
              className="w-[400px] max-w-none h-auto"
              src={proyecto.imagenes[0].image_path}
              alt="Imagen Proyecto"
            />
          </div>
        ))}
        {concatenatedProyectos.map((proyecto, index) => (
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
  );
}
