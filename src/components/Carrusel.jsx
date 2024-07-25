import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import usePortafolio from '../hooks/usePortafolio';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { FaPhp, FaLaravel, FaSass, FaCss3Alt, FaReact, FaJava, FaGulp, FaGithub, FaFigma } from 'react-icons/fa';
import { SiComposer, SiTailwindcss, SiStyledcomponents, SiMysql } from 'react-icons/si';

const iconMap = {
    HTML: TiHtml5,
    CSS: FaCss3Alt,
    JavaScript: IoLogoJavascript,
    PHP: FaPhp,
    Laravel: FaLaravel,
    Composer: SiComposer,
    Tailwind: SiTailwindcss,
    StyledComponents: SiStyledcomponents,
    Sass: FaSass,
    React: FaReact,
    NodeJS: DiNodejs,
    Java: FaJava,
    Gulp: FaGulp,
    GitHub: FaGithub,
    Figma: FaFigma,
    MySQL: SiMysql,
};

const Carousel = () => {
  const { iconos } = usePortafolio();
  const controls = useAnimation();
  const carouselRef = useRef();

 

  useEffect(() => {
    const totalWidth = carouselRef.current.scrollWidth / 2;
    const animateCarousel = async () => {
      await controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25, // Ajusta la duración según tus necesidades
            ease: 'linear',
          },
        },
      });
    };

    animateCarousel();
  }, [controls]);

  return (
    <>
    <div className="overflow-hidden whitespace-nowrap flex" ref={carouselRef}>
      <motion.div
        animate={controls}
        className="flex"
      >
        {iconos.concat(iconos).map((icon, index) => {
          const IconComponent = iconMap[icon.name];
          return (
            <div key={index} className="flex-none p-2.5">
              <IconComponent className='text-color7 w-auto h-20 ' />
            </div>
          );
        })}
         {iconos.concat(iconos).map((icon, index) => {
          const IconComponent = iconMap[icon.name];
          return (
            <div key={index} className="flex-none p-2.5">
              <IconComponent className='text-color7 w-auto h-20 ' />
            </div>
          );
        })}
      </motion.div>
    </div>
    </>
  );
};

export default Carousel;
