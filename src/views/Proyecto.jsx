import { Link } from 'react-router-dom';
import usePortafolio from "../hooks/usePortafolio";
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

export default function Proyecto({ proyecto }) {
  const imagePath = proyecto.imagenes[0].image_path;

  return (
    <>
      <section className="flex flex-col justify-between shadow-custom dark:shadow-custom-dark p-6 rounded-lg h-full">
        <div className="w-full">
          <img
            className="w-full h-64 object-cover rounded-md"
            src={imagePath}
            alt="imagen proyecto"
          />
        </div>
        <div className="w-full flex flex-col">
          <h2 className="text-center font-bold uppercase text-4xl text-color8 dark:text-dark-color8 min-h-[3rem] line-clamp-2 pt-3">{proyecto.title}</h2>
          <span className="text-center text-3xl text-color8 justify-center dark:text-dark-color5">{proyecto.categoria}</span>
          <span className="text-center text-2xl text-color5 justify-center dark:text-dark-color8">{proyecto.tipo}</span>
          
          <div
              className={
                     "flex flex-col gap-4 items-center"
              }
          >
            
            <Link
              className=" boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
              to={`/proyecto/readmi/${proyecto.id}`}
            >
              Ver proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
