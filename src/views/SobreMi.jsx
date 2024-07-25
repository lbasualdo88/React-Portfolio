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
                                Después de 13 años en la industria farmacéutica, he decidido cambiar mi carrera a desarrollo de software. Mi formación abarca desde la lógica de programación hasta tecnologías modernas.<br />
                                <br />
                                <strong>Habilidades Técnicas:</strong>
                                <br />
                                <strong>Lenguajes y Tecnologías:</strong> JavaScript, HTML, CSS, SASS, PHP, Laravel, MySQL, React.
                                <br />
                                <strong>Desarrollo Frontend y Backend:</strong> Diseño de interfaces, creación de aplicaciones dinámicas, manejo de bases de datos.
                                <br />
                                <strong>Frameworks y Herramientas:</strong> Laravel, React, Node.js, Tailwind CSS.
                                <br />
                                <strong>Metodologías:</strong> Desarrollo Full Stack, integración de APIs, autenticación, programación orientada a objetos y asincrónica.
                                <br />
                                <strong>Arquitectura y Diseño:</strong> MVC, Active Record.
                                <br />
                                <strong>Herramientas de Desarrollo:</strong> Postman, TablePlus, Workbench, Git.<br />
                                <br />
                                <strong>Enfoque Profesional:</strong> Apasionado por el diseño de interfaces que mejoren la experiencia del usuario, busco combinar mi experiencia farmacéutica con habilidades en desarrollo web para crear soluciones innovadoras.

                                    </p>  
                            </div>
                        
                </section>
               
            </main>

    
    </>
  )
}
