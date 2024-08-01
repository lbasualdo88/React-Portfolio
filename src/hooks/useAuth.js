
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import clienteAxios from '../config/axios'

export const useAuth = () => {
    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        clienteAxios.post('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login = async (datos, setErrores) => {
        try {
            // Obtener el token CSRF           
            await clienteAxios.get('/sanctum/csrf-cookie'); 
            const csrfToken = getCookie('XSRF-TOKEN');
            const { data } = await clienteAxios.post('/api/login', {
                ...datos,
                _token: csrfToken // Incluye el token CSRF en los datos de la solicitud
            })
            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrores([])
            await mutate()
            navigate('/admin');
        } catch (error) {
            console.error(error)
            setErrores(Object.values(error.response.data.errors))
        }
    }

    // Función para obtener el valor de una cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

    const logout = async () => {
        try {
            await clienteAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
            navigate('/');
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    return {
        login,
        logout,
        user,
        error
    }
}
