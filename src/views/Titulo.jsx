import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Titulo({ className }) {
  const [subIndex, setSubIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  const phrases = ['Desarrollador Full Stack', 'Hola, me llamo Leonardo'];
  const typingSpeed = 120; // Velocidad de escritura en milisegundos
  const deletingSpeed = 75; // Velocidad de borrado en milisegundos
  const pauseDuration = 2000; // Duración de la pausa antes de borrar en milisegundos

  useEffect(() => {
    let timer;
    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
        timer = setTimeout(() => setSubIndex((prev) => prev + 1), pauseDuration);
      } else {
        timer = setTimeout(() => setSubIndex((prev) => prev - 1), deletingSpeed);
      }
    } else {
      if (subIndex === phrases[index].length) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        timer = setTimeout(() => setSubIndex((prev) => prev + 1), typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [subIndex, index, isDeleting, phrases]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${className} relative h-16`}
    >
      {phrases[index].substring(0, subIndex)}
      
    </motion.div>
  );
};
