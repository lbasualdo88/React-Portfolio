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
      <section className="flex flex-col md:grid md:grid-cols-2 justify-center items-center contenedor shadow-custom dark:shadow-custom-dark py-12 md:p-8 m-auto rounded-lg max-w-4xl mt-10 md:mt-20  gap-8">
        <div className="w-full">
          <img
            className="w-full h-full"
            src={imagePath}
            alt="imagen proyecto"
          />
        </div>
        <div className="w-full flex flex-col">
          <h2 className="text-center font-bold uppercase text-4xl text-color8 dark:text-dark-color8">{proyecto.title}</h2>
          <span className="text-center text-3xl text-color8 justify-center dark:text-dark-color5">{proyecto.categoria}</span>
          <span className="text-center text-2xl text-color5 justify-center dark:text-dark-color8">{proyecto.tipo}</span>
          <div className="md:icon-container flex flex-wrap justify-center gap-1">
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
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            {proyecto.repository2_url ? (
              <a
                className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
                href={proyecto.repository2_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            ) : null}
            <a
              className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
              href={proyecto.deployed_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy
            </a>
            <Link
              className="boton border-2 border-solid border-color7 bg-color1 hover:bg-color7 hover:text-color1 text-color7 dark:hover:shadow-hover-dark dark:hover:border-dark-color10 dark:bg-dark-color1 dark:shadow-button-dark"
              to={`/proyecto/readmi/${proyecto.id}`}
            >
              Readme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
