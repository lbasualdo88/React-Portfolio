import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../template/Footer';
import Header from '../template/Header';
import HeaderProyectos from '../template/HeaderProyectos';

export default function Layout() {
    const location = useLocation();

    // Función para validar si la ruta actual coincide con una ruta definida
    const matchPath = (pathPattern) => {
        const pathRegex = new RegExp(
            `^${pathPattern.replace(/:[^\s/]+/g, '([\\w-]+)')}$`
        );
        return pathRegex.test(location.pathname);
    };

    // Rutas que utilizarán HeaderProyectos
    const rutasHeaderProyectos = [
        '/proyectos',
        '/proyecto/readmi/:id',
        '/blog',
        '/blog/:id',
        '/login'
    ];

    // Determinar el header a mostrar basado en la ruta actual
    const shouldUseHeaderProyectos = rutasHeaderProyectos.some(matchPath);
    const HeaderComponent = shouldUseHeaderProyectos ? HeaderProyectos : Header;

    return (
        <div className='flex flex-col dark:bg-dark-color1 min-h-screen'>
            <HeaderComponent />
            <main className='flex-1 bg-color1 dark:bg-dark-color1 h-max pb-12'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
