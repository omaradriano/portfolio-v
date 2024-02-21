import Icon from "./Icon"
import { useState } from "react"
// import MessageToast from './Toast';
import 'react-toastify/dist/ReactToastify.css';
import launchToast from "../utils/launchToast";

interface Form {
    user: string
    email: string
    password: string
    repeatPassword: string
}

const SignUp = () => {

    const [data, setData] = useState<Form>({
        user: "",
        email: "",
        password: "",
        repeatPassword: ""
    })

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    function throwDataError(message: string): void {
        throw new Error(message)
    }

    const handleSubmit = async () => {

        let emailReg = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/

        try {
            // Errores con el nombre de usuario
            if (!data.user) throwDataError('No existe informacion del nombre de usuario')
            if (data.user.length < 8 || data.user.length > 16) throwDataError('El nombre de usuario debe de tener entre 8 y 16 caracteres')
            if (!data.email) throwDataError('No existen datos en el campo del correo')
            if (!emailReg.test(data.email)) throwDataError('El correo no cumple con el patron')

            if (!/[0-9]+/.test(data.password)) throwDataError('La contrasena debe de tener almenos un numero')
            if (!/[A-Z]+/.test(data.password)) throwDataError('La contrasena debe de tener almenos una mayuscula')
            if (data.password.length < 8 && data.password.length > 16) throwDataError('La contrasena debe de tener entre 8 y 18 caracteres')

            if (data.password !== data.repeatPassword) throwDataError('Las contrasenas no coinciden')

            // Agregar usuario si no hay errores
            fetch('http://localhost:3001/signup', options)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (data.status === 200) {
                        launchToast({mode:'success', message: data.message})
                        // window.location.href = '/'
                    } else {
                        launchToast({mode:'error', message: data.message})
                    }
                    console.log('Server response:', data.message);
                    console.log(data);
                }).catch(err => {
                    console.log('Testeando errores');
                    console.log((err as Error).message);
                    launchToast({mode: 'warning', message: (err as Error).message})
                })
            // Unicamente da un recap de los datos que han sido enviados
            console.log('Datos enviados:', data);
        } catch (error: unknown) {
            // Manejo de errores del lado del cliente
            let err = (error as Error).message
            console.log('Error del cliente: ' + err);
            launchToast({mode: 'warning', message: 'Error del cliente: ' + err})
        }

    };
    return (
        <>
            <div className="signup">
                <h1 className="text-light">Registro</h1>
                <a className='auth__btn auth__signup'>
                    <Icon icon='add_link' />
                    <p className='text-light'>Sign up with google</p>
                </a>
                <p className='hr'>or sign up with email</p>
                <form className="form" action="#">
                    <div className="inputContainer">
                        <label className='text-light' htmlFor="user">Username</label>
                        <input
                            onChange={handleForm}
                            type="text" name="user" id="user" placeholder='Username...' value={data.user} />
                    </div>
                    <div className="inputContainer">
                        <label className='text-light' htmlFor="email">Email</label>
                        <input onChange={handleForm} type="email" name="email" id="email" placeholder='Email...' value={data.email} />
                    </div>
                    <div className="inputContainer">
                        <label className='text-light' htmlFor="password">Password</label>
                        <input onChange={handleForm} type="password" name="password" id="password" placeholder='Password...' value={data.password} />
                    </div>
                    <div className="inputContainer">
                        <label className='text-light' htmlFor="email">Repeat Password</label>
                        <input onChange={handleForm} type="password" name="repeatPassword" id="repeatpassword" placeholder='Repeat password...' />
                    </div>
                    <p className='text-light'>Ya tienes una cuenta? <b className='text-light'>Inicia sesión</b></p>
                    <input className="form__btn btn" type="submit" value="Registro"
                        onClick={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }} />
                </form>
            </div>
        </>
    )
}

export default SignUp