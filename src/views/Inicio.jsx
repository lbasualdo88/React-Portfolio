
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contenedor from "./Contenedor";
import Skill from "./Skill"
import SobreMi from './SobreMi';
import FormacionAcademica from "./FormacionAcademica";

const variants = {
  hidden: { opacity: 0, y: "-100%" }, // oculto inicialmente arriba
  visible: { opacity: 1, y: 0 },      // visible
};



const Inicio = () => {
  return (
    <main className="bg-color9 dark:bg-dark-color2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <SobreMi />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        >      
        <FormacionAcademica/>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Skill />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <Contenedor />
      </motion.div>
    
      
    </main>
  );
};

export default Inicio;
