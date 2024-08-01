import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Footer from './../template/Footer';


export default function Admin() {

    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error('Error al cerrar sesión:', error)
        }
    }

  return (
    <>
 
        <div className="flex flex-col gap-4 lg:flex-row md:justify-between py-8 items-center w-screen dark:bg-dark-color1">
            <Link to="/admin">        
                <h1 className="text-6xl text-color8 font-semibold text-center m-4 dark:text-dark-color8">Developer
                    <span className="text-3xl text-color5 dark:text-dark-color5">Full Stack</span> 
                </h1>
            </Link>
            <div className="mr-8" >
                <nav className="flex flex-col md:flex-row contenedor gap-4 md:gap-20 mb-1">
                    <Link
                    className="dark:border-color7 dark:hover:text-dark-color10 dark:hover:border-dark-color10 dark:shadow-button-dark dark:hover:shadow-custom-gray hover:text-color3 text-color7 no-underline gap-4 text-3xl font-bold p-4 text-center border-2 border-color1 rounded-xl hover:border-color3" 
                    to="/admin"> Mis Proyectos</Link>
                    <Link
                    className="dark:border-color7 dark:hover:text-dark-color10 dark:hover:border-dark-color10 dark:shadow-button-dark dark:hover:shadow-custom-gray hover:text-color3 text-color7 no-underline gap-4 text-3xl font-bold p-4 text-center border-2 border-color1 rounded-xl hover:border-color3" 
                    to="./registroProyecto">Crear Proyecto</Link>
                    <button
                    onClick={handleLogout}
                    className="dark:border-color7 dark:bg-color7 dark:text-color10 dark:hover:bg-dark-color1 dark:hover:border-dark-color10 dark:hover:shadow-custom-gray dark:hover:text-dark-color10 text-color1 bg-color7 hover:bg-color3 no-underline gap-4 text-3xl font-bold p-4 text-center border-2 border-color1 rounded-xl" 
                    >Cerrar Sesion</button>
                </nav>
            </div>
        </div>  
    
        <Outlet />
    
    <Footer/>
    </>
  )
}
