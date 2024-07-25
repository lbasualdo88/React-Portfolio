import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio'
import Login from './login/Login'
import Admin from './admin/Admin'
import ProyectosAdmin from './admin/ProyectosAdmin'
import RegistroProyecto from './admin/RegistroProyecto'
import Proyectos from './views/Proyectos'
import Readmi from './views/Readmi'
import PrivateRoute from './components/PrivateRoute'
import Pagina404 from './views/Pagina404'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: '/proyectos',
                element: <Proyectos />
            },
            {
                path: '/proyecto/readmi/:id',
                element: <Readmi />
            },
            {
                path: '/*',
                element: <Pagina404 />,
            }
        ]       
    },
   /* {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/admin',
        element: (      
            <PrivateRoute>
                <Admin />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <ProyectosAdmin />
            },
            {
                path: '/admin/registroProyecto',
                element: <RegistroProyecto />
            },
        ]
    },*/
  
])

export default router