import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeProvider';

export default function HeaderProyectos() {
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [shouldReload, setShouldReload] = useState(false);

    // Esta función manejará el clic en el botón "Volver"
    const handleBackClick = () => {
        if (location.pathname === '/') {
            setShouldReload(true);
        } else {
            navigate(-1);
        }
    };
    useEffect(() => {
        if (shouldReload) {
            window.location.reload();
        }
    }, [shouldReload]);

    return (
        <div className="header flex md:flex-row justify-between items-center p-4">
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

            <button
                className='dark:text-dark-color8 dark:hover:border-dark-color10 border-2 border-transparent dark:bg-dark-color1 dark:hover:shadow-hover-dark dark:hover:border-2 hover:bg-color9 hover:rounded-xl p-4 text-color8 no-underline text-3xl mr-8'
                onClick={handleBackClick}
            >
                Volver
            </button>
        </div>
    );
}
