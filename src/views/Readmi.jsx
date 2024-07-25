import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import usePortafolio from "../hooks/usePortafolio";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaPhp, FaGulp, FaLaravel, FaNodeJs, FaReact, FaJava, FaSass, FaGithub } from 'react-icons/fa';
import { SiComposer, SiTailwindcss, SiStyledcomponents, SiMysql, SiFigma } from 'react-icons/si';


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
  Figma: SiFigma,
  MySQL: SiMysql,
};

export default function Readmi() {
  const { id } = useParams();
  const { proyectos } = usePortafolio();

  // Encontrar el proyecto por ID
  const proyecto = proyectos.find(proyecto => proyecto.id === parseInt(id));
 
  // Preparar las imágenes para react-image-gallery
  const images = proyecto.imagenes.map(imagen => ({
    original: `/public/${imagen.image_path}`,
    thumbnail: `/public/${imagen.image_path}`,
    description: imagen.description  // Opcional: agregar descripción si existe
  }));
  
  

  return (
    <>
      <section className="contenedor shadow-custom dark:shadow-custom-dark p-8 rounded-lg max-w-4xl m-auto mt-10 md:mt-28 flex flex-col items-center gap-8">
        <div className="w-full">
          <div className='flex flex-col'>
            <h2 className="text-center font-bold uppercase text-4xl text-color8 dark:text-dark-color8">{proyecto.title}</h2>
            <span className="text-center text-3xl text-color8 justify-center dark:text-dark-color5 py-4">{proyecto.categoria}</span>  
            <span className="text-center text-2xl text-color5 justify-center dark:text-dark-color8">{proyecto.tipo}</span>  
            <p className="p-8 dark:text-dark-color8" dangerouslySetInnerHTML={{ __html: proyecto.description }}></p>
          </div>
          <div className="icon-container">
          {proyecto.iconos.map((icono, index) => {
              const IconComponent = iconMap[icono.name];
              return (
                <IconComponent
                  key={index}
                  className="text-color7 w-auto h-20"
                  aria-label={icono.name}
                />
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a 
              className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
              href={proyecto.repository_url}
            >
              Repo
            </a>
            {proyecto.repository2_url ? (
              <a 
                className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
                href="/"
              >
                Repo
              </a>
            ) : null}
            <a 
              className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
              href={proyecto.deployed_url}
            >
              Deploy
            </a>
          </div>
        </div>

        <div className="my-8">
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
              <ImageGallery items={images} />
          </div>
        </div>
      </section>
    </>
  );
}
