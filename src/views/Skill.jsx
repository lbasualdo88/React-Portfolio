import { motion } from "framer-motion";
import Carousel from "../components/Carrusel"


export default function Skill() {
  return (
    <>
          <div id="skill" className="my-4 py-10 bg-color9 dark:bg-dark-color2">
            <p className="text-center text-4xl font-bold text-color8 uppercase pb-8 dark:text-dark-color8">Skill</p>
            <Carousel/>
         </div>
    </>
  )
}
