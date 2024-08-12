import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeProvider';
import { IoMenu } from 'react-icons/io5'; // Importa IoMenu

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    function scrollNav() {
      const enlaceSobreMi = document.querySelectorAll('.scroll');
      enlaceSobreMi.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const valorId_1 = e.target.getAttribute('href');
          const form_1 = document.querySelector(valorId_1);
          if (form_1) {
            form_1.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    scrollNav();
  }, []);

  function handleClick() {
    const nav = document.querySelector('.nav');
    const h = document.querySelector('.header');

    if (nav.classList.contains('mostrar')) {
      nav.classList.remove('mostrar');
      h.classList.remove('flexColMenu');
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
      h.classList.add('flexColMenu');
      nav.classList.add('mostrar');
    }
  }

  return (
    <div className="header dark:bg-dark-color1 flex md:flex-row justify-between items-center p-4">
      <div className='flex'>
        <FontAwesomeIcon
          className='w-10 h-10 mr-4 cursor-pointer dark:text-dark-color8 text-color10'
          icon={isDarkMode ? faSun : faMoon}
          onClick={toggleTheme}
        />
        <a className='flex items-center cursor-pointer' href="/">
          <h3 className="text-4xl font-Raleway dark:text-dark-color8">Leonardo Javier Basualdo</h3>
        </a>
      </div>

      <button onClick={handleClick} className='md:hidden'>
        <IoMenu 
          className='w-16 h-16 p-auto mr-3 cursor-pointer dark:text-color1' 
          aria-label="Menu"
        />
      </button>
      
      <nav className="nav hidden md:flex md:flex-row items-center gap-4 p-4">
        <a
          className="scroll border-2 dark:hover:border-dark-color8 border-transparent dark:bg-dark-color1 dark:border-solid dark:hover:shadow-custom-gray hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl dark:text-dark-color8"
          href="#contenedor"
        >
          Proyectos
        </a>
        <a
          className="scroll border-2 dark:hover:border-dark-color8 border-transparent dark:bg-dark-color1 dark:border-solid dark:hover:shadow-custom-gray hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl dark:text-dark-color8"
          href="#sobremi"
        >
          Sobre Mi
        </a>
        <a
          className="scroll border-2 dark:hover:border-dark-color8 border-transparent dark:bg-dark-color1 dark:border-solid dark:hover:shadow-custom-gray hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl dark:text-dark-color8"
          href="#educacion"
        >
          Educación
        </a>
        <a
          className="scroll border-2 dark:hover:border-dark-color8 border-transparent dark:bg-dark-color1 dark:border-solid dark:hover:shadow-custom-gray hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl dark:text-dark-color8"
          href="#skill"
        >
          Skill
        </a>
        <Link
          className="border-2 dark:hover:border-dark-color8 border-transparent dark:bg-dark-color1 dark:border-solid dark:hover:shadow-custom-gray hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl dark:text-dark-color8"
          to='/blog'
        >
          Blog
        </Link>
        <Link
          className="border-2 dark:hover:border-dark-color8 border-transparent dark:bg-dark-color1 dark:border-solid dark:hover:shadow-custom-gray hover:bg-color9 hover:rounded-3xl p-4 text-color8 no-underline text-3xl dark:text-dark-color8"
          to='/login'
        >
          Admin
        </Link>
      </nav>
    </div>
  );
}
