import usePortafolio from "../hooks/usePortafolio"
import { motion } from "framer-motion";
import Carousel from "../components/Carrusel"
import Skill from "./Skill"

export default function SobreMi() {
    
    const { iconos } = usePortafolio()
   
  return (
    <>
            <main className="p-8 dark:bg-dark-color2 my-0" id="sobremi">
                <section className=" p-8">
                        <h2 className="text-4xl uppercase font-bold text-color8 dark:text-dark-color8 pb-4 pl-14">Sobre Mi</h2>
                        
                            <div className="flex flex-col  items-center p-8">
                                <p className="px-6 text-2xl md:text-3xl text-color8 dark:text-dark-color5">
                                    Después de más de 13 años de experiencia en la industria farmacéutica, 
                                    he decidido cambiar de rumbo y convertirme en desarrollador de software.
                                   <br /> 
                                    Me he formado en el programa Oracle ONE con Alura Latam, tambien en Argentina Programa 4.0 
                                    en la plataforma de Egg Cooperations, y a través de cursos en Udemy para adquirir 
                                    los conocimientos necesarios para alcanzar mi objetivo. <br />
                                    En estos momentos me encuentro estudiando en la UTN la Tecnicatura Universitaria en Tecnologías de la Información.  
                                   <br />  
                                    Mis habilidades incluyen JavaScript, HTML, CSS, Java, MySQL, PHP, Laravel y React. 
                                   <br />  
                                    Disfruto del diseño y la creación de interfaces de usuario atractivas y funcionales que mejoren la experiencia del usuario. 
                                   <br />
                                    </p>  
                            </div>
                        
                </section>
               
            </main>

    
    </>
  )
}
