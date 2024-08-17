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
import PanelAdmin from './admin/PanelAdmin'
import MisPost from './admin/MisPost'
import NuevoPost from './admin/NuevoPost'
import TodosLosBlog from './blog/TodosLosBlog'
import Blog from './blog/Blog'

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
                path: 'proyectos',
                element: <Proyectos />
            },
            {
                path: 'proyecto/readmi/:id',
                element: <Readmi />
            },
            {
                path: 'blog',
                element: <TodosLosBlog />,
            },
            {
                path: 'blog/:id',
                element: <Blog />,
            },
           
        ]       
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'admin',
        element: (      
            <PrivateRoute>
                <Admin />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <PanelAdmin />
            },
            {
                path: 'misProyectos',
                element: <ProyectosAdmin />
            },
            {
                path: 'registroProyecto',
                element: <RegistroProyecto />
            },
            {
                path: 'misPost',
                element: <MisPost />
            },
            {
                path: 'registroPost',
                element: <NuevoPost />
            },
        ]
    },
    {
        path: '*',
        element: <Pagina404 />,
    }
  
])

export default router