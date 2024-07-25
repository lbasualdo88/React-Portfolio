import { Outlet, useLocation, useParams } from 'react-router-dom';
import Footer from '../template/Footer';
import Header from '../template/Header';
import HeaderProyectos from '../template/HeaderProyectos';

export default function Layout() {
    const { id } = useParams();
    const location = useLocation();

   
    return (
        <>
        <body className=' dark:bg-dark-color1'>
              {location.pathname === '/proyectos' || location.pathname === `/proyecto/readmi/${id}` ? (
                <HeaderProyectos />
            ) : (
                <Header />
            )}
            <main className='flex-1 bg-color1 dark:bg-dark-color1 lg:h-max'>
                <Outlet />
            </main>
            <Footer />
        </body>
        </>
    );
}
