import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Proyecto({ proyecto }) {
  const imagePath = proyecto.imagenes[0].image_path;

  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Más amplitud
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Link to={`/proyecto/readmi/${proyecto.id}`}>
      <motion.section
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col lg:w-[48rem] justify-between shadow-custom dark:shadow-custom-dark p-6 rounded-lg h-full transition-transform will-change-transform bg-transparent"
      >
        <div className="relative w-full">
          <img
            className="w-full h-64 object-cover rounded-md"
            src={imagePath}
            alt="imagen proyecto"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
            <p className="text-white text-xl font-semibold text-center">
              Ver detalles
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h2 className="text-center font-bold uppercase text-4xl text-color8 dark:text-dark-color8 min-h-[3rem] line-clamp-2 pt-3">
            {proyecto.title}
          </h2>
          <span className="text-center text-3xl text-color8 dark:text-dark-color5">
            {proyecto.categoria}
          </span>
          <span className="text-center text-2xl text-color5 dark:text-dark-color8">
            {proyecto.tipo}
          </span>
        </div>
      </motion.section>
    </Link>
  );
}
