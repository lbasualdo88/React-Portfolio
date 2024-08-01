import { createRef, useState } from 'react'
import Alerta from '../components/Alerta'
import { useAuth } from '../hooks/useAuth'



export default function Login() {
    const emailRef = createRef()
    const passwordRef = createRef()
    const [errores, setErrores] = useState([])
    const { login } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        await login(datos, setErrores)
        
    }

    return (
        <>
        
        <main className='flex dark:bg-dark-color1 h-screen w-auto bg-color9 '>
        <div className="bg-color1 max-w-4xl m-auto px-36 py-20 rounded-xl items-center dark:bg-dark-color1 shadow-md dark:shadow-custom-dark">
            <h1 className="text-6xl text-color8 font-bold text-center dark:text-dark-color8">Iniciar Sesión</h1>
            <p className="text-3xl text-center text-color5 dark:text-dark-color5">Administración</p>

            <div className="mt-10 px-5 py-10 dark:bg-dark-color1">
                <form onSubmit={handleSubmit} noValidate>
                    {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

                    <div className="mb-4">
                        <label className="dark:text-dark-color8 text-color8" htmlFor="email">Email:</label>
                        <input
                            type="password"
                            id="email"
                            className="dark:bg-dark-color3 mt-2 w-full p-3 bg-color2 rounded-xl dark:text-dark-color8"
                            name="email"
                            placeholder="Tu Email"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="dark:text-dark-color8 text-color8" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="dark:bg-dark-color3 mt-2 w-full p-3 bg-color2 rounded-xl dark:text-dark-color8"
                            name="password"
                            placeholder="Tu Password"
                            ref={passwordRef}
                        />
                    </div>

                    <input
                        type='submit'
                        value="Iniciar Sesión"
                        className="dark:bg-dark-color1 dark:hover:text-color1 dark:hover:shadow-custom-gray dark:hover:border-color1 dark:shadow-button-dark dark:text-color7 border-2 border-color7 rounded-xl bg-color1 hover:bg-color7 hover:text-color1 text-color7 w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
        </div>
        </main>
       
        </>
    )
}
