import { RiMailSendFill } from "react-icons/ri";
import { FaRegFilePdf  } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
import { PiFilePdfBold  } from "react-icons/pi";
import { TbFileTypePdf } from "react-icons/tb";
import Titulo from "./Titulo";


export default function Hero() {
  return (
    <>
         <section className=" bg-color1 dark:bg-dark-color1 py-8 mb-4 ">      
            <div className="md:w-auto flex flex-col md:flex-row-reverse md:justify-between lg:flex-row-reverse lg:justify-between lg:items-center m-auto px-8 lg:px-52 gap-4"> 
                <img 
                  className="w-40 h-40 md:w-60 md:h-60 xl:fotoPerfil rounded-full" 
                  src="/public/img/perfil/fotolinkedin2.JPG" 
                  alt="Imagen perfil"
                />
              <div className="">
                <Titulo 
                className="font-Raleway text-5xl sm:text-6xl lg:text-8xl text-color8 dark:text-color7"
                />
                 
                <ul className="flex my-8 md:py-12 gap-8">
                    <li className="items-center gap-1">
                      <a className="flex flex-row-reverse text-2xl md:text-3xl dark:text-dark-color10" href="https://github.com/lbasualdo88">Github 
                       <AiOutlineGithub 
                      className="pr-1 w-10 h-auto text-color8 hover:text-color10 dark:text-color7" 
                      />
                      </a>
                    </li>
                    <li className="items-center gap-1">
                      <a className="flex flex-row-reverse text-2xl md:text-3xl dark:text-dark-color10" href="https://www.linkedin.com/in/leonardo-javier-basualdo-/">Linkedin 
                      <IoLogoLinkedin 
                      className="pr-1 w-10 h-auto text-color8 hover:text-color7 dark:text-color7" 
                      />
                      </a>
                    </li>
                    <li className="items-center gap-1">
                      <a className="flex flex-row-reverse text-2xl md:text-3xl dark:text-dark-color10" href="mailto:lbasualdo88@gmail.com">Email 
                      <RiMailSendFill
                        className="pr-1 w-10 h-auto text-color8 hover:text-amber-600 dark:text-color7" 
                      />
                      </a>
                    </li>
                    <li className="flex flex-row-reverse items-center gap-1">
                      <a className="flex flex-row-reverse text-2xl md:text-3xl dark:text-dark-color10" href="/public/Doc/Leonardo Basualdo CV_240415_091705 (1).pdf" download="">Currículum 
                      <PiFilePdfBold   
                        className="pr-1 w-10 h-auto text-color8 hover:text-red-600 dark:text-color7" 
                      />
                      </a>
                    </li>
                </ul>
              </div>
              
              
                
           </div>    
        </section>
    
    </>
  )
}


