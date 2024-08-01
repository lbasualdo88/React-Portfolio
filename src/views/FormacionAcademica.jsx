import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: "-100%" }, // oculto inicialmente arriba
    visible: { opacity: 1, y: 0 },      // visible
  };

export default function FormacionAcademica() {
  return (
    <>
    <div id='educacion' className='bg-color1 dark:bg-dark-color1 py-16 my-8'>
    <p className='text-center text-6xl font-Raleway text-color8 pb-8 dark:text-dark-color8'>Formacion Academica</p>
         <div className="flex flex-col md:flex-row justify-center items-center gap-24">
         <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
      >
         <div>
                <div className="flex flex-col dark:shadow-custom-gray hover:scale-90 justify-center  shadow-custom rounded-xl p-8 bg-color1 dark:bg-opacity-75 dark:filter  md:mb-4">
                    <a             
                    href="https://www.aluracursos.com/">   
                        <img 
                            className="m-auto max-h-40 dark:opacity-100 dark:filter dark:brightness-75" 
                            src="/img/ImgEducacion/alura.png" 
                            alt="imagen alura"
                        />
                    </a>
                </div>
                <h4 className="text-4xl font-Raleway text-color8 text-center pt-4 font-medium dark:text-dark-color5">Desarrollador Front End</h4>
                <p className="text-3xl font-Raleway text-color8 text-center pt-4 dark:text-dark-color5">2023 - Alura</p>
            </div>
      </motion.div>

         <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
      >
        <div>               
                <div className="flex flex-col dark:shadow-custom-gray hover:scale-90 justify-center  shadow-custom rounded-xl p-8 bg-color1 dark:bg-opacity-75 dark:filter md:mb-4">
                    <a                                      
                    href="https://egg.live/">
                        <img 
                            className="m-auto max-h-40 dark:opacity-100 dark:filter dark:brightness-75" 
                            src="/img/ImgEducacion/Egg-logo.jpg" 
                            alt="imagen egg"/>
                    </a>
                </div>
                <h4 className="text-4xl font-Raleway text-color8 text-center pt-4 font-medium dark:text-dark-color5">Desarrollador Full Stack</h4>
                <p className="text-3xl font-Raleway text-color8 text-center pt-4 dark:text-dark-color5">2023 - Egg</p>
            </div>
      </motion.div>


         <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
      >
         <div>               
                <div className="flex flex-col dark:shadow-custom-gray hover:scale-90 justify-center  shadow-custom rounded-xl p-8 bg-color1 dark:bg-opacity-75 dark:filter md:mb-4">
                    <a                                      
                    href="https://www.udemy.com/">
                        <img 
                            className="m-auto max-h-40 dark:opacity-100 dark:filter dark:brightness-75" 
                            src="/img/ImgEducacion/udemy.png" 
                            alt="imagen udemy"/>
                    </a>
                </div>
                <h4 className="text-4xl font-Raleway text-color8 text-center pt-4 font-medium dark:text-dark-color5">Desarrollador Web</h4>
                <p className="text-3xl font-Raleway text-color8 text-center pt-4 dark:text-dark-color5">En curso - Udemy</p>
            </div>
      </motion.div>

         <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
      >
        <div className='flex flex-col items-center pt-10'>               
                <div className="flex flex-col dark:shadow-custom-gray hover:scale-90 justify-center w-auto shadow-custom rounded-xl p-8 bg-color1 dark:bg-opacity-75 dark:filter md:mb-4">
                    <a                                      
                    href="https://www.frsf.utn.edu.ar/tuti">
                        <img 
                            className="m-auto w-72 max-h-40 dark:opacity-100 dark:filter dark:brightness-75" 
                            src="public/img/ImgEducacion/utn.jpg" 
                            alt="imagen utn"/>
                    </a>
                </div>
                <h4 className="text-4xl font-Raleway text-color8 text-center pt-4 font-medium dark:text-dark-color5">Tecnologia <br /> de la Informacion</h4>
                <p className="text-3xl font-Raleway text-color8 text-center pt-4 dark:text-dark-color5">En curso - UTN</p>
            </div>
      </motion.div>
   
        </div>
    </div>
        
    
    </>
  )
}
