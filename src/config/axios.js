import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept' : 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: false,
})

export default clienteAxios